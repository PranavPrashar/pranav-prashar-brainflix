import React from "react";
import "./CommentComponent.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

function CommentComponent() {
  return (
    <div className="conversation">
      <div className="conversation__commentnumber">3 Comments</div>
      <div className="conversation__form">
        <div className="conversation__left">
          <div className="conversation__img"></div>
        </div>
        <div className="conversation__right">
          <form id="joinConversationForm" className="conversation__right--form">
            <div className="conversation__right--form-tablettop">
              <label htmlFor="commentInput" className="input-label">
                Join the conversation
              </label>
            </div>

            <div className="conversation__right--form-tabletbottom">
              <div>
                <textarea
                  id="conversation__commentinput"
                  className="conversation__commentinput"
                  name="commentInput"
                  placeholder="Add a new comment"
                ></textarea>
              </div>

              <div className="conversation__right--commentbutton">
                <img
                  src={commentIcon}
                  alt="comment icon"
                  className="conversation__right--commentbutton--image"
                ></img>
                <p className="conversation__right--commentbutton--text">
                  Comment
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentComponent;
