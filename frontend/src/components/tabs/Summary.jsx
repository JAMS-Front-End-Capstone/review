/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Summary = ({ ratings, rateArray, handleFilters }) => {
  // const [ratingsChecked, setRatingsChecked] = useState([]);
  // const [typeChecked, setTypeChecked] = useState([]);
  // //const [timeChecked, setTimeChecked] = useState([]);
  // //const [langChecked, SetLangChecked] = ustState('All languages');

  // const handleRateclick = (input) => {
  //   const currentIndex = ratingsChecked.indexOf(input);
  //   const newChecked = [...ratingsChecked];

  //   if (currentIndex === -1) {
  //     newChecked.push(input);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setRatingsChecked(newChecked);
  //   handleFilters(newChecked, 'ratings');
  // };

  // const handleTypeclick = (input) => {
  //   const currentIndex = typeChecked.indexOf(input);
  //   const newChecked = [...typeChecked];

  //   if (currentIndex === -1) {
  //     newChecked.push(input);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setTypeChecked(newChecked);
  //   handleFilters(newChecked, 'type');
  // };

  // const handleTimeclick = (input) => {
  //   const currentIndex = timeChecked.indexOf(input);
  //   const newChecked = [...timeChecked];

  //   if (currentIndex === -1) {
  //     newChecked.push(input);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setTypeChecked(newChecked);
  //   handleFilters(newChecked, 'type');
  // };

  const reviewId = ['ReviewRatingFilter_5', 'ReviewRatingFilter_4', 'ReviewRatingFilter_3', 'ReviewRatingFilter_2', 'ReviewRatingFilter_1'];
  const travelRatings = ratings.slice(0, 5).map((rating, index) => (
    <li className="ui_checkbox _3gEj_Jb5" key={reviewId[index]}>

      <input
        type="checkbox"
        id={reviewId[index]}
        value={index}
        // onClick={() => handleRateclick(rateArray[index].id)}
      />
      <label htmlFor={reviewId[index]} className="classified class_end">
        {rateArray[index].name}
      </label>
      <span className="ratingStick">
        <span className="fullBar">
          <span className="percentBar" style={{ width: `${ratings[index]}%` }} />
        </span>
      </span>
      <span className="ratingNum">{ratings[index + 5]}</span>
    </li>
  ));
  const typeNames = ['Family', 'Couples', 'Solo', 'Business', 'Friends'];
  const typeFilter = ['TravelTypeFilter_0', 'TravelTypeFilter_1', 'TravelTypeFilter_2', 'TravelTypeFilter_3', 'TravelTypeFilter_4', 'TravelTypeFilter_5'];
  const travelTypes = typeNames.map((typeName, index) => (
    <li className="ui_checkbox _3gEj_Jb5">
      <input
        type="checkbox"
        id={typeFilter[index]}
        value={typeNames[index]}
        // onClick={() => handleTypeclick(typeNames[index])}
      />
      <label htmlFor={typeFilter[index]} className="classified">
        {typeNames[index]}
      </label>
    </li>
  ));

  const travelMonths = ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'];
  const timeFilter = ['TravelTimeFilter_0', 'TravelTimeFilter_1', 'TravelTimeFilter_2', 'TravelTimeFilter_3'];
  const travelTimes = travelMonths.map((travelMonth, index) => (
    <li className="ui_checkbox _3gEj_Jb5">
      <input
        type="checkbox"
        id={timeFilter[index]}
        value={index}
        // onClick={() => handleRateclick(travelMonths[index])}
      />
      <label htmlFor={timeFilter[index]} className="classified">
        {travelMonths[index]}
      </label>
    </li>
  ));

  const langTypes = ['All languages', 'French', 'English', 'Spanish'];
  const langFilter = ['LanguageFilter_0', 'LanguageFilter_1', 'LanguageFilter_2', 'LanguageFilter_3'];
  const travelLangs = langTypes.map((travelLan, index) => (
    <li className="ui_radio _3gEj_Jb5">
      <input
        type="radio"
        id={langFilter[index]}
        value={langTypes[index]}
        name="langu"
        //checked={langTypes[index] === 'All languages'}
      />
      <label htmlFor={langFilter[index]} className="languageOption">
        <span className="lang">
          {langTypes[index]}
        </span>
      </label>
    </li>
  ));

  return (
    <div className="firstComponent">
      <div className="ui_columns">
        <div className="ui_column is-5 is-12-mobile">
          <div className="travelerRating">Traveler Rating</div>
          <ul className="ratingBar">
            {travelRatings}
          </ul>
        </div>
        <div className="ui_column  is-shown-at-tablet">
          <div className="travelerRating"> Traveler type</div>
          <ul className="ratingBar">
            {travelTypes}
          </ul>
        </div>
        <div className="ui_column  is-shown-at-tablet">
          <div className="travelerRating"> Time of year</div>
          <ul className="ratingBar">
            {travelTimes}
          </ul>
        </div>
        <div className="ui_column  is-3-tablet is-shown-at-tablet">
          <div className="travelerRating"> Language</div>
          <ul className="ratingBar">
            {travelLangs}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
