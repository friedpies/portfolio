import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Axios from "axios";
import projects from "../data/projects";
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectUrl: props.match.params.project,
      projectData: {}
    };
  }

  componentDidMount() {
    this.setProject(this.state.projectUrl);

  }

  setProject(projectUrl) {
    const projectData = projects.find(project => {
      return project.url === projectUrl;
    });
    this.setState({ projectData });
  }

  render() {
    return <div>{JSON.stringify(this.state.projectData)}</div>;
  }
}

export default Project;
