import React, { useState } from 'react';
import PageNums from './PageNums';

const Pagenation = () => {
  const [list, setList] = useState([]);
  return (
    <div className="pagenationWrapper">
      <div className="pagenation to-center">
        <a href className="previous">Previous</a>
        <a href className="next">Next</a>
      </div>

    </div>
  );
};

export default Pagenation;
