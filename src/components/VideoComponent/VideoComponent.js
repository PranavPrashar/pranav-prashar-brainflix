import React from "react";
import "./VideoComponent.scss";
function VideoComponent() {
  return (
    <>
      <div className="video">
        <video controls className = "video--container">
          <source src="https://i.imgur.com/l2Xfgpl.jpg" type="video/ogg" />
          <source src="movie.ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default VideoComponent;
