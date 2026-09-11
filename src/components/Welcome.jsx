import React from "react";
import profile from "../img/profile-dark-bg.webp";

const Welcome = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-glow hero-glow-one" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-two" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="portrait-frame">
          <img src={profile} alt="Daniel Beachy" />
        </div>
        <p className="hero-kicker">Hi, I’m Daniel.</p>
        <h1>I like making things for the web.</h1>
        <p className="hero-copy">
          This is where I keep a few projects I’ve built for fun.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="hero-button hero-button-primary"
            onClick={() =>
              document
                .getElementById("projectsList")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            See my projects <span aria-hidden="true">↓</span>
          </button>
          <a
            className="hero-button hero-button-secondary"
            href="https://github.com/daniel-beachy/daniel-beachy.github.io/blob/main/resume.png?raw=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
