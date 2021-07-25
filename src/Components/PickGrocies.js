import React from 'react';
import { MDBCard, MDBCardImage, MDBNavbarNav, MDBNavbarItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,
MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn,MDBDropdownItem,MDBDropdownLink } from 'mdb-react-ui-kit';
import'../index.css';
import Carousels from './Carousels'
import Navbars from './navbar'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function PickGrocies() {
  return (
  <div className="Craven pb-5">
   <Navbars/>
    <div className="container  mb-5">
    <h1 className="text-center pt-5 mb-3 ">Pick Your Meal</h1>
    <div className="text-center d-block w-auto mb-3"> 
                <h6>Never underestimate the health wonders of good Meal</h6>     
          </div>
           
    <MDBRow className='row-cols-1 text-black row-cols-md-4 g-4'>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow className='row-cols-1 text-black row-cols-md-4 g-4'>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow className='row-cols-1 text-black row-cols-md-4 g-4'>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow className='row-cols-1 text-black row-cols-md-4 g-4'>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
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
            <MDBBtn color='success' className=" mt-5 d-flex mx-auto" >Choose</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>


           
    </div>
  </div>
    
  );
}