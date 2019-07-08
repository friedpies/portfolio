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
      ],
      projects: projects,
      "filtered projects": projects
    };
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(event) {
    const key = event.target.value;
    this.setState(prevState => {
      const newState = prevState.filters;
      newState[key] = [newState[key][0], !newState[key][1]];
      return { filters: prevState.filters };
    });
  }

  render() {
    const getCheckedFilters = filters => {
      const checkedFilters = filters.filter(element => {
        return element[1] === true;
      });
      return checkedFilters;
    };

    const filterProjects = (projects, checkedFilters) => {
      if (checkedFilters.length === 0) {
        return projects;
      }

      return projects.filter(project => {
        for (let i = 0; i < checkedFilters.length; i++) {
          if (!project.filters[checkedFilters[i][0]]) {
            return false;
          }
        }
        return true;
      });
    };

    const renderProjects = () => {
      const checkedFilters = getCheckedFilters(this.state.filters);
      const filteredProjects = filterProjects(
        this.state.projects,
        checkedFilters
      );
      return filteredProjects.map((project, key) => {
        let projectProps = {
          key,
          project
        };
        return <ProjectThumbnail {...projectProps} />;
      });
    };

    return (
      <div className="content-container">
        <div />
        <div>
          <h2>WORK</h2>
          <h3>FEATURED PROJECTS THAT I'VE WORKED ON</h3>
          <Filters filters={this.state.filters} onCheck={this.onCheck} />
          <div id="project-list">{renderProjects()}</div>
        </div>
        <div />
      </div>
    );
  }
}

export default Work;
