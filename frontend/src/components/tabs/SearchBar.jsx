import React from 'react';

const  SearchBar = () => {
  return (  
    <div className='searchBar'>
      <span className='ui_icon search wF-i9JOp'>

      </span>
      <input type='text' value className='search' placeholder='search reviews' autoComplete='on' />    
    </div>
  );
}
 
export default SearchBar;