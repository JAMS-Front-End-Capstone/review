/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Review = require('../database/Reviews.js');
const funcs = require('./functions.js');
const db = require('../database/index.js');

const app = express();
const port = 3003;

// middleware
app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/reviews/', (req, res) => {
  // eslint-disable-next-line array-callback-return
  Review.find({})
    .then((reviews) => res.send(reviews))
    .catch((err) => res.send(err));
  console.log('sent');
});

app.get('/api/ratings', (req, res) => {
  Review.find({}).then((reviewList) => funcs.getRatings(reviewList))
    .then((ratingList) => funcs.getPercentageList(ratingList))
    .then((result) => res.send(result));
});

// app.get('/api/reviewFilter', (req, res) => {
//   Review.find({$and:[{ rating: { $in: [1] } },{tripeType:0}]})
//     .then((data) => res.send(data));
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
