import React from 'react'
import _ from 'lodash'
import mockQuestionAnswerData from '../mock_questionAnswerData.js'
import AnswerButton from '../components/AnswerButton.js'
import RunButton from '../components/RunButton.js'

class FunctionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AnswerParts: mockQuestionAnswerData[0]
    };
  }

  render(){
    if(!this.state.AnswerParts){
      return null;
    }
    const answerParts = this.state.AnswerParts.answers.map((answerPart, index) => <li>
      <AnswerButton functionOrder={index} buttonText={answerPart}>{answerPart}</AnswerButton>
    </li>
    )
    return (
      <React.Fragment>
        <ul id="shuffled-answers">
          {_.shuffle(answerParts)}
        </ul>
        <ul id="matching-answers">

        </ul>
        <RunButton data={this.state.AnswerParts}></RunButton>
      </React.Fragment>
    );
  }
  }

export default FunctionContainer
