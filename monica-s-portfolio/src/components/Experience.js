import React from 'react';
import '../App.css';
import Tabs from './Tabs';
import Divider from '@material-ui/core/Divider';

function Experience() {
  const spanStyle = {
    fontSize: '30px'
  }
    return (
      <div className="firstHomeDiv">
      <div className="firstHomeDivContent">
        <p className="customP">03.</p><h1 style={spanStyle}>Work Exprience</h1>
        <br></br>
        <Divider variant="middle" />
        <Tabs />
      </div>
      
    </div>
    );
  }
  export default Experience;

  
 