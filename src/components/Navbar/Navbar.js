import React from "react";
import Brainflixlogo from "../../assets/images/Logo/BrainFlix-logo.svg";
import "./Navbar.scss";
import Uploadlogo from "../../assets/icons/upload.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          alt="brainflix alt logo"
          src={Brainflixlogo}
          className="navbar-logo"
        />
      </div>
      <div className="navbar__search">
        <div className="navbar__search--icon--container">
          <input
            type="text"
            placeholder="Search"
            className="navbar__search--input"
          ></input>
        </div>

        <div className="navbar__search--icon"></div>
      </div>
      <div className="navbar__uploadbutton">
        <div className="navbar__uploadbutton--container">
          <img src={Uploadlogo} alt="Upload Logo" />
          Upload
        </div>
      </div>
    </div>
  );
}

export default Navbar;
