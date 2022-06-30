import React from "react";
import "./VideoSectionComponent.scss";
import NextVideosCards from "../NextVideosCards/NextVideosCards";
function VideoSectionComponent(props) {
  return (
    <div className="nextvideos">
      <h2 className="nextvideos--header">Next Videos</h2>
      {props.video.map((videos) => {
        return (
          <NextVideosCards
            id={videos.id}
            key={videos.id}
            title={videos.title}
            channel={videos.channel}
            image={videos.image}
            onVideoSelect={props.onVideoSelect}
            // onClick={handleVideoSelection}
          />
        );
      })}
      {/* <NextVideosCards /> */}
    </div>
  );
}

export default VideoSectionComponent;
