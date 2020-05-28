import React, { Component } from 'react';
import Portfolio from './../pages/Portfolio';
import projects from './../projects.json';
// import Wrapper from './../components/Wrapper/Wrapper';
import './portfolioContainer.css';

class PortfolioContainer extends Component {
  // keep track of project data
  state = {
    projects: projects,
  }

  // Next steps: 052520
  // 1. get cards to line up in a row

  render() {
    // console.log(this.state.projects);
    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Portfolio 
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
        // <Wrapper>
        <div className='flex-container'>

        
          {newProjectsArr}

        </div>
        // </Wrapper>
          
      
    );
  }
}

export default PortfolioContainer;