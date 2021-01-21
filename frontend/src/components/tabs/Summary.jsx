/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import propTypes from 'prop-types';

const Summary = ({ ratings }) => (
  <div className="firstComponent">
    <div className="ui_columns">
      <div className="ui_column is-5 is-12-mobile">
        <div className="travelerRating">Traveler Rating</div>
        <ul className="ratingBar">
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="ReviewRatingFilter_5" value="5" />
            <label htmlFor="ReviewRatingFilter_5" className="classified class_end">
              Excellent
            </label>
            <span className="ratingStick">
              <span className="fullBar">
                <span className="percentBar" style={{ width: `${ratings[0]}%` }} />
              </span>
            </span>
            <span className="ratingNum">{ratings[5]}</span>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="ReviewRatingFilter_4" value="4" />
            <label htmlFor="ReviewRatingFilter_4" className="classified class_end">
              Very Good
            </label>
            <span className="ratingStick">
              <span className="fullBar">
                <span className="percentBar" style={{ width: `${ratings[1]}%` }} />
              </span>
            </span>
            <span className="ratingNum">{ratings[6]}</span>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="ReviewRatingFilter_3" value="3" />
            <label htmlFor="ReviewRatingFilter_3" className="classified class_end">
              Average
            </label>
            <span className="ratingStick">
              <span className="fullBar">
                <span className="percentBar" style={{ width: `${ratings[2]}%` }} />
              </span>
            </span>
            <span className="ratingNum">{ratings[7]}</span>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="ReviewRatingFilter_2" value="2" />
            <label htmlFor="ReviewRatingFilter_2" className="classified class_end">
              Poor
            </label>
            <span className="ratingStick">
              <span className="fullBar">
                <span className="percentBar" style={{ width: `${ratings[3]}%` }} />
              </span>
            </span>
            <span className="ratingNum">{ratings[8]}</span>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="ReviewRatingFilter_1" value="1" />
            <label htmlFor="ReviewRatingFilter_1" className="classified class_end">
              Terrible
            </label>
            <span className="ratingStick">
              <span className="fullBar">
                <span className="percentBar" style={{ width: `${ratings[4]}%` }} />
              </span>
            </span>
            <span className="ratingNum">{ratings[9]}</span>
          </li>
        </ul>
      </div>
      <div className="ui_column  is-shown-at-tablet">
        <div className="travelerRating"> Traveler type</div>
        <ul className="ratingBar">
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTypeFilter_0" value="Family" />
            <label htmlFor="TravelTypeFilter_0" className="classified">
              Family
            </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTypeFilter_1" value="Couples" />
            <label htmlFor="TravelTypeFilter_1" className="classified">
              Couples
            </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTypeFilter_2" value="Solo" />
            <label htmlFor="TravelTypeFilter_2" className="classified">
              Solo
            </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTypeFilter_3" value="Business" />
            <label htmlFor="TravelTypeFilter_3" className="classified">
              Business
            </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTypeFilter_4" value="Friends" />
            <label htmlFor="TravelTypeFilter_3" className="classified">
              Friends
            </label>
          </li> 
        </ul>
      </div>
      <div className="ui_column  is-shown-at-tablet">
        <div className="travelerRating"> Time of year</div>
        <ul className="ratingBar">
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTimeFilter_0" value="0" />
            <label htmlFor="TravelTimeFilter_0" className="classified">
              Mar-May
              </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTimeFilter_1" value="1" />
            <label htmlFor="TravelTimeFilter_1" className="classified">
              Jun-Aug
              </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTimeFilter_2" value="2" />
            <label htmlFor="TravelTimeFilter_2" className="classified">
              Sep-Nov
              </label>
          </li>
          <li className="ui_checkbox _3gEj_Jb5">
            <input type="checkbox" id="TravelTimeFilter_3" value="3" />
            <label htmlFor="TravelTimeFilter_3" className="classified">
              Dec-Feb
              </label>
          </li>
        </ul> 
      </div>  
      <div className="ui_column  is-3-tablet is-shown-at-tablet">
        <div className="travelerRating"> Language</div>
        <ul className="ratingBar">
          <li className="ui_radio _3gEj_Jb5">
            <input type="radio" id="LanguageFilter_0" value />
            <label htmlFor="LanguageFilter_0" className="languageOption">
              <span className="lang"> All languages</span>
            </label>
          </li>
          <li className="ui_radio _3gEj_Jb5">
            <input type="radio" id="LanguageFilter_1" value="fr" />
            <label htmlFor="LanguageFilter_1" className="languageOption">
              <span className="lang"> French</span>
              <span className="langNum">
                (70)
              </span>
            </label>
          </li>
          <li className="ui_radio _3gEj_Jb5">
            <input type="radio" id="LanguageFilter_2" value="en" />
            <label htmlFor="LanguageFilter_2" className="languageOption">
              <span className="lang"> English</span>
              <span className="langNum">
                (36)
              </span>
            </label>
          </li>
          <li className="ui_radio _3gEj_Jb5">
            <input type="radio" id="LanguageFilter_3" value="es" />
            <label htmlFor="LanguageFilter_3" className="languageOption">
              <span className="lang"> Spanish</span>
              <span className="langNum">
                (8)
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
Summary.propTypes = {
  ratings: propTypes.number.isRequired,
};
export default Summary;
