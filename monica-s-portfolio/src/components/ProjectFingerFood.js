import React from 'react';
import '../App.css'
import FingerFood from '../media/finger-food-facebook.jpg'
import Git from '../media/github-mark.png';
import '../assets/css/work.css';

function ProjectFingerFood() {
    return (
      <div className="mainDiv">
        <div className="firstColumn">
         <img className="fingerFoodImg" alt="finger-food-project" src={FingerFood} />
        </div>
        <div className="secondColumn">
                <p className="projectsP">Collaborative Project</p>
                <h3>Finger Food Social App</h3>
                <p className="projectDescription">Social media app for gourmet food fans.</p>
                <p className="projectTechnologies">Vanilla Javascript | Firebase | Git</p>
                <a href="https://monicabartha.github.io/SCL012-Social-Network/src/index.html" target="_blank" rel="noopener noreferrer">
                  <img alt="github" src={Git} /></a>
        </div>
    </div>
    );
  }
  
  export default ProjectFingerFood;