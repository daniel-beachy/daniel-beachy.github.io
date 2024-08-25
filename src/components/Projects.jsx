import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import nqueens from "../img/nqueens-image.png";
import sorting from "../img/sorting-image.png";

const Projects = () => {
  const projects = [
    {
      imgUrl: nqueens,
      title: "N-Queens",
      buttonUrl: "nqueens",
    },
    {
      imgUrl: sorting,
      title: "Sorting Visualizer",
      buttonUrl: "sorting",
    },
  ];

  return (
    <Container fluid className="bg-dark p-4">
      <Row className="align-items-center" style={{ minHeight: "100vh" }}>
        <Col className="px-4">
          <Row id="projectsList" className="d-flex justify-content-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
