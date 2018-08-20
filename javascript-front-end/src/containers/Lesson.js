import React from 'react'
import Question from './Question.js'
import './Lesson.css';
import ClearAllButton from '../components/ClearAllButton'

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
      <div id="topic-view">
        <p id="topic">Hello</p>
      </div>
      <Question lesson={this.state.lesson}/>
      <ClearAllButton/>
      </React.Fragment>
    );
  }

}

export default Lesson
