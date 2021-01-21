const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const db = require('../database/index.js');
const Review = require('../database/Reviews.js');
const getPercentage = require('./functions.js');

const app = express();
const port = 3003;
const sum = 40;
const percent = [getPercentage(20, sum),
  getPercentage(11, sum),
  getPercentage(5, sum),
  getPercentage(4, sum),
  getPercentage(0, sum),
  20, 11, 5, 4, 0];

// middleware
app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/reviews', (req, res) => {
  // eslint-disable-next-line array-callback-return
  Review.find({})
    .then((reviews) => res.send(reviews))
    .catch((err) => res.send(err));
  console.log('sent');
});

app.get('/api/ratings', (req, res) => {
  res.send(percent);
  console.log('sent');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
