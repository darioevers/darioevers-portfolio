import React from "react";
import { Link, NavLink } from "react-router-dom";
import mailmanimg from "../img/MAILMAN.svg";

const Sidenav = () => {
  return (
    <div className="sidenav_main">
      <div className="sidenav_boxes">
        <div className="sidenav_top"></div>
        <div className="sidenav_mid">
          <ul className="sidenav_navigation">
            <li>
              <NavLink exact to="/" className="sidenav_button">
                <i className="fas fa-columns"></i> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                className="sidenav_button"
              >
                <i className="fas fa-heart"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                activeClassName="active"
                className="sidenav_button"
              >
                <i className="fas fa-tools"></i> Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                activeClassName="active"
                className="sidenav_button"
              >
                <i className="fas fa-compass"></i> Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="sidenav_button"
              >
                <i className="fas fa-envelope"></i> Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                activeClassName="active"
                className="sidenav_button"
              >
                <i className="fas fa-cog"></i> Settings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidenav_bot">
          <img src={mailmanimg} alt="Logo" />
          <Link to="/contact">
            <button>Get In Touch</button>
          </Link>
          <h6>darioevers.com</h6>
          <h6>ressources used</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
