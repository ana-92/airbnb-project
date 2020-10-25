import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './utility/NavBar/NavBar';
import CityVenues from './pages/CityVenues/CitiVenues';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Modal from './utility/Modal/Modal';
import Search from './pages/Search/Search';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/city/:cityName" component={CityVenues} />
        <Route exact path="/venue/:id" component={SingleFullVenue}></Route>
        <Route path="/" component={Modal}></Route>
        <Route path="/search/:searchTerm" component={Search} />
      </Router>
    )
  }

}

export default App;