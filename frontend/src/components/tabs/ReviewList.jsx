/* eslint-disable react/prop-types */
import React from 'react';
// import propTypes from 'prop-types';

import ReviewSingle from './ReviewSingle';

// eslint-disable-next-line react/prop-types
const ReviewList = ({ list }) => (
  <div>
    {list.map((item) => (
      <ReviewSingle item={item} />
    ))}
  </div>
);

export default ReviewList;
