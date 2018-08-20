import React from 'react'
import _ from 'lodash'
import AnswerButton from '../components/AnswerButton'
import mockQuestionAnswerData from '../mock_questionAnswerData.js'
import './FunctionContainer.css';


class FunctionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AnswerParts: mockQuestionAnswerData[0]
    };
    // this.renderAnswer = this.renderAnswer.bind(this)

  }
  //
  // componentDidMount(){
  //   this.fetchAnswerParts()
  // }
  // fetchAnswerParts(event){
  //   if(event)
  //   {
  //     event.preventDefault();
  //   }
  //   // fetch('enter api')
  //   .then(response => response.json())
  //   .then(AnswerParts => this.setState({AnswerParts: AnswerParts}));
  // }


  render(){
    if(!this.state.AnswerParts){
      return null;
    }
    const answerParts = this.state.AnswerParts.answers.map((answerPart, index) => <li key={index}><AnswerButton buttonText={answerPart}>
     {answerPart}
   </AnswerButton>

    </li>

  )
  // debugger;

    return (
      <React.Fragment>
      <ul id="shuffled-answers">

      {_.shuffle(answerParts)}
      </ul>

        <ul id="matching-answers">

        </ul>
        
        </React.Fragment>
    );
  }


  }

// onclick should pass information to the OutputContainer function and render it


export default FunctionContainer
