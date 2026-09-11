import React from "react";
const ProjectCard = ({ imgUrl, title, buttonUrl, description }) => {
  return (
    <article className="card project-card">
      <div className="project-media">
        <img
          src={imgUrl}
          alt={`${title} project preview`}
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <div className="project-copy">
          <div className="project-title-row">
            <h3>{title}</h3>
            <button
              className="project-link"
              onClick={() => window.open(buttonUrl, "_blank", "noopener,noreferrer")}
            >
              View project <span aria-hidden="true">↗</span>
            </button>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
