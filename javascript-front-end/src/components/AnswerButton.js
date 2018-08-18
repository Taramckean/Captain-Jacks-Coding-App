import React from 'react';
// import mockQuestionAnswerData from '../mock_questionAnswerData.js'


class AnswerButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonClicked: false
    }
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  renderAnswer(event) {
    if(this.state.buttonClicked === false){
    let list = document.getElementById("matching-answers");
    let matchingAnswer = document.createElement('li');
    matchingAnswer.innerText = event.target.innerText;
    list.appendChild(matchingAnswer);
    this.setState({
      buttonClicked: true
    })
  console.log("it made an li")}
    else{
      //get the specifc li created by the specific button click
      let selectedAnswer = document.getElementById('')
      //clear the li
      selectedAnswer.innerText = " ";
      this.setState({
        buttonClicked:false
      })
      console.log("cleared");
    }
  }

  render(){
  return(
  <button onClick={this.renderAnswer}>{this.props.buttonText}</button>
  )
}
}

export default AnswerButton;
