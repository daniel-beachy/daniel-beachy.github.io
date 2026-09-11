import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

const Header = () => {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a className="nav-name" href="#top" aria-label="Back to top">
          Daniel Beachy
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("projectsList")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <a
            href="https://www.linkedin.com/in/daniel-beachy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://github.com/daniel-beachy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <img src={github} alt="" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
