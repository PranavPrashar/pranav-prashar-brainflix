import React from "react";
import "./CommentComponent.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

function CommentComponent() {
  return (
    <div className="conversation">
      {/* <h1 className="conversation__header">Join the conversation</h1> */}
      <div className="conversation__commentnumber">3 Comments</div>
      <div className="conversation__form">
        <div className="conversation__left">
          <div className="conversation__img"></div>
        </div>
        <div className="conversation__right">
          <form id="joinConversationForm" className="conversation__right--form">
            {/* <label for="nameInput" className="input-label">
              Name
            </label>
            <input
              type="text"
              id="nameInput"
              className="conversation__nameinput"
              placeholder="Enter your name"
            /> */}

            <label htmlFor="commentInput" className="input-label">
              Join the conversation
            </label>
            <textarea
              id="conversation__commentinput"
              className="conversation__commentinput"
              name="commentInput"
              rows="5"
              cols="33"
              placeholder="Add a new comment"
            ></textarea>

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
            {/* <button
              type="submit"
              className="conversation__right--commentbutton"
            >
              Comment
            </button> */}
          </form>
        </div>
      </div>
      {/* Dynamic convestation container  */}
      {/* <div className="conversation__users"></div> */}
    </div>
  );
}

export default CommentComponent;
