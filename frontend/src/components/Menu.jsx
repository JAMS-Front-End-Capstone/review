/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Menu = ({ total }) => (
  <div className="Rev-mainMenu">
    <div className="Rev-subMenu">
      <span className="Rev-reviewsTags">
        <span className="ui_icon pencil-paper _3HDPvvJK" />
        <span>
          <span className="Rev-totalReviews">
            {total}
          </span>
          <span className="Rev-printReviews">Reviews</span>
        </span>
      </span>
      <span className="Rev-qandA">
        <span className="ui_icon forums _3HDPvvJK" />
        <span>
          <span className="Rev-totalRev-qandA">3</span>
          <span className="Rev-printRev-qandA">Q&A</span>
        </span>
      </span>
    </div>
  </div>

);

export default Menu;
