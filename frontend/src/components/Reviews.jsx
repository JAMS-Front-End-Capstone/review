import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import WriteReview from './WriteReview';
import TabReview from './TabReview';
import Pagenation from './Pagenation';

const Reviews = () => {
  const [list, setList] = useState([]);
  const [ratingList, setRatingList] = useState([]);

  const getReviews = () => {
    axios.get('/api/reviews')
      .then((reviews) => {
        setList(reviews.data);
      });
  };

  const getRatings = () => {
    axios.get('/api/ratings')
      .then((ratings) => {
        setRatingList(ratings.data);
      });
  };

  useEffect(() => {
    getReviews();
    getRatings();
  }, []);

  return (
    <div className="wrapper">
      <div className="mainReview">
        <Menu total={list.length} />
        <WriteReview />
        <TabReview ratings={ratingList} />
        <Pagenation />
      </div>
    </div>
  );
};

export default Reviews;
