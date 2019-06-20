/**
 * @file 
 * Contains set of endpoints(urls) that correspond to HTTP 
 * methods(GET, POST, PUT and DELETE); for accessing `tasks` from
 * `mysql` database.
 */
const express = require('express');

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

module.exports = app;