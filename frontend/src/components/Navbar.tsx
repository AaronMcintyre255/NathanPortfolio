import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const handleHover = (color: string) => {
    document.documentElement.style.setProperty("--line-color", color);
  };

  const resetHover = () => {
    document.documentElement.style.setProperty(
      "--line-color",
      "var(--default-line-color)"
    );
  };

  return (
    <nav>
      <div id="nav-div">
        <div id="nav-list">
          <Link
            to="/"
            id="nav-home-button"
            className={`nav-list-element ${
              location.pathname === "/" ? "active" : ""
            }`}
            onMouseEnter={() => handleHover("var(--home-button-color)")}
            onMouseLeave={resetHover}
          >
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            id="nav-about-button"
            className={`nav-list-element ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onMouseEnter={() => handleHover("var(--about-button-color)")}
            onMouseLeave={resetHover}
          >
            <span>About</span>
          </Link>

          <div
            id="nav-portfolio-button"
            className="nav-list-element dropdown-container"
            onMouseEnter={() => handleHover("var(--portfolio-button-color)")}
            onMouseLeave={resetHover}
          >
            <span>Portfolio</span>
            <div className="portfolio-dropdown">
              <div className="portfolio-dropdown-item">
                <Link
                  to="/portfolio/image-gallery"
                  className={`${
                    location.pathname === "/portfolio/image-gallery"
                      ? "active"
                      : ""
                  }`}
                >
                  <span>Image Gallery</span>
                </Link>
              </div>
              <div className="portfolio-dropdown-item">
                <Link
                  to="/portfolio/video-gallery"
                  className={`${
                    location.pathname === "/portfolio/video-gallery"
                      ? "active"
                      : ""
                  }`}
                >
                  <span>Video Gallery</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            id="nav-teaching-resources-button"
            className="nav-list-element dropdown-container"
            onMouseEnter={() => handleHover("var(--resources-button-color)")}
            onMouseLeave={resetHover}
          >
            <span>Resources</span>
            <div className="resources-dropdown">
              <div className="resources-dropdown-item">
                <Link
                  to="/teaching_resources/bge"
                  className={`${
                    location.pathname === "/teaching_resources/bge"
                      ? "active"
                      : ""
                  }`}
                >
                  <span>BGE</span>
                </Link>
              </div>
              <div className="resources-dropdown-item">
                <Link
                  to="/teaching_resources/national5"
                  className={`${
                    location.pathname === "/teaching_resources/national5"
                      ? "active"
                      : ""
                  }`}
                >
                  <span>National 5</span>
                </Link>
              </div>
              <div className="resources-dropdown-item">
                <Link
                  to="/teaching_resources/higher"
                  className={`${
                    location.pathname === "/teaching_resources/higher"
                      ? "active"
                      : ""
                  }`}
                >
                  <span>Higher</span>
                </Link>
              </div>
              <div className="resources-dropdown-item">
                <Link
                  to="/teaching_resources/advanced-higher"
                  className={`${
                    location.pathname === "/teaching_resources/advanced-higher"
                      ? "active"
                      : ""
                  }`}
                >
                  <span>Adv. Higher</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            id="nav-contact-button"
            className={`nav-list-element ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onMouseEnter={() => handleHover("var(--contact-button-color)")}
            onMouseLeave={resetHover}
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
