import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBIcon,
MDBCollapse,MDBBtn} from 'mdb-react-ui-kit';
import Models from './Models'
import Models2 from './Models2'
import About from './About'
import Classes from '../Components/Classes';
import Login from '../Components/Login';
import Home from './Home';
import { auth } from '../firebase'; 
import { useStateValue } from '../StateProvider';



export default function Navbars() {
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }

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
            {/* <form className='w-25 d-flex'>
              <div className="mx-2"><Models/></div>
              <Models2/>
            </form> */}

            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication}>
                <MDBBtn color="danger"  className="mb-2 mx-5">
                {user? user?.email: "Get Started"}
              </MDBBtn> 
                </div>
                </Link>



             {/* <MDBBtn color="danger"  className="mb-2 mx-5">
                Get Started
              </MDBBtn>  */}
            </MDBCollapse>
        </nav>
      </div>
    
       
  );
}
