
import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import {BrowseRouter, BrowserRouter, BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Navbars from '../Components/navbar'
import Cards from '../Components/Cards'
import Carousels from '../Components/Carousels'
import Carouselss from '../Components/Carouselss'
import CardWhy from '../Components/CardWhy'
import Thought from '../Components/Thought'
import Craven from '../Components/Craven'
import Testimony from '../Components/Testimony'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Enrolled from '../Components/Enrolled'
import SavedClass from '../Components/SavedClass';
import PopularClasses from './PopularClasses';
import PickGrocies from '../Components/PickGrocies';
import Navbar2 from './Navbar2';






const Home = () => {
    return (
        <div>
          <Navbars/>
          <Carousels/>
          <CardWhy/>
          <Cards/>
          <Thought/>
          <Craven/>
          <Testimony/>
          <Carouselss/>
        </div>
    );
}

export default Home;
