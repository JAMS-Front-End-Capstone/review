import React from 'react';

const  SearchBar = () => {
  return (  
    <div className='searchBar'>
      <span className='ui_icon search wF-i9JOp'>

      </span>
      <input type='text' className='start middle searchRe' placeholder='search reviews' autoComplete='on' />    
    </div>
  );
}
 
export default SearchBar;