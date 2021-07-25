import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBCardImage, MDBNavbarToggler,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBIcon,
MDBCollapse,MDBBtn} from 'mdb-react-ui-kit';
import Models from './Models'
import Models2 from './Models2'
import About from './About'
import Classes from '../Components/Classes';
import Home from './Home';



export default function Navbar2() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
      
        
      <div>
        <nav className="navbar navbar-expand-lg  bg-dark">
          <MDBNavbarBrand>    <Link to="/" className="ms-5"><img src={process.env.PUBLIC_URL + 'images/glologo.png'} alt="logo" width="30px"  /><span className = "text-danger"><b>HOME</b></span><span className= "text-warning"><b>Chef</b></span></Link></MDBNavbarBrand>
        <MDBNavbarToggler aria-expanded='false' aria-label='Toggle navigation' onClick={() => setShowNavSecond(!showNavSecond)}>
        <MDBIcon icon='bars' fas color='danger' />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <ul className="navbar-nav mx-auto">       
            <li className="nav-item mx-2"> <Link to="/" className="home nav-link text-white">Home</Link></li>
            <li className="nav-item mx-2"> <Link to="/about" className="nav-link text-white">About Us</Link></li>
            <li className="nav-item mx-2"><Link to="/classes" className="nav-link text-white ">Classes</Link></li>
            <li className="nav-item mx-2"><Link to="/contact" className="nav-link text-white">Contact Us</Link></li>
          </ul>
          <MDBCardImage src={process.env.PUBLIC_URL + 'images/philippe.png'}
                                    alt='phillipe' width="55px" className='rounded-circle me-5' />
            </MDBCollapse>
        </nav>
      </div>
    
       
  );
}
