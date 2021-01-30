import React from 'react';
import Summary from './tabs/Summary';
import SearchBar from './tabs/SearchBar';
import ReviewList from './tabs/ReviewList';

// eslint-disable-next-line react/prop-types
const TabReview = ({ ratings, list, rateArray, handleFilters }) => (

  <div className="reviewTabs">
    <div>
      <Summary ratings={ratings} rateArray={rateArray} handleFilters={handleFilters} />
      <SearchBar />
      <ReviewList list={list} />
    </div>
  </div>

);

export default TabReview;
