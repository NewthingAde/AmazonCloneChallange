import'../index.css';
import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


const Testimony = () => {
    return (
        <div className="bg-warning mb-3 text-center">
            <h1 className="text-white pt-5">WHAT OUR CUSTOMERS HAVE TO SAY</h1>
                <MDBRow className="text-center pt-5 pb-5 text-white">
                    <MDBCol size="md-3">
                        <div>
                        <MDBCardImage className="a mx-auto d-block" src={process.env.PUBLIC_URL + 'images/Ellipse.png'}
                            alt='...' position='top'/>
                        <h6>Tobi JoHnson</h6>
                        <p>The slaw... omg, the slaw!</p>
                        </div>
                    </MDBCol>
                    <MDBCol size="md-3">
                        <div>
                        <MDBCardImage className="a mx-auto d-block" src={process.env.PUBLIC_URL + 'images/Ellipse.png'}
                            alt='...' position='top'/>
                        <h6>David Toplan</h6>
                        <p>I have tried every boxed meal kit. Home Chef is by FAR the best quality products. This is the best chicken I have ever tasted.</p>
                        </div>
                    </MDBCol>
                    <MDBCol size="md-3">
                        <div>
                        <MDBCardImage className="a mx-auto d-block" src={process.env.PUBLIC_URL + 'images/Ellipse.png'}
                            alt='...' position='top'/>
                        <h6>Abioye Victor</h6>
                        <p>This was delicious and these meals make cooking healthy options for the family so easy. A+ to Home Chef every time!</p>
                        </div>
                    </MDBCol>
                    <MDBCol size="md-3">
                        <div>
                        <MDBCardImage className="a mx-auto d-block" src={process.env.PUBLIC_URL + 'images/Ellipse.png'}
                            alt='...' position='top'/>
                        <h6>Jane Daniels</h6>
                        <p>This meal was perfect for our date night in. We paired it with a nice red wine and we felt like we were at a five star restaurant.</p>
                        </div>
                    </MDBCol>


                </MDBRow>
        </div>
    );
}

export default Testimony;
