import React from "react";

const Project = ({ match }) => {
  let project = match.params.project;
  return <div>{project}</div>;
};

export default Project;
