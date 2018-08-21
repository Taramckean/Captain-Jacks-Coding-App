import React from 'react';
// import mockQuestionAnswerData from '../mock_questionAnswerData.js'
import './AnswerButtonClass.css';

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    };
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  renderAnswer(event) {
    const result = document.getElementById('function-result');
    // result.innerHTML = ""
    if (this.state.buttonClicked === false) {
      const list = document.getElementById('matching-answers');
      const matchingAnswer = document.createElement('li');
      matchingAnswer.innerText = event.target.innerText;
      matchingAnswer.setAttribute('id', matchingAnswer.innerText);
      matchingAnswer.setAttribute('title', this.props.functionOrder);
      list.appendChild(matchingAnswer);
      this.setState({
        buttonClicked: true,
      });
      const listItem = list.getElementsByTagName('li');
      for (let i = 0; i < listItem.length; i++) {
        if (parseInt(listItem[i].title) === i) {
          listItem[i].style.background = '#57d04c';
        } else {
          listItem[i].style.background = '#ff6060';
        }
      }
    } else {
      const list = document.getElementById('matching-answers');
      const selectedAnswer = document.getElementById(event.target.innerText);
      list.removeChild(selectedAnswer);
      this.setState({
        buttonClicked: false,
      });
    }
  }

  render() {
    return (
      <button className="answerButtonClass" onClick={this.renderAnswer}>{this.props.buttonText}</button>
    );
  }
}

export default AnswerButton;
