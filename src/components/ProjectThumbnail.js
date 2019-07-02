import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/components/ProjectThumbnail.scss";

const ProjectThumbnail = ({ name, url, thumbnail }) => (
  <LinkContainer to={`/${url}`}>
    <div className="project-thumbnail">
      <h3 id="project-name">{name}</h3>
      <img src={thumbnail} alt="thumbnail" />
    </div>
  </LinkContainer>
);

export default ProjectThumbnail;
