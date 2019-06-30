import React from "react";
import projects from "../data/projects";
import ProjectThumbnail from "../components/ProjectThumbnail";

const Work = props => (
  <div className="content-container">
    <div />
    <div>
      <h2>WORK</h2>
      <h3>FEATURED PROJECTS THAT I'VE WORKED ON</h3>
      {projects.map(({ name, thumbnail }) => {
        let projectProps = {
          name,
          thumbnail
        };
        return <ProjectThumbnail {...projectProps} />;
      })}
    </div>
    <div />
  </div>
);

export default Work;
