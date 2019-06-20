const request = require('supertest');
const app = require('./app');

test('should pass', () => {
  return request(app).get('/').expect(200);
})
