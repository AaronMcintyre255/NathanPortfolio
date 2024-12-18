import React from "react";
import "./about.css";

const About: React.FC = () => {
  return (
    <>
      <div id="about-hero-section">
        <div id="about-hero-content">
          <h1 id="about-hero-title">Nathan McLaughlin</h1>
          <p id="about-hero-description">Description of Nathan McLaughlin</p>
        </div>

        <div id="about-hero-image">
          <img src="/profile_picture.svg" alt="Image of Nathan McLaughlin" />
        </div>
      </div>
    </>
  );
};

export default About;
