import React from "react";
import { MDBCard,MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBIcon,
    MDBCollapse, MDBCardBody, MDBCardTitle, MDBCardText, MDBNavbarBrand, MDBRow, MDBCol, MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="text-start bg-black">
      <MDBRow className=" pt-5 pb-5 text-white">
      <MDBCol size="md-2"></MDBCol>
        <MDBCol size="md-4">
          <div>
          <Link to="/">   <MDBNavbarBrand href="#Home" className="ms-5">
              <h4>
                <span className="text-danger">
                  <b>HOME</b>
                </span>
                <span className="text-warning">
                  <b>Chef</b>
                </span>
              </h4>
            </MDBNavbarBrand>   </Link> 
            <p>
              Core values are the fundamental beliefs of a person or
              organization. The core values are the guiding principles that
              dictate the services we provide to our partners and students.
              Global chef provides the best information about food.
            </p>
            <div className="text-center"> <Icon/></div>
          </div>
        </MDBCol>
        <MDBCol size="md-4">
          <div>
            <h5 className="text-white">Contact Us</h5>
            <p>No 12, Fola Jinadu Street, Gbagada , Lagos</p>
            <p>Support: +2348089143428</p>
            <p>Email: info@globalchef.com.ng</p>
            <form className='d-flex input-group w-50'>
          <input type='search' className='form-control w-50' placeholder='Enter Email' aria-label='Search' />
          <MDBBtn color='danger'>Select</MDBBtn>
        </form>
            
          </div>
        </MDBCol>
        <MDBCol size="md-1">
            <div>
            <ul className="navbar-nav mx-auto">       
            <li className="nav-item mx-2"> <Link to="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item mx-2"> <Link to="/about" className="nav-link text-white">About Us</Link></li>
            <li className="nav-item mx-2"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
          </ul>
            </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Footer;
