import React from 'react';
import propTypes from 'prop-types';
import Summary from './tabs/Summary';
import SearchBar from './tabs/SearchBar';
import ReviewList from './tabs/ReviewList';

const TabReview = ({ ratings }) => (

  <div className="reviewTabs">
    <div>
      <Summary ratings={ratings} />
      <SearchBar />
      <ReviewList />
    </div>
  </div>

);

TabReview.propTypes = {
  ratings: propTypes.arrayOf(propTypes.number).isRequired,
};
export default TabReview;
