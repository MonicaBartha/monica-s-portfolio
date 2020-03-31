import React from 'react';
import '../App.css';
import VerticalDivider from './VerticalDivider';

function Footer() {
  
    return (
      <div>
          <Button value="See my works" />
          <div className="verticalText"><a href="mailto:hello@monicab.dev">hello@monicab.dev</a></div>
          <VerticalDivider />
      </div>
      
    );
  }
  
  export default Footer;