import React from "react";
import "./VideoComponent.scss";
import json from "../../data/video-details.json";
import playButton from "../../assets/icons/fullscreen.svg";
function VideoComponent(props) {
  return (
    <>
      <div className="video">
        {/* <img src={playButton} alt="play button" /> */}
        <video
          controls
          className="video--container"
          // poster="https://i.imgur.com/l2Xfgpl.jpg"
          poster={props.selectedVideo.image}
          onVideoSelect={props.onVideoSelect}
        ></video>
      </div>
    </>
  );
}

export default VideoComponent;
