const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;

const ReviewSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  user: {
    name: String,
    iconURL: String,
    location: [String],
    contributions: Number,
    helpfulVotes: Number
  },
  rating: Number,
  tagline: Number,
  body: String,
  timeOfTravel: String,
  reviewDate: String,
  language: String,
  imageURL: [String],
  tripType: String,
  helpfulVotes: Number,
  }
);


const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;