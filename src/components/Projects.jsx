import React from "react";
import ProjectCard from "./ProjectCard";
import nqueens from "../img/nqueens-image.png";
import sorting from "../img/sorting-image.png";
import nflTracker from "../img/nfl-tracker-image.png";
import flossforge from "../img/flossforge-image.png";
import sundayHq from "../img/sunday-hq-image.png";
import secretSanta from "../img/secret-santa-coordinator-image.png";

const Projects = () => {
  const projects = [
    {
      imgUrl: nqueens,
      title: "N-Queens",
      buttonUrl: "nqueens",
      description:
        "An interactive look at the classic backtracking problem, with every placement visualized.",
      tags: ["Algorithms", "Visualization"],
    },
    {
      imgUrl: sorting,
      title: "Sorting Visualizer",
      buttonUrl: "sorting",
      description:
        "Watch sorting algorithms work step by step and compare how each approach moves data.",
      tags: ["Algorithms", "Interactive"],
    },
    {
      imgUrl: nflTracker,
      title: "NFL Season Tracker",
      buttonUrl: "nfl-season-tracker-v3/",
      description:
        "A data-rich dashboard for following teams, trends, standings, and the season at a glance.",
      tags: ["Data", "Dashboard"],
    },
    {
      imgUrl: flossforge,
      title: "FlossForge",
      buttonUrl: "flossforge/",
      description:
        "A focused workspace for planning fiber projects, colors, dimensions, and materials.",
      tags: ["Design tools", "Productivity"],
    },
    {
      imgUrl: sundayHq,
      title: "Sunday HQ",
      buttonUrl: "https://fantasy-dashboard-v1.daniel-beachy.workers.dev/",
      description:
        "One command center for fantasy football leagues, matchups, players, and weekly decisions.",
      tags: ["Cloudflare", "Sports data"],
    },
    {
      imgUrl: secretSanta,
      title: "Secret Santa Coordinator",
      buttonUrl: "https://secret-santa-coordinator-v1.daniel-beachy.workers.dev/",
      description:
        "A private, constraint-aware exchange builder with secure participant-only reveals.",
      tags: ["Workers", "D1"],
    },
  ];

  return (
    <section id="projectsList" className="projects-section">
      <div className="projects-container">
        <header className="projects-heading">
          <p>Selected work</p>
          <h2>Projects built to be used.</h2>
          <span>
            Practical tools, thoughtful interfaces, and a little algorithmic
            curiosity.
          </span>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
