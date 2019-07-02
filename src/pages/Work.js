import React, { Component } from "react";
import Filters from "../components/Filters";
import projects from "../data/projects";
import ProjectThumbnail from "../components/ProjectThumbnail";
import "../styles/Work.scss";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        software: false,
        electrical: false,
        mechanical: false,
        sideProject: false
      }
    };

    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="content-container">
        <div />
        <div>
          <h2>WORK</h2>
          <h3>FEATURED PROJECTS THAT I'VE WORKED ON</h3>
          <Filters
            filterNames={Object.keys(this.state.filters)}
            onCheck={this.onCheck}
          />
          <div id="project-list">
            {projects.map(({ name, thumbnail }, key) => {
              let projectProps = {
                key,
                name,
                thumbnail
              };
              return <ProjectThumbnail {...projectProps} />;
            })}
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Work;
