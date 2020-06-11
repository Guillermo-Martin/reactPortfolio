import React, { Component } from 'react';
import Card from './../components/Card';
import projects from './../projects.json';
import './../assets/styles/portfolio.css';

class Portfolio extends Component {
  // keep track of project data
  state = {
    projects: projects,
  }


  render() {
    // map through project data and create a Bootstrap card for each project
    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Card 
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        tryLink={project.tryLink}
        repository={project.repository}
        note={project.note}
      />
    );


    return(
        <div className='flex-container'>

          {/* render the newProjects array, which is an array of Bootstrap cards */}
          {newProjectsArr}

        </div>
    );
  }
}

export default Portfolio;
