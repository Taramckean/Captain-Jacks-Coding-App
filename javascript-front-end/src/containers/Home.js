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
    <img className="orderImagesImg" alt="kids coding" src="kids5.jpg"/>
    <div className="orderBoxes">
      <div className="textBox1"><h3>Captain Jack's App provides engaging, educational fun.
        You won't have to entertain them if they're coding in JavaScript..</h3></div>
      <div className="textBox2"><h3>Coding is good for kids yay. Need your computer fixed?
         Wouldn't it be so much cheaper if your kids knew how to fix it? </h3></div>
    </div>
  </div>
);

export default Home;
