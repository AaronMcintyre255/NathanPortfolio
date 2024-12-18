import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <div id="nav-div">
        <ul id="nav-list">
          <li
            id="nav-home-button"
            className={`nav-list-element ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>

          <li
            id="nav-about-button"
            className={`nav-list-element ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>

          <li
            id="nav-portfolio-button"
            className={`nav-list-element ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>

          <li
            id="nav-teaching-resources-button"
            className={`nav-list-element ${
              location.pathname === "/teaching_resources" ? "active" : ""
            }`}
          >
            <Link to="/teaching_resources">Teaching Resources</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
