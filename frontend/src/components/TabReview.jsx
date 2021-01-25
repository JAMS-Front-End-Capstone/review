import React from 'react';
import propTypes from 'prop-types';
import Summary from './tabs/Summary';
import SearchBar from './tabs/SearchBar';
import ReviewList from './tabs/ReviewList';

// eslint-disable-next-line react/prop-types
const TabReview = ({ ratings, list, rateArray }) => (

  <div className="reviewTabs">
    <div>
      <Summary ratings={ratings} rateArray={rateArray} />
      <SearchBar />
      <ReviewList list={list} />
    </div>
  </div>

);

TabReview.propTypes = {
  ratings: propTypes.arrayOf(propTypes.number).isRequired,

};
export default TabReview;
