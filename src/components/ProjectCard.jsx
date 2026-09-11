import React from "react";
const ProjectCard = ({ imgUrl, title, buttonUrl, description, tags }) => {
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
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="project-footer">
          <ul className="project-tags" aria-label={`${title} technologies`}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <button
            className="project-link"
            onClick={() => window.open(buttonUrl, "_self")}
          >
            View project <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
