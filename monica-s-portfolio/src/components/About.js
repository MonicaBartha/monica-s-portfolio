import React from 'react';
import '../App.css';

function About() {
    return (
      <div className="mainDiv">
        <div className="divContent">
          <p className="customP">02. Talents</p>
          <h1>About me</h1>
          <div className="paragraph">
            <p>I am constantly concerned about how to improve personally and as a professional, to acquire new skills. </p>
            <p>Always looking for collaboration and friendship in the work team, doing my best to be an active part.</p>  
            <p>My goal is to offer high quality web applications, delivered at right time.</p>
            <p>Here's a few technologies I've been working with recently:</p>
          </div>
          <p><strong>Design:</strong> <span className="customP">Photoshop | Figma</span></p>
          <p><strong>Develop:</strong> <span className="customP">Javascript  |  React  |  HTML5  |  CSS3 | Firebase | WordPress</span></p>
          <p><strong>Digital marketing:</strong> <span className="customP">SEO | SEM | Social media</span></p>
        </div>
      </div>
    );
  }
  
  export default About;