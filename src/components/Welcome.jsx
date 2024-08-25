import React from "react";
import profile from "../img/profile-dark-bg.png";
import { Row, Col, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container
      fluid
      className="d-flex  justify-content-center bg-secondary text-light-blue"
    >
      <Row
        style={{ minHeight: "100vh" }}
        className="text-center align-items-center"
      >
        <Col>
          <img
            src={profile}
            alt=""
            style={{
              maxHeight: "60vh",
              objectFit: "contain",
              borderRadius: "25px",
              width: "100%",
              padding: "25px",
            }}
          />
          <h1 style={{ fontSize: "4rem" }}>Hello! I'm Daniel</h1>
          <Row className="justify-content-center mb-4">
            <button
              type="button"
              className="btn btn-primary mt-2 mx-4"
              style={{ maxWidth: "200px" }}
              onClick={() =>
                window.open(
                  "https://github.com/daniel-beachy/daniel-beachy.github.io/blob/main/resume.png?raw=true",
                  "_blank"
                )
              }
            >
              See Resume
            </button>
            <button
              type="button"
              className="btn btn-primary mt-2 mx-4"
              style={{ maxWidth: "200px" }}
              onClick={() =>
                document
                  .getElementById("projectsList")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
