import React from "react";
import { Row, Container } from "react-bootstrap";
import Header from "./Header";
import Welcome from "./Welcome";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row>
        <Header />
        <Welcome />
        <Projects />
      </Row>
      <Row className="flex-grow-1 bg-secondary"></Row>
    </Container>
  );
};

export default Homepage;
