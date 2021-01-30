/* eslint-disable no-console */
const faker = require('faker');
const Review = require('./Reviews.js');
const db = require('./index.js');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max - 1) + 1);
}

// eslint-disable-next-line no-plusplus

for (let i = 0; i < 15; i++) {
  const review = new Review({
    item_id: 1,
    title: faker.lorem.words(), // String is shorthand for {type: String}
    user: {
      name: faker.internet.userName(),
      iconURL: `https://review-budle.s3-us-west-2.amazonaws.com/Archive/${getRandomInt(7)}.jpg`,
      location: [faker.address.city(), faker.address.country()],
      contributions: getRandomInt(130),
      helpfulVotes: getRandomInt(30),
    },
    rating: getRandomInt(6), // change to from 0 to 5
    body: faker.lorem.paragraph(),
    timeOfTravel: faker.date.month(),
    reviewDate: faker.date.month(),
    language: 'English',
    tripType: 'couple',
  });

  review.save((err, result) => {
    if (err) {
      console.log(err);
    } else if (i === 15) {
      console.log('saved');
      db.close();
    }
  });
}
