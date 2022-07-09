import React from "react";
import "./VideoSectionComponent.scss";
import NextVideosCards from "../NextVideosCards/NextVideosCards";
import { NavLink } from "react-router-dom";
function VideoSectionComponent(props) {
  return (
    <div className="nextvideos">
      <h2 className="nextvideos--header">Next Videos</h2>
      {props.video.map((videos) => {
        return (
          <NavLink
            to={`/video/${videos.id}`}
            className="nextvideos__navlink"
            key={videos.id}
            id={videos.id}
          >
            <NextVideosCards
              id={videos.id}
              key={videos.id}
              title={videos.title}
              channel={videos.channel}
              image={videos.image}
              onVideoSelect={props.onVideoSelect}
              // onClick={handleVideoSelection}
            />
          </NavLink>
        );
      })}
      {/* <NextVideosCards /> */}
    </div>
  );
}

export default VideoSectionComponent;
