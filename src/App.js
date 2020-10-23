import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './utility/NavBar/NavBar';
import Single from './pages/SingleFullVenue/Single';


class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path='/city/:cid' component={Single}></Route>
        <Route exact path='/activity/:aid' component={Single}></Route>
      </Router>
    )
  }

}

export default App;