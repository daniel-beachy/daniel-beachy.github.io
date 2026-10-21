import React from "react";
import ProjectCard from "./ProjectCard";
import nqueens from "../img/nqueens-image.png";
import sorting from "../img/sorting-image.png";
import nflTracker from "../img/nfl-tracker-image.png";
import flossforge from "../img/flossforge-image.png";
import sundayHq from "../img/sunday-hq-image.png";
import secretSanta from "../img/secret-santa-coordinator-image.png";
import deepRoots from "../img/deep-roots-image.png";

const Projects = () => {
  // Display order is deliberate (Daniel's call), not chronological: the two hand-coded originals
  // first, then the AI-built projects from most to least favorite. Ask where a new card goes.
  // builtWith is shown on the card so it's clear what was hand-coded and what an AI model wrote.
  const projects = [
    {
      imgUrl: nqueens,
      title: "N-Queens",
      buttonUrl: "nqueens",
      description: "A little visual solver for the N-Queens puzzle.",
      builtWith: { kind: "hand", label: "Hand-coded · 2024" },
    },
    {
      imgUrl: sorting,
      title: "Sorting Visualizer",
      buttonUrl: "sorting",
      description: "Sorting bars, but more fun to watch than it sounds.",
      builtWith: { kind: "hand", label: "Hand-coded · 2024" },
    },
    {
      imgUrl: deepRoots,
      title: "Deep Roots",
      buttonUrl: "time-tree-v1/",
      description: "Pick any two living things and find out how long ago they were family.",
      builtWith: { kind: "ai", label: "Claude Opus 5.5" },
    },
    {
      imgUrl: secretSanta,
      title: "Secret Santa Coordinator",
      buttonUrl: "https://secret-santa-coordinator-v1.daniel-beachy.workers.dev/",
      description: "Set up a Secret Santa without anyone accidentally seeing the whole list.",
      builtWith: { kind: "ai", label: "GPT-5.6 Sol" },
    },
    {
      imgUrl: nflTracker,
      title: "NFL Season Tracker",
      buttonUrl: "nfl-season-tracker-v3/",
      description: "A place to keep an eye on the NFL season and how it is shaping up.",
      builtWith: { kind: "ai", label: "GPT-6 Astra" },
    },
    {
      imgUrl: sundayHq,
      title: "Sunday HQ",
      buttonUrl: "https://fantasy-dashboard-v1.daniel-beachy.workers.dev/",
      description: "All the fantasy football stuff I want to see on Sundays.",
      builtWith: { kind: "ai", label: "GPT-6 Astra" },
    },
    {
      imgUrl: flossforge,
      title: "FlossForge",
      buttonUrl: "flossforge/",
      description: "Describe a friendship bracelet and get instructions for making it.",
      builtWith: { kind: "ai", label: "Claude Opus 5" },
    },
  ];

  return (
    <section id="projectsList" className="projects-section">
      <div className="projects-container">
        <header className="projects-heading">
          <h2>Personal projects</h2>
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
