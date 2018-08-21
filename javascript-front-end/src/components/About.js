import React from "react";
import './About.css';

const About = () => (
  <React.Fragment>
    <h2 className="aboutHeader">About</h2>
  <div className="row">
    <div className="column1"><p class="aboutP">Captain Jack's Coding App is an educational tool designed to help kids of ages 7-11 to learn how to code.
    Each question in a lesson explains a different concept in coding and helps kids to make sense of code
  in a way they can understand. </p></div>
  <div className="column2"><img className="aboutImage" src="kids6.jpg" alt="kids doing more coding"/>
</div>
  </div>
  </React.Fragment>
);

export default About;
