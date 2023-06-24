import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import './Layout.css'

export default function Layout() {
  const [bgColor, setbgColor] = useState('black'); 
  
  return (
    <div style={{background: bgColor}}>
    <div className="navContainer">
      <nav className="navBar">
        <h2>
          <Link to="/"> Javier Lavin</Link>
        </h2>
        <ul>
            <li className="Home">
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
    </div>
  );
}