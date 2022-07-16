import React from "react";
import json from "../../data/video-details.json";
import "./NextVideosCard.scss";

function NextVideosCards(props) {
  return (
    <div className="nextvideocards">
      <div className="nextvideocards--image__container">
        <img
          src={"http://localhost:8080/" + props.image}
          alt="Video Alt"
          className="nextvideocards--image"
        />
      </div>
      <div className="nextvideocards--paragraph__container">
        <div className="nextvideocards--paragraph__item__upper">
          {props.title}
        </div>
        <div className="nextvideocards--paragraph__item__lower">
          {props.channel}
        </div>
      </div>
    </div>
  );
}

export default NextVideosCards;
