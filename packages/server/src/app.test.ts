import app from './app';
import request = require('supertest');
import Redis = require('ioredis');
const redis = new Redis();

describe('GET brand on "/"', () => {
  test('should respond when only name url param exists', async () => {
    const response = await request(app)
      .get('/')
      .query({ name: 'Nesquik' });

    expect(response.status).toBe(200);
    expect(response.body.parent).toContain('Nestle');
  });

  test('should respond when only category url param exists', async () => {
    const response = await request(app)
      .get('/')
      .query({ category: 'Grocery' });

    expect(response.status).toBe(200);

    expect(response.body.category).toContain('Grocery');
  });

  test('should respond by both category and name url params', async () => {
    const response = await request(app)
      .get('/')
      .query({ name: 'Kashi', category: 'Grocery' });

    expect(response.status).toBe(200);
    expect(response.body.category).toHaveLength(1);
  });
});

describe('Redis', () => {
  test('is retrieving cached value', async () => {
    const response = await request(app)
      .get('/')
      .query({ name: 'Kashi' });

    const cachedResponse = await redis.get('/?name=kashi');

    if (cachedResponse) {
      expect(cachedResponse).toBeDefined();
      expect(JSON.parse(cachedResponse)).toMatchObject(response.body);
    }
  });

  test('when no existing value for key', async () => {
    await redis.del('/?name=kashi');

    const response = await request(app)
      .get('/')
      .query({ name: 'Kashi' });

    const cachedResponse = await redis.get('/?name=kashi');

    if (cachedResponse) {
      expect(JSON.parse(cachedResponse)).toMatchObject(response.body);
    }
  });
});
