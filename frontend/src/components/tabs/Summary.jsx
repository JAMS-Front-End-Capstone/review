import React from 'react';

const Summary = () => {
  return (  
    <div className="firstComponent">
      <div className='ui_columns'>
        <div className='ui_column is-5 is-12-mobile'>
          <div className='travelerRating'>Traveler Rating</div>
          <ul className='ratingBar'>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='ReviewRatingFilter_5' value='5'/>
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
                <span className='percentBar' style={{ width:'0%' }}></span>
              </span>
            </span>
            <span className='ratingNum'>0</span>
          </li>
          </ul>
        </div>
        <div className='ui_column  is-shown-at-tablet'>
          <div className='travelerRating'> Traveler type</div>
          <ul className='ratingBar'>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='TravelTypeFilter_0' value='Family' />
              <label for='TravelTypeFilter_0' className='classified'>
                Family
              </label>
            </li>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='TravelTypeFilter_1' value='Couples' />
              <label for='TravelTypeFilter_1' className='classified'>
                Couples
              </label>
            </li>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='TravelTypeFilter_2' value='Solo' />
              <label for='TravelTypeFilter_2' className='classified'>
                Solo
              </label>
            </li>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='TravelTypeFilter_3' value='Business' />
              <label for='TravelTypeFilter_3' className='classified'>
                Business
              </label>
            </li>
            <li className='ui_checkbox _3gEj_Jb5'>
              <input type='checkbox' id='TravelTypeFilter_4' value='Friends' />
              <label for='TravelTypeFilter_3' className='classified'>
                Friends
              </label>
            </li> 
          </ul>
        </div>
        <div className='ui_column  is-shown-at-tablet'>
          <div className='travelerRating'> Time of year</div>
            <ul className='ratingBar'>
              <li className='ui_checkbox _3gEj_Jb5'>
                <input type='checkbox' id='TravelTimeFilter_0' value='0' />
                <label for='TravelTimeFilter_0' className='classified'>
                  Mar-May
                </label>
              </li>
              <li className='ui_checkbox _3gEj_Jb5'>
                <input type='checkbox' id='TravelTimeFilter_1' value='1' />
                <label for='TravelTimeFilter_1' className='classified'>
                  Jun-Aug
                </label>
              </li>
              <li className='ui_checkbox _3gEj_Jb5'>
                <input type='checkbox' id='TravelTimeFilter_2' value='2' />
                <label for='TravelTimeFilter_2' className='classified'>
                  Sep-Nov
                </label>
              </li>
              <li className='ui_checkbox _3gEj_Jb5'>
                <input type='checkbox' id='TravelTimeFilter_3' value='3' />
                <label for='TravelTimeFilter_3' className='classified'>
                  Dec-Feb
                </label>
              </li>
            </ul> 
        </div>  
        <div className='ui_column  is-3-tablet is-shown-at-tablet'>
          <div className='travelerRating'> Language</div>
          <ul className='ratingBar'>
            <li className='ui_radio _3gEj_Jb5'>
              <input type='radio' id='LanguageFilter_0' value />
              <label for='LanguageFilter_0' className='languageOption'>
                  <span className='lang'> All languages</span>
              </label>
            </li>
            <li className='ui_radio _3gEj_Jb5'>
              <input type='radio' id='LanguageFilter_1' value='fr' />
              <label for='LanguageFilter_1' className='languageOption'>
                  <span className='lang'> French</span>
                  <span className='langNum'>
                    (70)
                  </span>
              </label>
            </li>
            <li className='ui_radio _3gEj_Jb5'>
              <input type='radio' id='LanguageFilter_2' value='en' />
              <label for='LanguageFilter_2' className='languageOption'>
                  <span className='lang'> English</span>
                  <span className='langNum'>
                    (36)
                  </span>
              </label>
            </li>
            <li className='ui_radio _3gEj_Jb5'>
              <input type='radio' id='LanguageFilter_3' value='es' />
              <label for='LanguageFilter_3' className='languageOption'>
                  <span className='lang'> Spanish</span>
                  <span className='langNum'>
                    (8)
                  </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
