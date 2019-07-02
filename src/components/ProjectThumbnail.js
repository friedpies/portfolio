import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/components/ProjectThumbnail.scss";

const ProjectThumbnail = ({ project }) => (
  <LinkContainer to={{ pathname: `/${project.url}`, state: "test" }}>
    <div className="project-thumbnail">
      <h3 id="project-name">{project.name}</h3>
      <img src={project.thumbnail} alt="thumbnail" />
    </div>
  </LinkContainer>
);

export default ProjectThumbnail;
