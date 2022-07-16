import React from "react";
import "./VideoComponent.scss";

function VideoComponent(props) {
  return (
    <>
      <div className="video">
        <video
          controls
          className="video--container"
          poster={"http://localhost:8080/" + props.selectedVideo.image}
          onVideoSelect={props.onVideoSelect}
        ></video>
      </div>
    </>
  );
}

export default VideoComponent;

// Component to render the HTML Video
// To set poster, we are passing probs poster and then taking the props from video and passing to poster
