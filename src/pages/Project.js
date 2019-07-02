import React from "react";
import projects from "../data/projects";

const Project = props => {
  let project = props.match.params.project;
  
  return <div>{JSON.stringify(projects)}</div>;
};

export default Project;
