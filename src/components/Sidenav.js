import React from "react";
import { Link, NavLink } from "react-router-dom";
import mailmanimg from "../img/MAILMAN.svg";

const Sidenav = () => {
  return (
    <div class="sidenav_main">
      <div class="sidenav_boxes">
        <div class="sidenav_top"></div>
        <div class="sidenav_mid">
          <ul class="sidenav_navigation">
            <li>
              <NavLink exact to="/" className="sidenav_button">
                <i class="fas fa-columns"></i> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                className="sidenav_button"
              >
                <i class="fas fa-heart"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                activeClassName="active"
                className="sidenav_button"
              >
                <i class="fas fa-tools"></i> Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                activeClassName="active"
                className="sidenav_button"
              >
                <i class="fas fa-compass"></i> Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="sidenav_button"
              >
                <i class="fas fa-envelope"></i> Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                activeClassName="active"
                className="sidenav_button"
              >
                <i class="fas fa-cog"></i> Settings
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="sidenav_bot">
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
