const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//const db = require('../database/index.js');
const Review = require('../database/Reviews.js');
const app = express();
const port = 3003;

//middleware
app.use(cors());
app.use(morgan('tiny'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/reviews', (req, res) => {
  Review.find((err,data) => {
    if(err) {
      console.log(err);
    } else {
      res.send(data);
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})