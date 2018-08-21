import React from 'react'
import Question from './Question.js'
import RunButton from '../components/RunButton.js'
import './Lesson.css';
import ClearAllButton from '../components/ClearAllButton'
import ResultBox from '../components/ResultBox.js';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: null
    };
    this.fetchLesson = this.fetchLesson.bind(this)

  }

  componentDidMount(){
    this.fetchLesson()
  }

  fetchLesson(event){
    if(event)
    {
      event.preventDefault();
    }
    fetch('http://localhost:3001/lessons')
    .then(response => response.json())
    .then(lesson => this.setState({lesson: lesson}));
  }

  render(){
    if(!this.state.lesson){
      return null;
    }

    return (
      <React.Fragment>
        <div className="lesson-box">
      <div id="topic-view">
        <p id="topic">Space for question topic explanation</p>
      </div>
      <Question lesson={this.state.lesson}/>
      </div>
      <div className="button-box">
      <ClearAllButton/>
      </div>
      </React.Fragment>
    );

  }
}

export default Lesson
