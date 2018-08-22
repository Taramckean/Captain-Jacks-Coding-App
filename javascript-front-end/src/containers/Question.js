import React from 'react';
import { Redirect } from 'react-router-dom';
import FunctionContainer from './FunctionContainer';
import SuccessContainer from './SuccessContainer.js';
import ResultBox from '../components/ResultBox.js';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      selectedAnswers: [],
      // questionCompleted: false,
      // clearAnswerList: false
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    this.setState(prevState => ({
      questionNumber: prevState.questionNumber + 1,
      // questionCompleted: false,  // NOTE: This needs to track the state of all questions, not just the current
      clearList: true,
    }));
  }

  handlePrevious() {
    if (this.state.questionNumber === 0) {
      return;
    }
    return this.setState(prevState => ({
      questionNumber: prevState.questionNumber - 1,
      // questionCompleted: false  // NOTE: This needs to track the state of all questions, not just the current
    }));
  }

  render() {
    if (this.state.questionNumber === this.props.lesson.length) {
      return (
        <Redirect to="/success" />
      );
    }

    const currentQuestion = this.props.lesson[this.state.questionNumber];
    return (
      <React.Fragment>
        <h1>
Question
          {this.state.questionNumber + 1}
        </h1>
        <div id="story-view">
          <p id="learning">{currentQuestion.learning}</p>
          <p id="story">{currentQuestion.story}</p>
          <p id="question">{currentQuestion.question}</p>
        </div>
        <FunctionContainer
          functionLines={currentQuestion.answers}
          userSelectedAnswers={this.state.selectedAnswers}
          resultOutput={currentQuestion.result}
          learning={currentQuestion.learning}
          nextHandler={this.handleNext}
          prevHandler={this.handlePrevious}
        />
        <ResultBox />
      </React.Fragment>
    );
  }
}

export default Question;
