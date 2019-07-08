import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Axios from "axios";
import projects from "../data/projects";
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "../styles/pages/Project.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didReceiveData: false,
      projectUrl: props.match.params.project,
      projectData: {},
      galleryImages: []
    };
  }

  componentWillMount() {
    // get images stored in Digital Ocean spaces API
    const projectData = this.setProject(this.state.projectUrl);
    Axios.get(
      `http://${process.env.REACT_APP_API_URL}api/images/${
        this.state.projectUrl
      }`
    ).then(({ data }) => {
      this.setState({
        didReceiveData: true,
        projectData: projectData,
        galleryImages: data
      });
    });
  }

  setProject(projectUrl) {
    const projectData = projects.find(project => {
      return project.url === projectUrl;
    });
    return projectData;
  }

  render() {
    return (
      <div className="project-container">
        <div>
          <ImageGallery items={this.state.galleryImages} />
        </div>
        <div>
          <h2>About</h2>
          <p>{this.state.projectData.about}</p>
          <h2>My Role</h2>
          {this.state.projectData.role
            ? this.state.projectData.role.map((element, key) => {
                return <div key={key}>{element}</div>;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Project;
