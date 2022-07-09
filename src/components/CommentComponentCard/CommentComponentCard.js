import React from "react";
import "./CommentComponentCard.scss";

function CommentComponentCard(props) {
  function convertTime(time) {
    var timestamp = Number(time);
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return year + "/" + month + "/" + day;
  }
  return props.video.map((video) => {
    // console.log(video);
    return video.comments.map((comment) => {
      return (
        <div className="conversation__users" key={comment.name}>
          <div className="conversation__users--container">
            <div className="conversation__users--img">
              <div className="conversation__img"></div>
            </div>
            <div className="conversation__users--details">
              <div className="details__wrapper">
                <div className="details__wrapper--name">{comment.name}</div>
                <div className="details__wrapper--date">
                  {convertTime(comment.timestamp)}
                </div>
              </div>
              <div className="details-paragraph">{comment.comment}</div>
            </div>
          </div>
        </div>
      );
    });
  });
}

export default CommentComponentCard;
