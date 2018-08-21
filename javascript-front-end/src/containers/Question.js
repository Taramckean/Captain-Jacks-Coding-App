import React from 'react'
import mockQuestionAnswerData from '../mock_questionAnswerData.js'
import FunctionContainer from './FunctionContainer.js'

class Question extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      story: mockQuestionAnswerData[0]
    }
  }

  render(){
    if(!this.state.story){
      return null;
    }
    return (
      <React.Fragment>
      <div id="story-view">
        <p id="story">{this.state.story.story}</p>
      </div>
      <FunctionContainer/>
     </React.Fragment>
    );
  }
}

export default Question;
