import React from 'react';
import Dashboardtopbox from "./Dashboardtopbox";
import Dashboardleftbotbox from "./Dashboardleftbotbox";
import Dashboardmidbotbox from "./Dashboardmidbotbox";
import Dashboardrightbotbox from "./Dashboardleftbotbox";

const Dashboard = () => {
    return (<div>
    <Dashboardtopbox />
      <Dashboardleftbotbox />
      <Dashboardmidbotbox />
      <Dashboardrightbotbox />
      <h1>Hello</h1>
    </div>)
}

export default Dashboard;