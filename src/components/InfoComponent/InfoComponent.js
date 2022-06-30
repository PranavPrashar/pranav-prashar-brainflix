import React from "react";
import "./InfoComponent.scss";
import viewIcon from "../../assets/icons/views.svg";
import heartIcon from "../../assets/icons/likes.svg";

function InfoComponent(props) {
  const { title, channel, timestamp, likes, views, description } =
    props.selectedVideo;

  return (
    <>
      <div className="infocomponent">
        <div className="infocomponent--top">
          <h2 className="infocomponent--header">
            {/* BMX Rampage: 2021 Highlights */}
            {title}
          </h2>
        </div>
      </div>

      <div className="infocomponent--bottom">
        <span>
          <div className="infocomponent--bottom__left">
            <p className="infocomponent--bottom__channel">{channel}</p>
            <p className="infocomponent--bottom__date">
              {convertTime(timestamp)}
            </p>
          </div>
        </span>

        <span>
          <div className="infocomponent--bottom__right">
            <div className="infocomponent--bottom__views">
              <img src={viewIcon} alt="views Icon" />
              <p className="infocomponent--bottom__viewscount">{views}</p>
            </div>
            <div className="infocomponent--bottom__likes">
              <img src={heartIcon} alt="views Icon" />
              <p className="infocomponent--bottom__viewscount">{likes}</p>
            </div>
          </div>
        </span>
      </div>
      <div className="infocomponent--details">
        <p className="infocomponent--details__paragraph">{description}</p>
      </div>
    </>
  );
}

function convertTime(time) {
  var timestamp = Number(time);
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  const result = year + "/" + month + "/" + day;
  return result;
}
export default InfoComponent;
