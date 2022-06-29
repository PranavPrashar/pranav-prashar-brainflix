import React from "react";
import "./NextVideos.scss";
import NextVideosCards from "../NextVideosCards/NextVideosCards";
function VideoSectionComponent() {
  return (
    <div className="nextvideos">
      <h2 className="nextvideos--header">Next Videos</h2>
      <NextVideosCards />
      <NextVideosCards />
    </div>
  );
}

export default VideoSectionComponent;
