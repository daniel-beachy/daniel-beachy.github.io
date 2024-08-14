import React from "react";
import { Container, Navbar } from "react-bootstrap";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark m-0">
      <Container fluid className="d-flex justify-content-between mx-4">
        <Navbar.Brand>Daniel Beachy</Navbar.Brand>
        <div className="social-icon d-flex">
          <a
            href="https://www.linkedin.com/in/daniel-beachy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="px-2" src={linkedin} alt="" height={25} />
          </a>
          <a
            href="https://github.com/daniel-beachy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="px-2" src={github} alt="" height={25} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
