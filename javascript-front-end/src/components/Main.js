import React, {Component} from 'react'
import Navbar from "./Navbar";
import About from "./About";
import Home from "../containers/Home";
import Lessons from "../containers/Lessons";
import Lessonn from "../containers/Lesson";
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Main extends Component{
  render(){
    return(
      <Router>
      <React.Fragment>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/lessons" component={Lessons}/>
        <Route path="/lesson" component={Lesson}/>

      </React.Fragment>
      </Router>
    )
  }
}

export default Main;
