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

      matchingAnswer.setAttribute("id", matchingAnswer.innerText);

      list.appendChild(matchingAnswer);
      this.setState({
        buttonClicked: true
      })
      console.log("it made an li")}

    else{

      let list = document.getElementById("matching-answers");
      let selectedAnswer = document.getElementById(event.target.innerText)
      list.removeChild(selectedAnswer);

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
