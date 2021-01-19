import React, { useState } from 'react';
import Summary from './tabs/Summary.jsx';
import SearchBar from './tabs/SearchBar.jsx';
import ReviewList from './tabs/ReviewList.jsx';





const  TabReview = () => {
  const [list, setList] = useState([]);


  const getReviews = () => {
    axios.get(`/api/reviews`)
      .then((reviews) => {
        setList(reviews.data);
      });
  };
  return (  
    <div>
      <h1>TabReview</h1>
      < Summary />
      < SearchBar />
      < ReviewList list={list}/>
    </div>
  );
}
 
export default TabReview;