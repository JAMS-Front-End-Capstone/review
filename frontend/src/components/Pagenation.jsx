import React, { useState } from 'react';
import PageNums from './PageNums';

const Pagenation = () => {
  const [list, setList] = useState([]);
  return (
    <div className="pagenationWrapper">
      <div className="pagenation to-center">
        <a href className="previous ui_button secondary">Previous</a>
        <a href className="next ui_button primary">Next</a>
      </div>
      <PageNums />
    </div>
  );
};

export default Pagenation;
