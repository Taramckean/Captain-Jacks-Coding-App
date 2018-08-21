import React from 'react';

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: true,
    };
    this.handleNextButton = this.handleNextButton.bind(this);
  }


  handleNextButton(event) {
    console.log('lknoln');
  }

  render() {
    return (
      <button onClick={this.handleNextButton}> Next Task</button>
    );
  }
}

export default NextButton;
