/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import PageNums from './PageNums';

const Pagenation = ({ postsPerPage, totalPosts, paginate, currentPage, prev, next }) => (

  <div className="pagenationWrapper">
    <div className="pagenation to-center">
      <a href="" onClick={() => prev()} className="previous ui_button secondary">Previous</a>
      <a href="" onClick={() => next()} className="next ui_button primary">Next</a>
      <PageNums
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  </div>
);

export default Pagenation;
