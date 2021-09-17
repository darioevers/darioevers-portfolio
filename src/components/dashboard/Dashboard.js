import React from "react";
import Dashboardtopbox from "./Dashboardtopbox";
import Dashboardleftbotbox from "./Dashboardleftbotbox";
import Dashboardmidbotbox from "./Dashboardmidbotbox";
import Dashboardrightbotbox from "./Dashboardleftbotbox";

const Dashboard = () => {
  return (
    <div className="dashboard_mainbox">
      <h2 className="testfont">Portfolio Dashboard</h2>
      <Dashboardtopbox />
      <div className="dashboard_gridbotbox">
        <Dashboardleftbotbox />
        <Dashboardmidbotbox />
        <Dashboardrightbotbox />
      </div>
    </div>
  );
};

export default Dashboard;
