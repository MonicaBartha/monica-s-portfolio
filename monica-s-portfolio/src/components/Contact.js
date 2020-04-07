import React from 'react';
import '../App.css';
import Button from '../components/Button';

function Contact() {
    return (
      <div className="mainDiv">
        <div className="divContent">
          <p className="customP">05. What's next?</p>
          <h1>Get in touch</h1>
          <p>I am open for new challenges, let me bring my knowledge into your company.</p>
          <Button title="Say Hello" />
        </div>
    </div>
    );
  }
  
  export default Contact;