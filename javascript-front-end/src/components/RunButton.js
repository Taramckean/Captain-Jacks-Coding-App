import React from 'react'
import './RunButton.css';

class RunButton extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  runFunction(event){

  }

  render(){
    return(
      <button className="run-button" onClick={this.runFunction}>Run</button>
    )
  }

}

export default RunButton;
