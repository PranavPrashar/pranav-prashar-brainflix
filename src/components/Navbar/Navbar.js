import React from "react";
import Brainflixlogo from "../../assets/images/Logo/BrainFlix-logo.svg";
import "./Navbar.scss";
import Uploadlogo from "../../assets/icons/upload.svg";
import { Router, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        {/* By putting the nav bar in a <Link> we can route it back to the front page */}
        <div className="navbar__logo">
          <img
            alt="brainflix alt logo"
            src={Brainflixlogo}
            className="navbar-logo"
          />
        </div>
      </Link>

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
          <div className="navbar__uploadbutton--icon">
            <img src={Uploadlogo} alt="Upload Logo" />
          </div>
          <div className="navbar__uploadbutton--upload">Upload</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
