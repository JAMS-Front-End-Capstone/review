import React, { useEffect, useState } from 'react';
import Menu from './Menu.jsx';
import WriteReview from './WriteReview.jsx';
import TabReview from './TabReview.jsx';

const Reviews = () => {
  return (  
    <div className='mainReview'>
      < Menu />
      < WriteReview />      
      < TabReview />
    </div>

  );
}
 
export default Reviews;