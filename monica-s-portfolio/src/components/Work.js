import React from 'react';
import '../App.css';
import ProjectFingerFood from './ProjectFingerFood';
import ProjectCaesarCipher from './ProjectCaesarCipher';

function Work() {
  const spanStyle = {
    fontSize: '30px'
  }
    return (
      <div className="firstHomeDiv">
      <div className="firstHomeDivContent">
        <p className="customP">04. Projects</p><h1 style={spanStyle}>Some of my works</h1>
        <div className="emptyDiv"></div>
        <ProjectFingerFood />
        <div className="emptyDiv"></div>
        <ProjectCaesarCipher />
      </div>
    </div>
    
    );
  }
  
  export default Work;