import React from 'react';
import '../App.css';

function Contact() {
    return (
      <div className="mainDiv">
        <div className="divContent">
          <p className="customP">05. What's next?</p>
          <h1>Get in touch</h1>
          <div className="contactParagraph">
            <p>I am open for new challenges, so you are invited to tell me about your project or just to say hello.</p> 
            <p>Let me bring my knowledge into your company.</p>
          </div>
           <a href="mailto:hello@monicab.dev" className="btn contact-btn">Say Hello</a>
        </div>
    </div>
    );
  }
  
  export default Contact;