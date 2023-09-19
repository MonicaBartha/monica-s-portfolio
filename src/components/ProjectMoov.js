import React from 'react';
import '../App.css';
import Git from '../media/github-mark.png';
import '../assets/css/work.css';
import Code from '../media/code30x30.png';
import MoovImg from '../media/moov-project.jpg';

function ProjectMoov() {
    return (
      <div className="workDiv">
        <div className="firstColumn">
         <img className="fingerFoodImg" alt="moov-project-presentation" align="left" src={MoovImg} />
        </div>
        <div className="secondColumn">
                <p className="projectsP">Collaborative Project</p>
                <h3>Moov - tourism and accessibility</h3>
                <p className="projectDescription">Moov is an application that makes it easier for people with reduced mobility to find tourist points of interest and inclusive places of entertainment.</p>
                <p className="projectTechnologies">React | Here Maps Api | CSS3 | Git | Scrum</p>
                <a href="https://github.com/MonicaBartha/moov" target="_blank" rel="noopener noreferrer">
                  <img alt="code icon" className="codeIcon" src={Code} /></a>
                <a href="https://moov-8e44e.web.app/" target="_blank" rel="noopener noreferrer">
                  <img alt="github" src={Git} /></a>
        </div>
    </div>
    );
  }
  
  export default ProjectMoov;