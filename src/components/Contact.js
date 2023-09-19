import React from 'react';
import '../App.css';

function Contact() {
    return (
      <div className="mainDiv">
        <div className="one-container">
          <p className="customP">05. What's next?</p>
          <h1>Get in touch</h1>
          <div className="contactParagraph">
            <p>I am open for new challenges, so you are invited to contact me or just to say hello.</p> 
          </div>
           <a href="mailto:barthamonica@gmail.com" className="btn contact-btn">Say Hello</a>
        </div>
    </div>
    );
  }
  
  export default Contact;