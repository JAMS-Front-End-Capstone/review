/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import propTypes from 'prop-types';

const Menu = ({ total }) => (
  <div className="Rev-mainMenu">
    <div className="Rev-subMenu">
      <span className="Rev-reviewsTags">
        <span className="Rev-reviewIcon">
          <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwMXB0IiB2aWV3Qm94PSIwIC0xIDQwMS41MjI4OSA0MDEiIHdpZHRoPSI0MDFwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzcwLjU4OTg0NCAyNTAuOTcyNjU2Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjg4Ljc4OTA2M2MtLjAxOTUzMiAxNi41NjI1LTEzLjQzNzUgMjkuOTg0Mzc1LTMwIDMwaC0yODAuNTg5ODQ0Yy0xNi41NjI1LS4wMTU2MjUtMjkuOTgwNDY5LTEzLjQzNzUtMzAtMzB2LTI2MC41ODk4NDRjLjAxOTUzMS0xNi41NTg1OTQgMTMuNDM3NS0yOS45ODA0NjkgMzAtMzBoODguNzg5MDYyYzUuNTIzNDM4IDAgMTAtNC40NzY1NjMgMTAtMTAgMC01LjUxOTUzMS00LjQ3NjU2Mi0xMC0xMC0xMGgtODguNzg5MDYyYy0yNy42MDE1NjIuMDMxMjUtNDkuOTY4NzUgMjIuMzk4NDM3LTUwIDUwdjI2MC41OTM3NWMuMDMxMjUgMjcuNjAxNTYzIDIyLjM5ODQzOCA0OS45Njg3NSA1MCA1MGgyODAuNTg5ODQ0YzI3LjYwMTU2Mi0uMDMxMjUgNDkuOTY4NzUtMjIuMzk4NDM3IDUwLTUwdi04OC43OTI5NjljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTM3Ni42Mjg5MDYgMTMuNDQxNDA2Yy0xNy41NzQyMTgtMTcuNTc0MjE4LTQ2LjA2NjQwNi0xNy41NzQyMTgtNjMuNjQwNjI1IDBsLTE3OC40MDYyNSAxNzguNDA2MjVjLTEuMjIyNjU2IDEuMjIyNjU2LTIuMTA1NDY5IDIuNzM4MjgyLTIuNTY2NDA2IDQuNDAyMzQ0bC0yMy40NjA5MzcgODQuNjk5MjE5Yy0uOTY0ODQ0IDMuNDcyNjU2LjAxNTYyNCA3LjE5MTQwNiAyLjU2MjUgOS43NDIxODcgMi41NTA3ODEgMi41NDY4NzUgNi4yNjk1MzEgMy41MjczNDQgOS43NDIxODcgMi41NjY0MDZsODQuNjk5MjE5LTIzLjQ2NDg0M2MxLjY2NDA2Mi0uNDYwOTM4IDMuMTc5Njg3LTEuMzQzNzUgNC40MDIzNDQtMi41NjY0MDdsMTc4LjQwMjM0My0xNzguNDEwMTU2YzE3LjU0Njg3NS0xNy41ODU5MzcgMTcuNTQ2ODc1LTQ2LjA1NDY4NyAwLTYzLjY0MDYyNXptLTIyMC4yNTc4MTIgMTg0LjkwNjI1IDE0Ni4wMTE3MTgtMTQ2LjAxNTYyNSA0Ny4wODk4NDQgNDcuMDg5ODQ0LTE0Ni4wMTU2MjUgMTQ2LjAxNTYyNXptLTkuNDA2MjUgMTguODc1IDM3LjYyMTA5NCAzNy42MjUtNTIuMDM5MDYzIDE0LjQxNzk2OXptMjI3LjI1NzgxMi0xNDIuNTQ2ODc1LTEwLjYwNTQ2OCAxMC42MDU0NjktNDcuMDkzNzUtNDcuMDkzNzUgMTAuNjA5Mzc0LTEwLjYwNTQ2OWM5Ljc2MTcxOS05Ljc2MTcxOSAyNS41ODk4NDQtOS43NjE3MTkgMzUuMzUxNTYzIDBsMTEuNzM4MjgxIDExLjczNDM3NWM5Ljc0NjA5NCA5Ljc3MzQzOCA5Ljc0NjA5NCAyNS41ODk4NDQgMCAzNS4zNTkzNzV6bTAgMCIvPjwvc3ZnPg==" />
        </span>
        <span>
          <span className="Rev-totalReviews">
            {total}
          </span>
          <span className="Rev-printReviews">Reviews</span>
        </span>
      </span>
      <span className="Rev-qandA">
        <span className="Rev-qandAIcon">
          <ForumOutlinedIcon />
        </span>
        <span>
          <span className="Rev-totalRev-qandA">3</span>
          <span className="Rev-printRev-qandA">Q&A</span>
        </span>
      </span>
    </div>
  </div>

);

Menu.propTypes = {
  total: propTypes.number.isRequired,
};
export default Menu;
