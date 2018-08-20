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
    matchingAnswer.id= 'li';
    matchingAnswer.innerText = event.target.innerText;
    list.appendChild(matchingAnswer);
    this.setState({
      buttonClicked: true
    })
  console.log("it made an li")
  console.log(this.state.buttonClicked)}
    else{
      // get the specifc li created by the specific button click
      let list = document.getElementById("matching-answers")
      let listItem = document.getElementById('li');
        console.log(listItem);
      // for (listItem of list){ if (listItem.id === 'li'){
        //clear the li
        list.removeChild(listItem);
        // list.innerText = "";
      this.setState({
        buttonClicked: false
      })
      console.log("cleared");
      console.log(this.state.buttonClicked);
    }
}

  render(){
  return(
  <button onClick={this.renderAnswer}>{this.props.buttonText}</button>
  )
}
}

export default AnswerButton;
