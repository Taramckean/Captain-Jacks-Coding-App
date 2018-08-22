import React from 'react';
import _ from 'lodash';
import './FunctionContainer.css';
import '../components/RunButton.css'
import '../components/AnswerButtonClass.css'
import './Lesson.css'

const SelectedAnswer = props => (props.isCorrect(props.text, props.index)
  ? (
    <li style={{ backgroundColor: 'green' }}>
      {props.text}
>
    </li>
  )
  : (
    <li style={{ backgroundColor: 'rgb(255, 96, 96' }}>
      {props.text}
>
    </li>
  ));

class FunctionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectedAnswers: [],
    };

    this.selectAnswer = this.selectAnswer.bind(this);
    this.hasGotQuestionCorrect = this.hasGotQuestionCorrect.bind(this);
    this.isCorrectPosition = this.isCorrectPosition.bind(this);
    this.checkInput = this.checkInput.bind(this);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    const runChecked = this.state.runOutput === this.props.resultOutput;
    console.log(runChecked);
    if (this.hasGotQuestionCorrect() && runChecked) {
      this.setState({ userSelectedAnswers: [], showRunOutput: null });
      this.props.nextHandler();
    }
  }


  handlePrevious() {
    this.setState({ userSelectedAnswers: [] });
    this.props.prevHandler();
  }

  selectAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const answerState = this.state.userSelectedAnswers;
    if (answerState.includes(selectedAnswer)) {
      const answerRemover = answerState.indexOf(selectedAnswer);
      const removedAnswerArray = answerState.splice(answerRemover, 1);
      return this.setState(prevState => ({
        userSelectedAnswers: [...prevState.userSelectedAnswers],
      }));
    }
    return this.setState(prevState => ({
      userSelectedAnswers: [...prevState.userSelectedAnswers, selectedAnswer],
    }));
  }

  hasGotQuestionCorrect() {
    return this.state.userSelectedAnswers.toString() === this.props.functionLines.toString();
  }

  checkInput() {
    if (this.hasGotQuestionCorrect()) {
      return this.setState({ showRunOutput: true, runOutput: this.props.resultOutput });
    }
    return this.setState({ showRunOutput: true, runOutput: "You're a star! But also wrong. Give it another go :)"});
  }

  isCorrectPosition(suggestedAnswer, position) {
    return this.props.functionLines[position] == suggestedAnswer;
  }

  render() {
    const answerParts = this.props.functionLines.map((answerPart, index) => (
      <li key={index}>
        <button className='answerButtonClass' onClick={this.selectAnswer}>{answerPart}</button>
      </li>
    ));
    return (
      <React.Fragment>
        <div className="answer-box-row">
          <ul className="answer-box-column" id="shuffled-answers">
            {_.shuffle(answerParts)}
          </ul>
          <button className="run-button" onClick={this.checkInput}>Click here to run</button>
        </div>

        <div className="answer-box-column">
          <ul id="matching-answers">
            {this.state.userSelectedAnswers.map((answer, index) => <SelectedAnswer key={index} index={index} text={answer} isCorrect={this.isCorrectPosition} />)}
          </ul>
          {this.state.showRunOutput ? <p>{this.state.runOutput}</p> : <p />}
        </div>

        <div className="button-box">
          <button onClick={this.handlePrevious}>Previous</button>
          <button disabled={!this.hasGotQuestionCorrect()} onClick={this.handleNext}>Next</button>
        </div>
      </React.Fragment>
    );
  }
}

export default FunctionContainer;
