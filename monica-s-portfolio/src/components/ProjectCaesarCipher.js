import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Git from '../media/github-mark.png'
import CaesarCipher from '../media/caesar-cipher-mockup.jpg';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(0),
      },
}));

function TwoColumnsGrid() {
  const classes = useStyles();
    return (
      <div className={classes.container}>
         
           <div style={{ gridColumnEnd: 'span 4' }}>
            <div className="secondProject">
                <p className="projectsP">Personal Project</p>
                <h3>Home Secrets </h3>
                <p className="projectDescription">Encode and decode messages app using the encryption method 
                of Emperor Iulius Caesar</p>
                <p className="projectTechnologies">Vanilla Javascript | HTML5 | CSS3</p>
                <a href="https://monicabartha.github.io/SCL012-Cipher/src/index.html" target="_blank" rel="noopener noreferrer"><img alt="github" src={Git} /></a>
            </div>
        </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
         <img className="caesarCipher" alt="CaesarCipher" src={CaesarCipher} />
        </div>
       
    </div>
    );
  }
  
  export default TwoColumnsGrid;