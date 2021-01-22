/* eslint-disable react/prop-types */
import React from 'react';

function ReviewSingle({ item }) {
  // debugger;
  const bubbleStyle = ['ui_bubble_rating bubble_10',
    'ui_bubble_rating bubble_20',
    'ui_bubble_rating bubble_30',
    'ui_bubble_rating bubble_40',
    'ui_bubble_rating bubble_50',
  ];

  const rating = bubbleStyle[item.rating - 1];
  return (
    <div className="mainReviwSingleAugU middeSinglekzTX lastSingle">
      <div className="minorReviewsingle">
        <a href className="_3x5_awTA ui_social_avatar inline">
          <img alt="" src="https://picsum.photos/100/100" />
        </a>
        <div className="bubbleMain">
          <div className="bubbleMinor">
            <span className="circleFront circleBack">
              <svg x="0" y="0" viewBox="0 0 24 24" width="1em" height="1em" className="_2HBN-k68 _2JndpOur">
                <circle cx="4.5" cy="11.9" r="2.5" />
                <circle cx="19.5" cy="11.9" r="2.5" />
                <circle cx="12" cy="11.9" r="2.5" />
              </svg>
            </span>
            <span className="circle" />
          </div>
          <div className="userMain">
            <span>
              <a className="ui_header_link userHeader" href="/Profile/RomarDelta">
                {item.user.name}
              </a>
              {` wrote a review ${item.reviewDate} 2019`}
            </span>
          </div>
          <div className="userLoca">
            <span className="userLocaSub">
              <span className="ui_icon map-pin-fill _2kj8kWkW" />
              {item.user.location[0]}
              ,
              {' '}
              {item.user.location[1]}
            </span>
            <span className="userContri">
              <span className="userContriSub">{item.user.contributions}</span>
              {' '}
              contributions
            </span>
            <span className="userContri">
              <span className="userContriSub">{item.user.helpfulVotes}</span>
              {' '}
              helpful votes
            </span>
          </div>
        </div>
      </div>
      <div className="UserRating" data-reviewid="314838220">
        <div className="UserRatingSub">
          <div className="reviewRate" data-test-target="review-rating">
            <span className={rating} />
          </div>
        </div>
        <div className="reviewTitle" dir="ltr" data-test-target="review-title">
          {item.title}
        </div>
        <div className="userBody">
          <div className="userBodySub userBodySubMid userBodySubLas">
            <div className="userBodyWrap">
              <q className="userBodyy">{item.body}</q>
            </div>
            {/* <div className="_36B4Vw6t">
              <div className="XUVJZtom" data-test-target="expand-review">
                <span className="_3maEfNCR">Read more</span>
                <span className="ui_icon caret-down _3aUwQbpX" />
              </div>
            </div> */}
          </div>
          <div className="userTimeTrav">
            <span className="userTimeTravMin">
              <span className="userTimeTravB">Date of experience: </span>
              {item.timeOfTravel}
              {' '}
              2018
            </span>
          </div>
          <div className="userHelp">
            <span className="userHelpMin" />
            <div className="userHelpdiv">
              <span className="uHelpful">
                <span className="ui_icon thumbs-up iconlast" />
                <span className="ui_link link">Helpful</span>
              </span>
              <span className="UserShareMain">
                <div className="UserShareMin UserShareBac">
                  <span className="ui_icon share UserShareicon" />
                  <span className="ui_link UserSharemid socialCTA">
                    Share
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSingle;
