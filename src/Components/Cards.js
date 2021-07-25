import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import'../index.css';
import Carousels from './Carousels'
import {Link} from "react-router-dom";


export default function Cards() {
  return (
  <div className="top-class pb-5">
    <div className="container  mb-5">
    <h1 className="text-center pt-3">TOP CLASSES</h1>
    <p>Your professional development has just gotten easier, affordable and exciting with our online courses. They are designed to equip you with 21st century teaching and learning skills.</p>
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/davide.png'}
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <div> <span>300 Students</span> <span className="float-end">1hr 40min</span></div>
            <MDBCardText>
            Serve your breakfast like a boss and have a diet on
            </MDBCardText>
            <MDBCardText>
            Chef Michael Akpan
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/gelato.png'}
            alt='...'
            position='top'
          />
             <MDBCardBody>
          <div> <span>300 Students</span> <span className="float-end">1hr 40min</span></div>
            <MDBCardText>
            How to make Gelato: Tips and Recipes to make the Italian treat
            </MDBCardText>
            <MDBCardText>
            Chef Manchang Wuyeng
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
          <div> <span>300 Students</span> <span className="float-end">1hr 40min</span></div>
            <MDBCardText>
            Master the art of grilling your barbeque like a chef
            </MDBCardText>
            <MDBCardText>
            Chef kola Ajisegiri
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/cookedrice.JPG'}
            alt='...'
            position='top'
          />
             <MDBCardBody>
          <div> <span>300 Students</span> <span className="float-end">1hr 40min</span></div>
            <MDBCardText>
            Learn how to cook rice spiced with fried shrimps
            </MDBCardText>
            <MDBCardText>
            Chef Michael Akpan
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBBtn color='danger' className=" mt-5 d-flex mx-auto" outline ><Link to="/popularClasses" className="nav-link text-danger">Explore all Classes</Link></MDBBtn>
    
    </div>
  </div>
    
  );
}