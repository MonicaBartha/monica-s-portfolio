import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import MenuIcon from '../media/menu-button.png'

function Nav() {
    const navStyle = {
        color: '#FF0081',
        textDecoration: 'none'
    };
    
    return (
        <div className="nav">
            <header>
                <label htmlFor="toggle"><img alt="menuIcon" src={MenuIcon}/></label>
                <input type="checkbox" id="toggle" />
                <div className="nav-links">
                    <ul>
                        <Link  to="/"><li><span style={navStyle}>01.</span> Home</li> </Link>
                        <Link  to="/about"><li><span style={navStyle}>02.</span> About</li> </Link>
                        <Link  to="/experience"><li><span style={navStyle}>03.</span> Experience</li></Link>
                        <Link  to="/work"><li><span style={navStyle}>04.</span> Work</li></Link>
                        <Link to="/contact"><li><span style={navStyle}>05.</span> Contact</li></Link>
                        <a href="https://monicab.dev/src/media/Curriculum-Vitae_Monica-Bartha-EN.pdf" target="_blank" className="btn resume-btn" rel="noopener noreferrer">Resume</a>
                    </ul>
                </div>
            </header>
        </div>
        
    )
      
    
}

        
export default Nav;