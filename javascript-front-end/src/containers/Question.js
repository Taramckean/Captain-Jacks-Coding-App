import React from 'react'
import { Redirect } from 'react-router-dom'
import FunctionContainer from './FunctionContainer'
import SuccessContainer from './SuccessContainer.js'
import RunButton from '../components/RunButton'
import './Question.css';

class Question extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      questionCompleted: false
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext(){
    if(this.state.questionNumber === this.props.lesson.length - 1){

    }
    this.setState(prevState => ({
      questionNumber: prevState.questionNumber + 1,
      questionCompleted: false

    })
  )
}

handlePrevious(){
  if(this.state.questionNumber === this.props.lesson.length + 1){

  }
  this.setState(prevState => ({
    questionNumber: prevState.questionNumber - 1,
    questionCompleted: false

  })
)
}

  render(){
    if (this.state.questionNumber === this.props.lesson.length) {
      return(
        <Redirect to='/success' />
      )
    }
    return (
      <React.Fragment>
        <h1>Question {this.state.questionNumber + 1}</h1>
      <div id="story-view">
        <p id="story">{this.props.lesson[this.state.questionNumber].story}</p>
      </div>
       <FunctionContainer functionLines={this.props.lesson[this.state.questionNumber].answers} />
       <button onClick={this.handleNext}>Next</button>
       <button onClick={this.handlePrevious}>Previous</button>

     </React.Fragment>
    );
  }
}

export default Question;
