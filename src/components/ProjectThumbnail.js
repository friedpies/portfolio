import React from "react";
import "../styles/components/ProjectThumbnail.scss";

const ProjectThumbnail = ({ name, thumbnail }) => (
  <div className="project-thumbnail">
    <h3 id="project-name">{name}</h3>
    <img src={thumbnail} alt="thumbnail" />
  </div>
);

export default ProjectThumbnail;
