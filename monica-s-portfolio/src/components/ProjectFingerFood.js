import React from 'react';
import '../App.css';
import FingerFood from '../media/finger-food-facebook.jpg';
import Git from '../media/github-mark.png';
import '../assets/css/work.css';
import Code from '../media/code30x30.png';

function ProjectFingerFood() {
    return (
      <div className="workDiv">
        <div className="firstColumn">
         <img className="fingerFoodImg" alt="finger-food-project" align="left" src={FingerFood} />
        </div>
        <div className="secondColumn">
                <p className="projectsP">Collaborative Project</p>
                <h3>Finger Food Social App</h3>
                <p className="projectDescription">Social media app where gourmet food fans can share and receive recommendation about restaurants or even recipes.</p>
                <p className="projectTechnologies">Vanilla Javascript | Firebase | CSS3 | Git</p>
                <a href="https://github.com/MonicaBartha/SCL012-Social-Network" target="_blank" rel="noopener noreferrer">
                  <img alt="code icon" className="codeIcon" src={Code} /></a>
                <a href="https://monicabartha.github.io/SCL012-Social-Network/src/index.html" target="_blank" rel="noopener noreferrer">
                  <img alt="github" src={Git} /></a>
        </div>
    </div>
    );
  }
  
  export default ProjectFingerFood;