import React, { useEffect, useState } from 'react';
import Menu from './Menu.jsx';
import WriteReview from './WriteReview.jsx';
import TabReview from './TabReview.jsx';
//import './Reviews.css';

const Reviews = () => {
  return (  
    <div className="wrapper">
      <div className='mainReview'>
        < Menu />
        < WriteReview />      
        < TabReview />
      </div>
    </div>

  );
}
 
export default Reviews;