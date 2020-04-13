import React from 'react';
import '../App.css';
import VerticalDivider from './VerticalDivider';
import '../assets/css/footer.css';
import Behance from '../media/behance-logo.png';
import Github from '../media/github-mark.png';
import LinkedIn from '../media/linkedin-icon.png';


function Footer() {
  
    return (
      <div className="divFooter">
        
          <div className="footerIcons">
            <a href="https://www.linkedin.com/in/monica-bartha/" target="_blank" rel="noopener noreferrer"> 
            <img src={LinkedIn} className="socialIcons" alt="Linkedin" /> </a>
            <a href="https://github.com/MonicaBartha" target="_blank" rel="noopener noreferrer"> 
            <img src={Github} className="socialIcons" alt="Github" /> </a>
            <a href="https://www.behance.net/monica_bartha" target="_blank" rel="noopener noreferrer">
            <img src={Behance} className="socialIcons" alt="Behance" /> </a>
            
          </div>
         
          <VerticalDivider />
      </div>
      
    );
  }
  
  export default Footer;