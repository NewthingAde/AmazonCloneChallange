import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import Icon from "./Icon"

const Carouselss = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className="container"> 
        <h2 className="text-center mt-4">Our Tutors</h2>
          <p>We provide world class chefs to take classes as well as guide learners on their journey through the world of food. Our tutors are fully certified chefs.</p>     
<Carousel className="" responsive={responsive}>
  <div>
  <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/luios.jpg'}
            alt='...'
            position='top'
          />
          <div className="text-center mx-auto">
            <h6 className='mt-2'>John Mane</h6>
             <p className='mb-0'>Sweden</p>
             <Icon/>
          </div>
        </MDBCard>
  </div>
  <div>
  <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/toa.jpg'}
            alt='...'
            position='top'
          />
          <div className="text-center mx-auto">
            <h6 className='mt-2'>Frank Tao</h6>
             <p className='mb-0'>New zealand</p>
             <Icon/>
          </div>
        </MDBCard>
  </div>
  <div>
  <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/john.jpg'}
            alt='...'
            position='top'
          />
          <div className="text-center mx-auto">
            <h6 className='mt-2'>ji shu</h6>
             <p className='mb-0'>China</p>
             <Icon/>
          </div>
        </MDBCard>
  </div>
        <div><MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/pro.jpg'}
            alt='...'
            position='top'
          />
          <div className="text-center mx-auto">
            <h6 className='mt-2'>Birgit Schreiner</h6>
             <p className='mb-0'>Germany</p>
             <Icon/>
          </div>
        </MDBCard>
        </div>
        <div><MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL + 'images/chef 5.png'}
            alt='...'
            position='top'
          />
          <div className="text-center mx-auto">
            <h6 className='mt-2'>Abioye Victor</h6>
             <p className='mb-0'>Nigeria</p>
             <Icon/>
          </div>
        </MDBCard>
        </div>
</Carousel>
        </div>
    );
}

export default Carouselss;

