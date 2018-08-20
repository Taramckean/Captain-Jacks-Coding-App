import React from 'react'
// import {Link} from 'react-router-dom'
import './Lessons.css';

const Lessons = () => {
  return(
    <div className="lesson-list">
      <h2 className="lessonHeader">Lessons</h2>
      <h4 className="lessonHeader">Oh no! That dastardly parrot Tara has made some errors in the code, it's up to you to
        fix them!</h4>
      <video className="errorVideo" src="/Error.m4v" alt="intro video" controls/>
      <h4 className="lessonText">Click on Lesson 1 to get started!</h4>
      <button className="lessonButton"><a href="/lesson">Lesson 1</a></button>
    </div>
  )
}

export default Lessons;
