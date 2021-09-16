import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div class="sidenav_main">
      <div class="sidenav_boxes">
        <div class="sidenav_top"></div>
        <div class="sidenav_mid">
          <ul class="sidenav_navigation">
            <li>
              <Link to="/">
                <button>
                  <i class="fas fa-home"> Dashboard</i>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button>
                  <i class="fas fa-home"> About</i>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <button>
                  <i class="fas fa-home"> Skills</i>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/works">
                <button>
                  <i class="fas fa-home"> Works</i>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button>
                  <i class="fas fa-home"> Contact</i>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <button>
                  <i class="fas fa-home"> Settings</i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div class="sidenav_bot"></div>
      </div>
    </div>
  );
};

export default Sidenav;
