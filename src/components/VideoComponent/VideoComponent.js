import React from "react";
import "./VideoComponent.scss";
import json from "../../data/video-details.json";
function VideoComponent() {
  return (
    <>
      <div className="video">
        <video
          controls
          className="video--container"
          poster="https://i.imgur.com/l2Xfgpl.jpg"
        >
          {/* <source src={picture} type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default VideoComponent;
