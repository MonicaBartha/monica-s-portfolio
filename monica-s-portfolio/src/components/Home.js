import React from 'react';
import '../assets/css/home.css';
import Button from '../components/Button';
import Moni from '../media/MonicaBartha.png';
import '../App.css';
function Home() {
  
    return (
      <div className="mainDiv">
        <div className="divContent">
                <p className="customP">01. Hi, I am</p>
                <h1>Monica Bartha</h1>
                <h2>I bring some pink</h2>
                  <div className="paragraph">
                    <p>I’m a front-end developer based in Santiago, Chile, specialized in developing web apps.</p>
                  </div>
                <Button title="See My Works" />
            </div>   
        <div className="divImg">
            <img className="homeImg" alt="moni" src={Moni} />
        </div>
      </div>
      
    );
  }
  
  export default Home;