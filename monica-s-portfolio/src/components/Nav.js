import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import MenuIcon from '../media/menu-button.png'

function Nav() {
    const navStyle = {
        color: '#FF0081',
        textDecoration: 'none'
    };
    const linkStyle = {
        textDecoration: 'none',
        color: '#333'
       
    }
    return (
        <div className="nav">
            <header>
                <label htmlFor="toggle"><img alt="menuIcon" src={MenuIcon}/></label>
                <input type="checkbox" id="toggle" />
                <div className="nav-links">
                    <ul>
                        <Link style={linkStyle} to="/"><li><span style={navStyle}>01.</span> Home</li> </Link>
                        <Link style={linkStyle} to="/about"><li><span style={navStyle}>02.</span> About</li> </Link>
                        <Link style={linkStyle} to="/experience"><li><span style={navStyle}>03.</span> Experience</li></Link>
                        <Link style={linkStyle} to="/work"><li><span style={navStyle}>04.</span> Work</li></Link>
                        <Link style={linkStyle} to="/contact"><li><span style={navStyle}>05.</span> Contact</li></Link>
                        <Button title="Resume" />
                    </ul>
                </div>
            </header>
        </div>
        
    )
      
    
}

        
export default Nav;