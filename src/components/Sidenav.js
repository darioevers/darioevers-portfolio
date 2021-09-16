import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <div class="sidenav_main">
      <div class="sidenav_boxes">
        <div class="sidenav_top"></div>
        <div class="sidenav_mid">
          <ul class="sidenav_navigation">
            <li>
              <NavLink exact to="/">
                <button class="sidenav_button">
                  <i class="fas fa-columns"></i> Dashboard
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                <button class="sidenav_button">
                  <i class="fas fa-heart"></i> About
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink strict to="/skills" activeClassName="active">
                <button class="sidenav_button">
                  <i class="fas fa-tools"></i> Skills
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" activeClassName="active">
                <button class="sidenav_button">
                  <i class="fas fa-compass"></i> Works
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                <button class="sidenav_button">
                  <i class="fas fa-envelope"></i> Contact
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" activeClassName="active">
                <button class="sidenav_button">
                  <i class="fas fa-cog"></i> Settings
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="sidenav_bot"></div>
      </div>
    </div>
  );
};

export default Sidenav;
