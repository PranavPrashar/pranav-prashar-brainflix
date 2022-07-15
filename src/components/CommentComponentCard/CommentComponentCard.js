import React from "react";
import "./CommentComponentCard.scss";

function CommentComponentCard(props) {
  function convertTime(time) {
    const timestamp = Number(time);
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return day + "/" + month + "/" + year;
  }
  // return props.video.map((video) => {
  console.log("Video Props ", props.video);
  // Maybe check to see if there is comments, if not then just render "NO comments"

  if (props.video.comments) {
    return props.video.comments.map((comment) => {
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
  } else {
    return <h3>No Comments</h3>;
  }
  // return props.video.comments.map((comment) => {
  //   return (
  //     <div className="conversation__users" key={comment.name}>
  //       <div className="conversation__users--container">
  //         <div className="conversation__users--img">
  //           <div className="conversation__img"></div>
  //         </div>
  //         <div className="conversation__users--details">
  //           <div className="details__wrapper">
  //             <div className="details__wrapper--name">{comment.name}</div>
  //             <div className="details__wrapper--date">
  //               {convertTime(comment.timestamp)}
  //             </div>
  //           </div>
  //           <div className="details-paragraph">{comment.comment}</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  // });
}

export default CommentComponentCard;
