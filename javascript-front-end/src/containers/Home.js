import React from 'react'
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="header">
{/* <img src="JackLogo2.png" alt="logo" sizes="32x32"/> */}
      <h1 className="homeHeading">Captain Jack's Coding App</h1>
    </div>
    <div className="introVid">
      <video src="/Intro.m4v" alt="intro video" controls/>
    </div>
    <div className="orderImages">
      <div className="orderImagesImg"><img  alt="kids coding" src="kids3.jpg"/></div>
      <div className="textBox1"><h3>Kids love coding yay! Captain Jack provides engaging, educational fun.</h3></div>
      <div className="textBox2"><h3>Coding is good for kids yay</h3></div>
      <div className="orderImagesImg"><img alt="kids on laptops" src="kids4.jpg"/></div>
      {/* <img alt="teaching code" src="kids5.jpg"/> */}
    </div>

  </div>
);

export default Home;
