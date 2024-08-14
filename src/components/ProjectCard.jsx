import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ imgUrl, title, buttonUrl }) => {
  return (
    <Card style={{ width: "24rem" }} className="bg-primary m-4 text-light-blue">
      <Card.Body className="d-flex flex-column align-items-center justify-content-between">
        <Card.Title>{title}</Card.Title>
        <img
          src={imgUrl}
          alt=""
          style={{
            maxHeight: "60vh",
            objectFit: "contain",
            borderRadius: "4px",
            width: "100%",
            marginBottom: "8px",
          }}
        />
        <Button
          className="m-8"
          variant="secondary"
          onClick={() => window.open(buttonUrl, "_self")}
        >
          Try it!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
