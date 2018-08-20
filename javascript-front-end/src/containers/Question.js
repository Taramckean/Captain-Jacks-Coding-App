import React from 'react'
import FunctionContainer from './FunctionContainer'
import './Question.css';

class Question extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0
    }
  }

  render(){
    return (
      <React.Fragment>
      <div id="story-view">
        <p id="story">{this.props.lesson[this.state.questionNumber].story}</p>
      </div>
       <FunctionContainer functionLines={this.props.lesson[this.state.questionNumber].answers} />
      {/* <OutputContainer/>
      <SubmitButton/>
      <ResultBox/>} */}
     </React.Fragment>
    );
  }

}

export default Question;
