import React from 'react'


class ClearAllButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonClicked: true
    }
this.handleButtonClear = this.handleButtonClear.bind(this)
  }


    handleButtonClear() {
      if(this.state.buttonClicked === true){
        let list = document.getElementById("matching-answers");
        list.innerHTML = "";
      }
    }
render(){
  return(
    <button onClick={this.handleButtonClear}> Clear All</button>
  )
}
  }


export default ClearAllButton
