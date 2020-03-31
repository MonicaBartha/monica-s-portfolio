import React from 'react';
import '../App.css';

function About() {
  const spanStyle = {
    fontSize: '30px'
  }
    return (
      <div className="firstHomeDiv">
        <div className="firstHomeDivContent">
          <p className="customP">02.</p><h1 style={spanStyle}>About me</h1>
          <p>I like team work using agile methodology, makes me able to deliver high-quality products.</p>
          <p>Here's a few technologies I've been working with recently:</p>
          <ol>
            <li>Javascript</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ol>
        </div>
      </div>
    );
  }
  
  export default About;