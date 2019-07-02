import React, { Component } from "react";
import Filters from "../components/Filters";
import projects from "../data/projects";
import ProjectThumbnail from "../components/ProjectThumbnail";
import "../styles/Work.scss";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        ["software", false],
        ["electrical", false],
        ["mechanical", false],
        ["side projects", false]
      ]
    };
    this.projects = projects;
    this.onCheck = this.onCheck.bind(this);
  }
  componentDidUpdate() {
    console.log(this.filterProjects(this.state.filters));
  }

  onCheck(event) {
    const key = event.target.value;
    this.setState(prevState => {
      const newState = prevState.filters;
      newState[key] = [newState[key][0], !newState[key][1]];
      return { filters: prevState.filters };
    });
  }

  filterProjects(filterState) {
    const checkedFilters = filterState.filter(element => {
      return element[1] === true;
    });
    return checkedFilters;
  }

  render() {
    return (
      <div className="content-container">
        <div />
        <div>
          <h2>WORK</h2>
          <h3>FEATURED PROJECTS THAT I'VE WORKED ON</h3>
          <Filters filters={this.state.filters} onCheck={this.onCheck} />
          <div id="project-list">
            {this.projects.map(({ name, thumbnail }, key) => {
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
