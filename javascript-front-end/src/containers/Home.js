import React from 'react'
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="header">

      <h1 className="homeHeading">Captain Jack's Coding App</h1>
      <h4 className="homeH4">An app to make you varrrrghy good at coding!</h4>
    </div>
    <div className="introVid">
      <video src="/Intro.m4v" alt="intro video" controls/>
    </div>
    <div className="orderImages">
      <div className="orderImagesImg"><img  alt="kids coding" src="kids5.jpg"/></div>
      <div className="textBox1"><h3>Kids love coding yay! Captain Jack provides engaging, educational fun.</h3></div>
      <div className="textBox2"><h3>Coding is good for kids yay</h3></div>
      {/* <div className="orderImagesImg"><img alt="kids on laptops" src="kids4.jpg"/></div> */}
    </div>

  </div>
);

export default Home;
