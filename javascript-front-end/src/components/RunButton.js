import React from 'react';

class RunButton extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.runFunction = this.runFunction.bind(this);
  }

  runFunction(event){
    const list = document.getElementById("matching-answers");
    const listItem = list.getElementsByTagName("li");
    const result = document.getElementById("function-result");
    for (var i=0; i < listItem.length; i++) {
      if(listItem[i].style.background === "red"){
        result.innerHTML = "Your a star, but your also wrong."
        return;
      }
      if(i === (this.props.data.length-1)){
        result.innerHTML = this.props.data.result
      }
    }
  }

  render(){
    return(
      <button onClick={this.runFunction}>Run</button>
    )
  }

}

export default RunButton;
