import React from "react";
import projects from "../data/projects";

const Project = props => {
  let projectUrl = props.match.params.project;
  let projectData = projects.find(project => {
    return project.url === projectUrl;
  });
  console.log(projectData);
  return <div>{"test"}</div>;
};

export default Project;
