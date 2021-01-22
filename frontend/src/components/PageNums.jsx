import React from 'react';

const PageNums = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pageNumbers">
      {pageNumbers.map((number) => (
        <a href onClick={() => paginate(number)} className="pageNum">{number}</a>
      ))}
    </div>
  );
};

export default PageNums;
