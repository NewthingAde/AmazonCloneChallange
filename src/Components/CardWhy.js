import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import "../index.css"
export default function CardWhy() {
  return (
            <div className="container">
            <h1 className="text-center pb-5 pt-5 mb-5">Why choose Home Chef?</h1>
    <MDBRow className="pb-5">
      <MDBCol size="md" className='h-100'>
          <MDBCardImage className="a mx-auto d-block" src={process.env.PUBLIC_URL + 'images/img1.svg'}
            alt='...'
            position='top'
          />
          <div>
            <h3 className="text-danger text-center">Wide Variety of food</h3>
            <p className="text-center">
            Get free access to unlimited food tutorials and get to enjoy the beauty of cooking.
            </p>
          </div>
        </MDBCol>

        <MDBCol size='md' className='h-100'>
          <MDBCardImage className="a mx-auto d-block" src={process.env.PUBLIC_URL + 'images/pizza.svg'}
            alt='...'
            position='top'
          />
          <div>
            <h3 className="text-danger text-center">Seasoned Chefs</h3>
            <p className="text-center">
            Learn the tricks and tips from top chefs all over the world and impress your friends at home
            </p>
          </div>
        </MDBCol>
        <MDBCol size="md" className='h-100'>
          <MDBCardImage src={process.env.PUBLIC_URL + 'images/pizza (1).svg'} className="a mx-auto d-block"
            alt='...'
            position='top'
          />
          <div>
            <h3 className="text-danger text-center">Meet and Share</h3>
            <p className="text-center">
            Access good job opportunities in our partner schools.
            </p>
          </div>
        </MDBCol>
    </MDBRow>
            </div>
  );
}