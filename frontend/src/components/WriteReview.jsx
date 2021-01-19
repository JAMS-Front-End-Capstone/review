import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const  WriteReview = () => {
  return (  
    <div className='mainWrite'>
      <div className='subWrite'>
        <div className='write bottom'>
          <h2 className='writeText'>Reviews</h2>
          <div></div>
          <div className='mainLeftWrite'>
            <div className='subLeftWrite'>
              <span className='writeReview'>
                <a className='ui_button primary war-button'>Write a review</a>
              </span>
              <div>
                <div>
                  <div className='dropDownBox'>
                    <span className='ui_icon caret-down'>
                    </span>
                  </div>

                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
 
export default WriteReview;