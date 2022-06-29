import React from "react";
import json from "../../data/video-details.json";
import "./NextVideosCard.scss";

function NextVideosCards() {
  const imageUrl = json[1].image;
  return (
    <div className="nextvideocards">
      <div className="nextvideocards--image__container">
        <img src={imageUrl} alt="Testing" className="nextvideocards--image" />
      </div>
      <div className="nextvideocards--paragraph__container">
        <div className="nextvideocards--paragraph__item__upper">
          Become A Travel Pro In One Easy Lesson
        </div>
        <div className="nextvideocards--paragraph__item__lower">Todd Welch
        </div>
      </div>
    </div>
  );
}

export default NextVideosCards;
