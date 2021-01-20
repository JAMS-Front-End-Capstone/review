import React from 'react';

const WriteReview = () => {
  const hi = 14;
  return (
    <div className="mainWrite">
      <div className="subWrite">
        <div className="write bottom">
          <h2 className="writeText">Reviews</h2>
          <div />
          <div className="mainLeftWrite">
            <div className="subLeftWrite">
              <span className="writeReview">
                <a href className="ui_button primary war-button">
                  Write a review
                  {hi}
                </a>
              </span>
              <div>
                <div>
                  <div className="dropDownBox">
                    <span className="ui_icon caret-down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
