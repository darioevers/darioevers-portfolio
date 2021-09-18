import React from "react";
import Themetoggle from "../components/Themetoggle";

const Topnav = () => {
  return (
    <div className="topnav_mainbox">
      <div className="topnav_box">
        <div className="topnav_box_left">
          <div className="topnav_box_left_addressbox">
            <h4>www.darioevers.com</h4>
          </div>
        </div>
        <div className="topnav_box_right">
          <div className="themetoggle_button">
            <Themetoggle />
            <label>
              <input type="checkbox" onClick={Themetoggle} />
              <span className="themetoggle-switch">
                <span className="themetoggle-switch-handle"></span>
              </span>
            </label>
          </div>
          <div className="contactbox_button">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="notificationbox_button">
            <i className="fas fa-bell"></i>
          </div>
          <div className="profilebox_button">
            <div className="profilebox_profilepic">
              <p>D</p>
            </div>
            <p>Dario Evers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
