import'../index.css';
import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


const Thought = () => {
    return (
        <div className="bg-danger mb-3 text-center">
            <h1 className="text-white pt-5">Thoughts About Our Work</h1>
                <MDBRow className="text-center pt-5 pb-5 text-white">
                    <MDBCol size="md-3">
                        <div>
                        <h1>30+</h1>
                        <h6>Weekly Choices</h6>
                        <p>Using Customize It†</p>
                        </div>
                    </MDBCol>
                    <MDBCol size="md-3">
                        <div>
                        <h1>#1</h1>
                        <h6>in Customer Service*</h6>
                        <p>* Source: US Grocery Benchmark Study, April 2020, Market Force Information, Inc.</p>
                        </div>
                    </MDBCol>
                    <MDBCol size="md-3">
                        <div>
                        <h1>4M+</h1>
                        <h6>5-star reviews*</h6>
                        <p>* Home Chef data 2014 - 2020</p>
                        </div>
                    </MDBCol>
                    <MDBCol size="md-3">
                        <div>
                        <h1>200M+</h1>
                        <h6>Meals served*</h6>
                        <p>* Home Chef Internal Report</p>
                        </div>
                    </MDBCol>


                </MDBRow>
        </div>
    );
}

export default Thought;
