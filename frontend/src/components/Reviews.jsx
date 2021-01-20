import React from 'react';
import Menu from './Menu';
import WriteReview from './WriteReview';
import TabReview from './TabReview';
import Pagenation from './Pagenation';

const Reviews = () => (
  <div className="wrapper">
    <div className="mainReview">
      <Menu />
      <WriteReview />
      <TabReview />
      <Pagenation />
    </div>
  </div>
);

export default Reviews;
