import React from 'react';
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
    <div class="sidenav_main">
        <div class="sidenav_top"></div>
        <div class="sidenav_mid">
            <ul class="sidenav_navigation">
                <li>
                <Link to="/"><i class="fas fa-home"> Dashboard</i></Link>
                </li>
                <li>
                <Link to="/"><i class="fas fa-home"> About</i></Link>
                </li>
                <li>
                <Link to="/"><i class="fas fa-home"> Skills</i></Link>
                </li>
                <li>
                <Link to="/"><i class="fas fa-home"> Works</i></Link>
                </li>
                <li>
                <Link to="/"><i class="fas fa-home"> Contact</i></Link>
                </li>
                <li>
                <Link to="/"><i class="fas fa-home"> Settings</i></Link>
                </li>
            </ul>
        </div>
        <div class="sidenav_bot"></div>
    </div>)
}

export default Sidenav;

{/* <Link to="/"><i class="fas fa-home"></i></Link> */}