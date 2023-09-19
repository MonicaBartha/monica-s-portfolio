import React from 'react';
import '../App.css';

function About() {
    return (
      <div className="mainDiv">
        <div className="divContent" >
            <p className="customP">02. Talents</p>
            <h1>About me</h1>
            <div>
              <p> Always looking to improve my skills and acquire new ones. </p>
              <p>+ Technology enthusiast.</p>  
              <p>+ Lover of the Renaissance era and cactuses.</p>
              <p>+ CSS favorite colors:</p>
              <p><span className="deeppink">&#9724;</span> deeppink;</p>
              <p><span className="lightsalmon">&#9724;</span> lightsalmon; </p>
              <p><span className="lightseagreen">&#9724;</span> lightseagreen;</p>
              <p>+ Current time zone: CEST/UTC+2</p>
            </div>
        </div>
        <div className="divContentRight">
        <h2 className="black-h2">Technologies:</h2>
            <p>Here's a few technologies I've been working with recently:</p>
            <p>+<span className="customP"> React.JS  |  Javascript</span></p>
            <p>+<span className="customP"> HTML5  |  CSS3 | Firebase</span></p>
            <p>+<span className="customP"> Photoshop | Figma</span></p>
            </div>
      </div>
    );
  }
  
  export default About;