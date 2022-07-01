import React from "react";
import json from "../../data/video-details.json";
import "./NextVideosCard.scss";

function NextVideosCards(props) {
  // const imageUrl = json[1].image;
  const handleVideoSelection = (e) => {
    console.log("Called");
    e.preventDefault();
    props.onVideoSelect(props.title);
  };
  return (
    <div
      className="nextvideocards"
      onClick={handleVideoSelection}
      onVideoSelect={props.onVideoSelect}
    >
      <div className="nextvideocards--image__container">
        <img
          src={props.image}
          alt="Video Image"
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
