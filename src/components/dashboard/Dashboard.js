import React from "react";
import Dashboardtopbox from "./Dashboardtopbox";
import Dashboardleftbotbox from "./Dashboardleftbotbox";
import Dashboardmidbotbox from "./Dashboardmidbotbox";
import Dashboardrightbotbox from "./Dashboardleftbotbox";

const Dashboard = () => {
  return (
    <div className="dashboard_mainbox">
      <Dashboardtopbox />
      <Dashboardleftbotbox />
      <Dashboardmidbotbox />
      <Dashboardrightbotbox />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
