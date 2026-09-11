import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Welcome />
        <Projects />
      </main>
    </div>
  );
};

export default Homepage;
