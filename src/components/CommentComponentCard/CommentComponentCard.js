import React from "react";
import "./CommentComponentCard.scss";

function CommentComponentCard() {
  return (
    <div className="conversation__users">
      <div className="conversation__users--container">
        <div className="conversation__users--img">
          <div className="conversation__img"></div>
        </div>
        <div className="conversation__users--details">
          <div className="details__wrapper">
            <div className="details__wrapper--name">Connor Walton</div>
            <div className="details__wrapper--date">2021/2/17</div>
          </div>
          <div className="details-paragraph">
            his is art. This is inexplicable magic expressed in the purest way,
            everything that makes up this majestic work deserves reverence. Let
            us appreciate this for what it is and what it contains.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentComponentCard;
