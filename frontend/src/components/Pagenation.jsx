/* eslint-disable react/prop-types */
import React from 'react';
import PageNums from './PageNums';

const Pagenation = ({ postsPerPage, totalPosts, paginate }) => (

  <div className="pagenationWrapper">
    <div className="pagenation to-center">
      <a href className="previous ui_button secondary">Previous</a>
      <a href className="next ui_button primary">Next</a>
      <PageNums
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </div>
  </div>
);

export default Pagenation;
