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
import Dashboard from "./components/dashboard/Dashboard";

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
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        {/* <Route path="/about" exact component={About}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/works" exact component={Works}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/settings" exact component={Settings}></Route> */}
        </Switch>
        </Router>
  );
}
export default App;

