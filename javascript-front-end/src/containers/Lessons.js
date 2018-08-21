import React from 'react';
// import {Link} from 'react-router-dom'
import './Lessons.css';

const Lessons = () => (
  <React.Fragment>
    <div className="lesson-list">
      <h2 className="lessonHeader">Lessons</h2>
      <h4 className="lessonText">
Oh no! That dastardly parrot Tara has made some errors in the code, it's up to you to
        fix them!
        <br />
        {' '}
Click on Lesson 1 to get started!
      </h4>
    </div>
    <video className="errorVideo" src="/Error.m4v" alt="intro video" controls />
    <div className="blueBackground">

      <a className="lessonButton" href="/lesson">Click here for Lesson 1</a>
    </div>
  </React.Fragment>
);

export default Lessons;
