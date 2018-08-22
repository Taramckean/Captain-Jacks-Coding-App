import React from 'react';
import _ from 'lodash';
<<<<<<< HEAD
=======
// import AnswerButton from '../components/AnswerButton';
>>>>>>> cbb88fab91ea2bfb2250fd29d0fd164bdefd3cfb
import './FunctionContainer.css';
import '../components/RunButton.css'
import '../components/AnswerButtonClass.css'
import './Lesson.css'

const SelectedAnswer = props => (props.isCorrect(props.text, props.index)
  ? (
    <li style={{ backgroundColor: '#57d04c' }}>
      {props.text}
>
    </li>
  )
  : (
    <li style={{ backgroundColor: '#ff6060' }}>
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
    this.clearList = this.clearList.bind(this);
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

  clearList(){
    this.setState({userSelectedAnswers: []})
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

  componentDidMount(){

  }

  render() {
    const answerParts = this.props.functionLines.map((answerPart, index) => (
      <li key={index}>
        <button className='answerButtonClass' onClick={this.selectAnswer}>{answerPart}</button>
      </li>
    ));
    return (
      <React.Fragment>
        {/* <h1>{this.hasGotQuestionCorrect() ? 'Success!!!' : 'Not there yet :('}</h1> */}
        <div className="answer-box-row1">
          <ul className="answer-box-column" id="shuffled-answers">
            {_.shuffle(answerParts)}
          </ul>

        <div className="answer-box-column2">
          <ul id="matching-answers">
            {this.state.userSelectedAnswers.map((answer, index) => <SelectedAnswer key={index} index={index} text={answer} isCorrect={this.isCorrectPosition} />)}
          </ul>
        </div>
        </div>
        <div className="answer-box-row2">
          <div className="answer-box-column3">
            <button className="run-button" onClick={this.checkInput}>Click here to run</button>
            <button className="run-button" onClick={this.clearList}>Clear All</button>
        </div>
        </div>
        {this.state.showRunOutput ?<div className="answer-box-row2"><div className="answer-box-column4"><div className="terminal-box"><p className="run-output">{this.state.runOutput}</p> </div></div></div>: <p />}
        <div className="button-box">
          <button className="move-buttons" onClick={this.handlePrevious}>Previous</button>
          <button className="move-buttons" disabled={!this.hasGotQuestionCorrect()} onClick={this.handleNext}>Next</button>
        </div>
      </React.Fragment>
    );
  }
}

export default FunctionContainer;
