import React from 'react'

class FunctionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AnswerParts: null
    };

  }

  componentDidMount(){
    this.fetchAnswerParts()
  }
  fetchAnswerParts(event){
    if(event)
    {
      event.preventDefault();
    }
    // fetch('enter api')
    .then(response => response.json())
    .then(AnswerParts => this.setState({AnswerParts: AnswerParts}));
  }

  render(){
    if(this.state.AnswerParts){
      return null;
    }
    return (
      <React.Fragment>
      <div id="AnswerParts-view">
        <p id="AnswerParts">{this.state.AnswerParts.AnswerParts}</p>
      </div>
      <Question/>
      </React.Fragment>
    );
  }

}

default export FunctionContainer
