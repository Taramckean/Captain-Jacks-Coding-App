import React from 'react'
import Question from './Question.js'

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null
    };

  }

  componentDidMount(){
    this.fetchTopic()
  }
  // fetchTopic(event){
  //   if(event)
  //   {
  //     event.preventDefault();
  //   }
  //   // fetch('enter api')
  //   .then(response => response.json())
  //   .then(topic => this.setState({topic: topic}));
  // }

  render(){
    if(this.state.topic){
      return null;
    }
    return (
      <React.Fragment>
      <div id="topic-view">
        <p id="topic">{this.state.topic.topic}</p>
      </div>
      <Question/>
      </React.Fragment>
    );
  }

}

export default Lesson
