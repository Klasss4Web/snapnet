import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="full-container">
    <div className="logo-container">
      {/* <img src={logoImage} alt="logoImage" /> */}
    </div>
    <div className="nav-div clearFix">
      <nav className="nav-links">
        <ul>
          <li className="link-list">
            <Link className="nav" to="/">
              Home
            </Link>
          </li>
          <li className="link-list">
            <Link className="nav" to="/event-list">
              All Events
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  </div>
);

export default NavBar;
