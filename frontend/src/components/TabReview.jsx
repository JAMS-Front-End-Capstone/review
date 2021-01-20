import React, { useState } from 'react';
import axios from 'axios';
import Summary from './tabs/Summary';
import SearchBar from './tabs/SearchBar';
import ReviewList from './tabs/ReviewList';

const TabReview = () => {
  const [list, setList] = useState([]);

  const getReviews = () => {
    axios.get('/api/reviews')
      .then((reviews) => {
        setList(reviews.data);
      });
  };
  return (
    <div className="reviewTabs">
      <div>
        <Summary />
        <SearchBar />
        <ReviewList list={list} getReviews={getReviews} />
      </div>
    </div>
  );
};

export default TabReview;
