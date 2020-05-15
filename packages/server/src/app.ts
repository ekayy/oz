import 'dotenv/config';
import axios from 'axios';
import cors = require('cors');
import express = require('express');
import { Request, Response } from 'express';
import logger = require('morgan');
import bodyParser = require('body-parser');
import Redis = require('ioredis');
const redis = new Redis();

const base = require('airtable').base(process.env.AIRTABLE_BASE_ID);

const app = express();

app.use(
  cors({
    origin: process.env.STORYBOOK_URL,
  })
);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Search brands name based on url query parameter
app.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    const cached = await redis.get(req.url.toLowerCase());

    if (cached !== null) {
      res.send(JSON.parse(cached));
      return;
    }

    try {
      const records = await base('Brands')
        .select({
          filterByFormula: `
            AND(
              SEARCH(LOWER("${req.query.category || ''}"), LOWER({Category})),
              SEARCH(LOWER("${req.query.name || ''}"), LOWER({Name}))
            )
         `,
          maxRecords: 20,
        })
        .all();

      const data = records[0].fields;
      redis.set(req.url.toLowerCase(), JSON.stringify(data), 'EX', 60 * 60 * 24);
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Please try again.');
    }
  }
);

app.get(
  '/news',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const news = await axios.get(`https://${process.env.NEWS_API_URL}/api/Search/NewsSearchAPI`, {
        headers: {
          'Content-Type': 'application/octet-stream',
          'x-rapidapi-host': process.env.NEWS_API_URL,
          'x-rapidapi-key': process.env.NEWS_API_KEY,
        },
        params: {
          q: req.query.name,
          autoCorrect: 'false',
          pageNumber: '1',
          pageSize: '4',
          safeSearch: 'true',
        },
      });

      res.send(news.data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Please try again.');
    }
  }
);

export default app;
