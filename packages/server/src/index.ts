import 'dotenv/config';
import axios from 'axios';
// import cors = require('cors');
import express = require('express');
import { Request, Response } from 'express';
import logger = require('morgan');
import bodyParser = require('body-parser');

const base = require('airtable').base(process.env.AIRTABLE_BASE_ID);

const app = express();

// app.use(
//   cors({
//     origin: ['https://contextualwebsearch-websearch-v1.p.rapidapi.com', /\.yangbanking.\com$/],
//   })
// );

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let records = [];

// // called for every page of records
// const processPage = (partialRecords, fetchNextPage) => {
//   records = [...records, ...partialRecords];
//   fetchNextPage();
// };

// // called when all the records have been retrieved
// const processRecords = err => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   //process the `records` array and do something with it
// };

// Search brands name based on url query parameter
app.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const records = await base('Brands')
        .select({
          filterByFormula: `SEARCH(LOWER("${req.query.name}"), LOWER(Name))`,
          maxRecords: 20,
        })
        .all();

      res.send(records);

      // const activeRecords = records.filter(record => record.get('active') === 1);
      // const randomRecord = activeRecords[Math.floor(Math.random() * activeRecords.length)];

      // res.send(randomRecord);
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

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`));
