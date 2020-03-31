import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import FingerFood from '../media/finger-food-facebook.jpg'
import Git from '../media/github-mark.png'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(0),
      },
}));

function ProjectFingerFood() {
  const classes = useStyles();
    return (
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 8' }}>
         <img className="fingerFoodImg" alt="finger-food-project" src={FingerFood} />
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
            <div className="firstProject">
                <p className="projectsP">Collaborative Project</p>
                <h3>Finger Food Social App</h3>
                <p className="projectDescription">Social media app for gourmet food fans.</p>
                <p className="projectTechnologies">Vanilla Javascript | Firebase | Git</p>
                <a href="https://monicabartha.github.io/SCL012-Social-Network/src/index.html" target="_blank" rel="noopener noreferrer">
                  <img alt="github" src={Git} /></a>
            </div>
        </div>
    </div>
    );
  }
  
  export default ProjectFingerFood;