import React from 'react';

const  Summary = () => {
  return (  
    <div className='firstComponent'>
      <div className='ui_columns'>
        <div className='ui_column is-5 is-12-mobile'>
          <div className='travelerRating'>Traveler Rating</div>
          <ul className='ratingBar'>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='ReviewRatingFilter_5' value='5' disabled />
              <label for='ReviewRatingFilter_5' className='classified class_end'>
                Excellent
              </label>
              <span className='ratingStick'>
                <span className='fullBar'>
                  <span className='percentBar' style={{width:'26.5625%'}}></span>
                </span>
              </span>
              <span className='ratingNum'>34</span>
            </li>
            <li className='ui_checkbox _3gEj_Jb5'>
            <input type='checkbox' id='ReviewRatingFilter_4' value='4'></input>
            <label for='ReviewRatingFilter_4' className='classified class_end'>
              Very Good
            </label>
            <span className='ratingStick'>
              <span className='fullBar'>
                <span className='percentBar' style={{width:'50%'}}></span>
              </span>
            </span>
            <span className='ratingNum'>64</span>
          </li>
          <li className='ui_checkbox _3gEj_Jb5'>
            <input type='checkbox' id='ReviewRatingFilter_3' value='3'></input>
            <label for='ReviewRatingFilter_3' className='classified class_end'>
              Average
            </label>
            <span className='ratingStick'>
              <span className='fullBar'>
                <span className='percentBar' style={{width:'17.1875%'}}></span>
              </span>
            </span>
            <span className='ratingNum'>22</span>
          </li>
          <li className='ui_checkbox _3gEj_Jb5'>
            <input type='checkbox' id='ReviewRatingFilter_2' value='2'></input>
            <label for='ReviewRatingFilter_2' className='classified class_end'>
              Poor
            </label>
            <span className='ratingStick'>
              <span className='fullBar'>
                <span className='percentBar' style={{width:'6.25%'}}></span>
              </span>
            </span>
            <span className='ratingNum'>8</span>
          </li>
          <li className='ui_checkbox _3gEj_Jb5'>
            <input type='checkbox' id='ReviewRatingFilter_1' value='1'></input>
            <label for='ReviewRatingFilter_1' className='classified class_end'>
              Terrible
            </label>
            <span className='ratingStick'>
              <span className='fullBar'>
                <span className='percentBar' style={{width:'0%'}}></span>
              </span>
            </span>
            <span className='ratingNum'>0</span>
          </li>
          </ul>
        </div>
        <div className='ui_column  is-shown-at-tablet'>
          
        </div>
      </div>
    </div>
  );
}
 
export default Summary;