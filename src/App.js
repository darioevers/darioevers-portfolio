import './scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// GLOBAL IMPORTS
import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";
import Languagebox from "./components/Languagebox";
import Contactbox from "./components/Contactbox";
import Notificationbox from "./components/Notificationbox";
import Profilebox from "./components/Profilebox";

// DASHBOARD IMPORTS
import Dashboardtopbox from "./components/Dashboardtopbox";
import Dashboardleftbotbox from "./components/Dashboardleftbotbox";
import Dashboardmidbotbox from "./components/Dashboardmidbotbox";
import Dashboardrightbotbox from "./components/Dashboardleftbotbox";

// ABOUT IMPORTS
// SKILLS IMPORTS
// WORKS IMPORTS
// CONTACT IMPORTS
// SETTINGS IMPORTS
// RESSOURCES IMPORTS
// FAQ IMPORTS
// 404 IMPORTS


function App() {
  return (
    <Router>
      
      {/* GLOBAL COMPONENTS */}
      <Sidenav />
      <Topnav />
      <Languagebox />
      <Contactbox />
      <Notificationbox />
      <Profilebox />
      {/* DASHBOARD COMPONENTS */}
      <Dashboardtopbox />
      <Dashboardleftbotbox />
      <Dashboardmidbotbox />
      <Dashboardrightbotbox />
        {/* ABOUT COMPONENTS */}
        </Router>
  );
}
export default App;