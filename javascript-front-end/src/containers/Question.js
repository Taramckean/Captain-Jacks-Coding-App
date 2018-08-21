import React from 'react'
import FunctionContainer from './FunctionContainer'
import SuccessContainer from './SuccessContainer.js'
import './Question.css';

class Question extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      questionCompleted: false
    }
    this.handleNext = this.handleNext.bind(this)
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

  render(){
    if (this.state.questionNumber === this.props.lesson.length) {
      return(
        <SuccessContainer />
      )
    }
    return (
      <React.Fragment>
      <div id="story-view">
        <p id="story">{this.props.lesson[this.state.questionNumber].story}</p>
      </div>
       <FunctionContainer functionLines={this.props.lesson[this.state.questionNumber].answers} />
       <button onClick={this.handleNext}>Next</button>

     </React.Fragment>
    );
  }
}

export default Question;
