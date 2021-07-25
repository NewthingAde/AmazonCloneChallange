import React from 'react';
import { MDBCard, MDBCardImage, MDBNavbarNav, MDBNavbarItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,
MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn,MDBDropdownItem,MDBDropdownLink } from 'mdb-react-ui-kit';
import'../index.css';
import Carousels from './Carousels'
import {Link} from "react-router-dom";

export default function Craven() {
  return (
  <div className="Craven pb-5">
    <div className="container  mb-5">
    <h1 className="text-center pt-5 mb-3 ">WHAT’S ON YOUR MENU</h1>
    <div className="text-center d-block w-auto mb-3"> 
          </div>   
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/avacado.png'}
            alt='...' position='top'/>
          <MDBCardBody>
             <h6>Nigerian Chicken</h6>
            <MDBCardText>
            With vegetable and chips
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/sigmund.jpg'}
            alt='...'
            position='top'/>
             <MDBCardBody>
             <h6>Korean cookedrice</h6>
            <MDBCardText>
            With vegetable and chips
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/berbeque.JPG'}
            alt='...'
            position='top'
          />
             <MDBCardBody>
             <h6>Korean cookedrice</h6>
            <MDBCardText>
            With vegetable and chips
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/cookedrice.JPG'}
            alt='...' position='top'/>
             <MDBCardBody>
             <h6>Korean cookedrice</h6>
            <MDBCardText>
            With vegetable and chips
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBBtn color='danger' className=" mt-5 d-flex mx-auto" ><Link to="/pickGrocies" className="text-white">Pick your Meal</Link></MDBBtn>

           
    </div>
  </div>
    
  );
}