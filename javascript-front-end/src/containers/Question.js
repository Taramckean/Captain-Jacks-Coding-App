import React from 'react'
import mockQuestionAnswerData from '../mock_questionAnswerData.js'
import FunctionContainer from './FunctionContainer'

class Question extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      story: mockQuestionAnswerData[0]
    }
  }

  // componentDidMount(){
  //   this.fetchstory()
  // }
  // fetchstory(event){
  //   if(event)
  //   {
  //     event.preventDefault();
  //   }
  //   // fetch('enter api')
  //   .then(response => response.json())
  //   .then(story => this.setState({story: story}));
  // }


  render(){
    if(!this.state.story){
      return null;
    }
    return (
      <React.Fragment>
      <div id="story-view">
        <p id="story">{this.state.story.story}</p>
      </div>
       <FunctionContainer />
      {/* <OutputContainer/>
      <SubmitButton/>
      <ResultBox/>} */}
     </React.Fragment>
    );
  }

}

export default Question;
