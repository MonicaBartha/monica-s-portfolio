import React from 'react';
import '../assets/css/home.css';
import Moni from '../media/MonicaBartha.png';
import '../App.css';

function Home() {
    return (
      <div className="mainDiv">
        <div className="divContent">
                <p className="customP">01. Hi, I am</p>
                <h1>Monica Bartha</h1>
                <h2>Front-end developer</h2>
                    <p>Front-end is everything designed to be used and viewed by the user, 
                      is all you can interact with.</p>
                    <p>+ continuous learner</p>
                    <p>+ teamwork lover</p>
                    <p>+ not afraid about changes</p>
                  <a href="/work" className="btn">See my works</a>
            </div>   
        <div className="divContentRight">
            <img className="homeImg" alt="moni" src={Moni} />
        </div>
      </div>
      
    );
  }
  
  export default Home;