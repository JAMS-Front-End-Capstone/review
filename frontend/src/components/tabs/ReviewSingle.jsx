/* eslint-disable react/prop-types */
import React from 'react';

function ReviewSingle({ item }) {
  // debugger;
  return (
    <div className="Dq9MAugU T870kzTX LnVzGwUB">
      <div className="_310S4sqz">
        <a href className="_3x5_awTA ui_social_avatar inline">
          <img alt="" src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/ef/9c/default-avatar-2020-14.jpg" />
        </a>
        <div className="_2uYWQXeO">
          <div className="_3TMaHs5O">
            <span className="_3-zQ1eyd _3LR9XvrV">
              <svg x="0" y="0" viewBox="0 0 24 24" width="1em" height="1em" className="_2HBN-k68 _2JndpOur">
                <circle cx="4.5" cy="11.9" r="2.5" />
                <circle cx="19.5" cy="11.9" r="2.5" />
                <circle cx="12" cy="11.9" r="2.5" />
              </svg>
            </span>
            <span className="_3V8URHDq" />
          </div>
          <div className="_2fxQ4TOx">
            <span>
              <a className="ui_header_link _1r_My98y" href="/Profile/RomarDelta">
                {item.user.name}
              </a>
              {` wrote a review ${item.reviewDate} 2015`}
            </span>
          </div>
          <div className="_1EpRX7o3">
            <span className="_1TuWwpYf">
              <span className="ui_icon map-pin-fill _2kj8kWkW" />
              {/* {item[0].user.location[0]}
              ,
              {' '}
              {item[0].user.location[1]} */}
            </span>
            <span className="_3fPsSAYi">
              <span className="_1fk70GUn">63</span>
              contributions
            </span>
            <span className="_3fPsSAYi">
              <span className="_1fk70GUn">73</span>
              helpful votes
            </span>
          </div>
        </div>
      </div>
      <div className="oETBfkHU" data-reviewid="314838220">
        <div className="_2UEC-y30">
          <div className="nf9vGX55" data-test-target="review-rating">
            <span className="ui_bubble_rating bubble_40" />
          </div>
        </div>
        <div className="glasR4aX" dir="ltr" data-test-target="review-title">
          {item.title}
        </div>
        <div className="_3hDPbqWO">
          <div className="_2f_ruteS _1bona3Pu _2uD5bLZZ">
            <div className="cPQsENeY">
              <q className="IRsGHoPm">A great beach in the lagoon and very safe for swimming and snorkeling with superb views towards Moorea</q>
            </div>
            <div className="_36B4Vw6t">
              <div className="XUVJZtom" data-test-target="expand-review">
                <span className="_3maEfNCR">Read more</span>
                <span className="ui_icon caret-down _3aUwQbpX" />
              </div>
            </div>
          </div>
          <div className="_27JpaCjl">
            <span className="_34Xs-BQm">
              <span className="_355y0nZn">Date of experience: </span>
              September 2015
            </span>
          </div>
          <div className="_3d_mZXGr">
            <span className="_3UnecFwl" />
            <div className="_3SZRHJHk">
              <span className="_2lqOQqh3">
                <span className="ui_icon thumbs-up Ak8Bi3Zf" />
                <span className="ui_link _1Dl3N9MC">Helpful</span>
              </span>
              <span className="_331VZDkq">
                <div className="_1k12Q93K _1k54sSqX">
                  <span className="ui_icon share _3g9oGli4" />
                  <span className="ui_link _3p1vOjv8 socialCTA">
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
