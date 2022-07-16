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
          // Mapping over videos which are being passed in as props
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
            />
          </NavLink>
        );
      })}
      {/* <NextVideosCards /> */}
    </div>
  );
}

export default VideoSectionComponent;

//Component is used to render Video Cards, Each video card is clickable and linked to dynamic link
// this link is then routed using react router on videos/:id
// The Video card takes Id, Key, Title, Channel and image as props
