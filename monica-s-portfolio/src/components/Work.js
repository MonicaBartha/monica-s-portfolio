import React from 'react';
import '../App.css';
import ProjectFingerFood from './ProjectFingerFood';
import ProjectCaesarCipher from './ProjectCaesarCipher';

function Work() {
    return (
      <div className="mainDiv">
        <div className="divContent">
          <p className="customP">04. Projects</p>
          <h1>Some of my works</h1>
          <div className="projectDiv"></div>
          <ProjectFingerFood />
          <div className="projectDiv"></div>
          <ProjectCaesarCipher />
        </div>
    </div>
    
    );
  }
  
  export default Work;