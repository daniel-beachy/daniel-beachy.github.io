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
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100 bg-dark"
    >
      <Row>
        <Col size={12}>
          <Row id="projectsList">
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
