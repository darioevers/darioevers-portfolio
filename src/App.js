import "./scss/main.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// GLOBAL IMPORTS
import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";
import Languagebox from "./components/Languagebox";
import Contactbox from "./components/Contactbox";
import Notificationbox from "./components/Notificationbox";
import Profilebox from "./components/Profilebox";
import Themetoggle from "./components/Themetoggle";

// DASHBOARD IMPORTS
import Dashboard from "./components/dashboard/Dashboard";

// ABOUT IMPORTS
import About from "./components/about/About";
// SKILLS IMPORTS
import Skills from "./components/skills/Skills";
// WORKS IMPORTS
import Works from "./components/works/Works";
// CONTACT IMPORTS
import Contact from "./components/contact/Contact";
// SETTINGS IMPORTS
import Settings from "./components/settings/Settings";
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
        <Route path="/about" exact component={About}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/works" exact component={Works}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/settings" exact component={Settings}></Route>
      </Switch>
    </Router>
  );
}
export default App;
