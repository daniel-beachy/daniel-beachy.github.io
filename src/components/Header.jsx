import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark m-0">
      <Container className="mx-4">
        <Navbar.Brand>Daniel Beachy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="nqueens">N-Queens</NavDropdown.Item>
              <NavDropdown.Item href="sorting">Sorting</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
