import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import {BrowseRouter, BrowserRouter,BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbars from './Components/navbar'
import Cards from './Components/Cards'
import Carousels from './Components/Carousels'
import Carouselss from './Components/Carouselss'
import CardWhy from './Components/CardWhy'
import Thought from './Components/Thought'
import Craven from './Components/Craven'
import Testimony from './Components/Testimony'
import Footer from './Components/Footer'
import About from './Components/About'
import Enrolled from './Components/Enrolled'
import SavedClass from './Components/SavedClass';
import popularClasses from './Components/PopularClasses';
import PickGrocies from './Components/PickGrocies';
import Home from './Components/Home';
import Login from './Components/Login';
import Classes from './Components/Classes';
import PopularClasses from './Components/PopularClasses';
import { Link, useHistory } from 'react-router-dom'; 
import { auth } from './firebase'; 

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
              <Route path = '/' exact component = {Home}/>
              <Route path = '/about'component = {About}/>
              <Route path = '/classes'component = {Classes}/>
              <Route path = '/PickGrocies'component = {PickGrocies}/>
              <Route path = '/enrolled'component = {Enrolled}/>
              <Route path = '/savedClasses'component = {SavedClass}/>
              <Route path = '/popularClasses'component = {PopularClasses}/>
              <Route path = '/login'component = {Login}/>
        </Switch>
      </div>
      <Footer />
      </Router>
    );
  }
}

export default App;
