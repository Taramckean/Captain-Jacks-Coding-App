import React from 'react'
import _ from 'lodash'
import AnswerButton from '../components/AnswerButton'
import './FunctionContainer.css';


class FunctionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AnswerParts: null
    };
  //   this.fetchAnswerParts = this.fetchAnswerParts.bind(this)
  //
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
  //   fetch('http://localhost:3001/lessons')
  //   .then(response => response.json())
  //   .then(AnswerParts => this.setState({AnswerParts: AnswerParts}));
  // }


  render(){
    const answerParts = this.props.functionLines.map((answerPart, index) => <li key={index}><AnswerButton buttonText={answerPart} functionOrder={index}></AnswerButton></li>)


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
