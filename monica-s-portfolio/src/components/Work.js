import React from 'react';
import '../App.css';
import ProjectFingerFood from './ProjectFingerFood';
import ProjectMDlinks from './ProjectMDlinks';
import ProjectMoov from './ProjectMoov';

function Work() {
    return (
      <div className="mainDiv">
        <div className="divContent">
          <p className="customP">04. Projects</p>
          <h1>Some of my works</h1>
          <div className="projectDiv"></div>
          <ProjectMoov />
          <div className="projectDiv"></div>
          <ProjectMDlinks />
          <div className="projectDiv"></div>
          <ProjectFingerFood />
        </div>
    </div>
    
    );
  }
  
  export default Work;