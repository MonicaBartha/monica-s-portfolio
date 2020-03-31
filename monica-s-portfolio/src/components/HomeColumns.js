import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Moni from '../media/MonicaBartha.png';
import Button from './Button';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
      },
}));

function ProjectFingerFood() {
  const classes = useStyles();
    return (
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 6' }}>
            <div className="firstHomeDivContent">
                <p className="customP">Hi, I am</p>
                <h1>Monica Bartha</h1>
                <h2>I bring some pink</h2>
                <p>I’m a front-end developer based in Santiago, Chile,<br /> specialized in developing web apps.</p>
                <Button title="See My Works" />
            </div>    
        </div>
        <div style={{ gridColumnEnd: 'span 6' }}>
            <img className="homeImg" alt="moni" src={Moni} />
        </div>
    </div>
    );
  }
  
  export default ProjectFingerFood;