import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from '../containers/Home';
import Lessons from '../containers/Lessons';
import Lesson from '../containers/Lesson';
import SuccessContainer from '../containers/SuccessContainer';

class Main extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/lesson" component={Lesson} />
          <Route path="/success" component={SuccessContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
