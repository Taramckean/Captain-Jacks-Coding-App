import React from 'react';
import Question from './Question.js';
import './Lesson.css';
import ResultBox from '../components/ResultBox.js';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: null,
    };
    this.fetchLesson = this.fetchLesson.bind(this);
  }

  componentDidMount() {
    this.fetchLesson();
  }

  fetchLesson(event) {
    if (event) {
      event.preventDefault();
    }
    fetch('http://localhost:3001/lessons')
      .then(response => response.json())
      .then(lesson => this.setState({ lesson }));
  }

  render() {
    if (!this.state.lesson) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="lesson-box">
          <div id="topic-view">
            <p id="topic">{this.state.lesson.learning}</p>
          </div>
          <Question lesson={this.state.lesson} />
        </div>
      </React.Fragment>
    );
  }
}

export default Lesson;
