import React from 'react'

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
      <button onClick={this.runFunction}>Run</button>
    )
  }

}

export default RunButton;
