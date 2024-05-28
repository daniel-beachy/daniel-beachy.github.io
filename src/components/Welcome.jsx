import React from "react";
import profile from "../img/profile.png";
import { Row, Col, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container>
      <Row className="bg-secondary p-5">
        <Col
          sm={8}
          className="text-light-blue d-flex flex-column justify-content-center align-items-center"
        >
          <h1 style={{ fontSize: "4rem" }}>Hello! I'm Daniel</h1>
          <button
            type="button"
            className="btn btn-primary mt-2"
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
        </Col>
        <Col sm={4}>
          <img
            src={profile}
            style={{
              maxHeight: "75vh",
              objectFit: "cover",
              borderRadius: "25px",
              width: "100%",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
