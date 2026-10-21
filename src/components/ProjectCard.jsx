import React from "react";
const ProjectCard = ({ imgUrl, title, buttonUrl, description, builtWith }) => {
  return (
    <article className="card project-card">
      <div className="project-media">
        <img
          src={imgUrl}
          alt={`${title} project preview`}
          loading="lazy"
        />
        {builtWith && (
          <span
            className={`project-built project-built--${builtWith.kind}`}
            title={builtWith.kind === "hand" ? "Written by hand, no AI" : `Built with AI: ${builtWith.label}`}
          >
            <span className="project-built-dot" aria-hidden="true" />
            <span className="visually-hidden">{builtWith.kind === "hand" ? "Built: " : "Built with AI: "}</span>
            {builtWith.label}
          </span>
        )}
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
