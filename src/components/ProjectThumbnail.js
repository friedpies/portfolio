import React from "react";
import "../styles/components/ProjectThumbnail.scss";

const ProjectThumbnail = ({ name, thumbnail, onProjectClick }) => (
  <div onClick={() => onProjectClick(name)} className="project-thumbnail">
    <h3 id="project-name">{name}</h3>
    <img src={thumbnail} alt="thumbnail" />
  </div>
);

export default ProjectThumbnail;
