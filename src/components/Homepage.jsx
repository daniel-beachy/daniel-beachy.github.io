import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./Header";

const Homepage = () => {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row>
        <Header />
      </Row>
      <Row className="flex-grow-1 bg-secondary"></Row>
    </Container>
  );
};

export default Homepage;
