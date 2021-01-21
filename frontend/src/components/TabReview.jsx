import React from 'react';
import propTypes from 'prop-types';
import Summary from './tabs/Summary';
import SearchBar from './tabs/SearchBar';
import ReviewList from './tabs/ReviewList';

// eslint-disable-next-line react/prop-types
const TabReview = ({ ratings, list, loading }) => (

  <div className="reviewTabs">
    <div>
      <Summary ratings={ratings} />
      <SearchBar />
      <ReviewList list={list} loading={loading} />
    </div>
  </div>

);

TabReview.propTypes = {
  ratings: propTypes.arrayOf(propTypes.number).isRequired,
  loading: propTypes.bool.isRequired,

};
export default TabReview;
