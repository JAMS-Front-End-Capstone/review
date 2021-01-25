/* eslint-disable no-console */
const faker = require('faker');
const Review = require('./Reviews.js');
const db = require('./index.js');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max - 1) + 1);
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 40; i++) {
  const review = new Review({
    title: faker.lorem.words(), // String is shorthand for {type: String}
    user: {
      name: faker.internet.userName(),
      iconURL: 'https://i.pravatar.cc/100',
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
    } else if (i === 10) {
      console.log(result);
      db.disconnect();
    }
  });
}
