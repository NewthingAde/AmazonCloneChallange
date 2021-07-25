import React from 'react';
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption, MDBBtn } from 'mdb-react-ui-kit';
import Models2 from './Models2';
import PickGrocies from './PickGrocies';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function Carousels() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={process.env.PUBLIC_URL + 'images/vegetable1.jpg'} className = 'img-fluid' alt='bg' />
          <MDBCarouselCaption>
           <h1 className="text-white pt-0 pb-5">Cooking is fun! We will prove it to you</h1> 
          <MDBBtn color='danger' className=" d-flex mx-auto" ><Link to="/classes" className="text-white">Explore all Classes</Link></MDBBtn>
             <h2 className= "text-white my-5">Get unlimited access to the world of food</h2> 
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
        <MDBCarouselElement src={process.env.PUBLIC_URL + 'images/download.jpg'} className = 'img-fluid' alt='bg1' />
          <MDBCarouselCaption>
          {/* <h1 className="text-danger pt-0 pb-5">Home Cooking Made Simple</h1> */}
          <MDBBtn color='success' className=" d-flex mx-auto" ><Link to="/pickgrocies" className="text-white">Pick your Meal</Link></MDBBtn>
            {/* <h2 className= "text-danger my-5">Get unlimited access to the world of food</h2> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
        <MDBCarouselElement src={process.env.PUBLIC_URL + 'images/dd.jpg'} className = 'img-fluid' alt='bg2' />
          <MDBCarouselCaption>

          {/* <h1 className="text-white pt-0 pb-5">Cooking is fun! We will prove it to you</h1> */}
          <MDBBtn color='white' className=" mt-5 d-flex mx-auto" ><Link to="/enrolled" className="text-success">Enrol Now!</Link></MDBBtn>
            {/* <h2 className= "text-success  my-5">Get unlimited access to the world of food</h2> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}