import React from 'react';
import '../App.css'
import Git from '../media/github-mark.png'
import MDlinks from '../media/mdlinks-mockup.jpg';

function TwoColumnsGrid() {
    return (
      <div className="workDiv">
           <div className="secondColumn">
            <div className="secondProject">
                <p className="projectsP">Personal Project</p>
                <h3>MD-Links </h3>
                <p className="projectDescription">MD-Links is a tool that reads and analyzes files with the .md extension, in order to verify the links they contain and report their validation statistics.
               </p>
                <p className="projectTechnologies">Vanilla Javascript | Node.js</p>
                <a href="https://github.com/MonicaBartha/SCL012-MD-Links-" target="_blank" rel="noopener noreferrer"><img alt="github" src={Git} /></a>
            </div>
        </div>
        <div className="firstColumn">
         <img className="md-links" alt="Proyecto MD Links-codigo" src={MDlinks} />
        </div>
       
    </div>
    );
  }
  
  export default TwoColumnsGrid;