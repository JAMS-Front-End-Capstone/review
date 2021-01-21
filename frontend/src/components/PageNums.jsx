import React, { useState } from 'react';

const PageNums = () => {
  const [list, setList] = useState([]);
  return (
    <div className="pageNumbers">
      <a href className="pageNum">1</a>
    </div>
  );
};

export default PageNums;
