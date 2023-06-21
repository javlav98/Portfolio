import React from "react";
import { Outlet, Link } from "react-router-dom";


export default function Layout() {
  return (
    <div className="navContainer">
      <nav>
        <ul>
            <h2>
                <Link to="/">Javier Lavin</Link>
            </h2>
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
  );
}