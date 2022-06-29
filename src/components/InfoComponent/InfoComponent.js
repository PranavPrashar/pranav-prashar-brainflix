import React from "react";
import "./InfoComponent.scss";
import viewIcon from "../../assets/icons/views.svg";
import heartIcon from "../../assets/icons/likes.svg";

function InfoComponent() {
  return (
    <>
      <div className="infocomponent">
        <div className="infocomponent--top">
          <h2 className="infocomponent--header">
            BMX Rampage: 2021 Highlights
          </h2>
        </div>
      </div>

      <div className="infocomponent--bottom">
        <span>
          <div className="infocomponent--bottom__left">
            <p className="infocomponent--bottom__channel">By row cow</p>
            <p className="infocomponent--bottom__date">07/11/2021</p>
          </div>
        </span>

        <span>
          <div className="infocomponent--bottom__right">
            <div className="infocomponent--bottom__views">
              <img src={viewIcon} alt="views Icon" />
              <p className="infocomponent--bottom__viewscount">1,001,023</p>
            </div>
            <div className="infocomponent--bottom__likes">
              <img src={heartIcon} alt="views Icon" />
              <p className="infocomponent--bottom__viewscount">110,985</p>
            </div>
          </div>
        </span>
      </div>
      <div className="infocomponent--details">
        <p className = "infocomponent--details__paragraph">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </>
  );
}

export default InfoComponent;
