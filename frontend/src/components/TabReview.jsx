import React from 'react';
import Summary from './tabs/Summary.jsx';
import SearchBar from './tabs/SearchBar.jsx';
import ReviewList from './tabs/ReviewList.jsx';





const  TabReview = () => {
  return (  
    <div>
      <h1>TabReview</h1>
      < Summary />
      < SearchBar />
      < ReviewList />
    </div>
  );
}
 
export default TabReview;