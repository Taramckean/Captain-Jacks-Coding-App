import React from 'react'
import _ from 'lodash'
import AnswerButton from '../components/AnswerButton'
import './FunctionContainer.css';
import RunButton from '../components/RunButton.js'

const SelectedAnswer = (props) =>
  props.isCorrect(props.text, props.index) ?
    (<li style={{backgroundColor: 'green'}}>{props.text}></li>) :
    (<li style={{backgroundColor:'red'}}>{props.text}></li>);

class FunctionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectedAnswers: [],
    }

    this.selectAnswer = this.selectAnswer.bind(this);
    this.hasGotQuestionCorrect = this.hasGotQuestionCorrect.bind(this);
    this.isCorrectPosition = this.isCorrectPosition.bind(this);
    this.checkInput = this.checkInput.bind(this);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    this.setState({ userSelectedAnswers: [], showRunOutput: null });
    this.props.nextHandler();
  }


  handlePrevious() {
    this.setState({ userSelectedAnswers: [] });
    this.props.prevHandler();
  }

  selectAnswer(event) {
    const selectedAnswer = event.target.innerText;
    return this.setState((prevState) => ({
      userSelectedAnswers: [...prevState.userSelectedAnswers, selectedAnswer]
    }));
  }

  hasGotQuestionCorrect() {
    return this.state.userSelectedAnswers.toString() === this.props.functionLines.toString();
  }

  checkInput(){
    if (this.hasGotQuestionCorrect()){
      return this.setState({showRunOutput: true, runOutput: this.props.resultOutput})
    }else {
      return this.setState({showRunOutput: true, runOutput: "Your a star! But also wrong. Give it another go :)"})
    }
  }

  isCorrectPosition(suggestedAnswer, position) {
    return this.props.functionLines[position] == suggestedAnswer;
  }

  render(){
    const answerParts = this.props.functionLines.map((answerPart, index) =>
      <li key={index}>
        <button onClick={this.selectAnswer}>{answerPart}</button>
      </li>);
    return (
      <React.Fragment>
        {/* <h1>{this.hasGotQuestionCorrect() ? 'Success!!!' : 'Not there yet :('}</h1> */}
        <div className="answer-box-row">
          <ul  className="answer-box-column" id="shuffled-answers">
            {_.shuffle(answerParts)}
          </ul>

          <div className='answer-box-column'>
            <ul id="matching-answers">
              {this.state.userSelectedAnswers.map((answer, index) =>
                <SelectedAnswer key={index} index={index} text={answer} isCorrect={this.isCorrectPosition} />)}
            </ul>
            <button onClick={this.checkInput}>Click here to run</button>
            {this.state.showRunOutput ? <p>{this.state.runOutput}</p> : <p></p>}
          </div>

        </div>
        <div className="button-box">
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </React.Fragment>
    );
  }
  }

export default FunctionContainer
