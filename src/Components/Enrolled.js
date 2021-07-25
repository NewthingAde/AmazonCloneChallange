import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About  from '../Components/About'
import Classes  from '../Components/Classes'
import Navbar2  from '../Components/Navbar2'

const Enrolled = () => {
    return (
        <div>
             <Navbar2/>
            <MDBRow className=" top-class pt-5 pb-5 text-black">
                <MDBCol size="md-3 bg-white">           
                    <div className='container'>
                    <MDBCardImage src={process.env.PUBLIC_URL + 'images/philippe.png'}
                                    alt='phillipe' position='top' className='rounded-circle w-50 mt-3 d-block mx-auto'/>
                                    <h5 className='text-center'>Wendy Davies</h5>
                                    <p className='text-center'>Lagos Nigeria</p>
                                <div className="ms-5 my-3">
                                    <MDBCardImage src={process.env.PUBLIC_URL + 'images/blackboard.svg'}alt='phillipe' className="d-inline"/>
                                    <li className="nav-item d-inline mx-2"><Link to="/enrolled" className="nav-link  d-inline text-danger">Enrolled Classes</Link></li>
                                 </div>
                            <div className="ms-5 my-3">
                                <MDBCardImage src={process.env.PUBLIC_URL + 'images/save-icon.svg'} alt='phillipe' className="d-inline"/>
                                <li className="nav-item d-inline mx-2"><Link to="/savedClasses" className="nav-link d-inline text-black">Saved Classes</Link></li>
                            </div>
                            <div className="ms-5 my-3">
                                <MDBCardImage src={process.env.PUBLIC_URL + 'images/user.svg'} alt='phillipe' className="d-inline"/>
                                <li className="nav-item d-inline mx-2"><Link to="/popularClasses" className="nav-link d-inline text-black">Popular Classes</Link></li>
                            </div>
                            <div className="ms-5 my-3">
                                <MDBCardImage src={process.env.PUBLIC_URL + 'images/settings.svg'} alt='phillipe' className="d-inline"/>
                                <li className="nav-item d-inline mx-2"><Link to="/Linkedaccount" className="nav-link d-inline text-black">Linked accounts</Link></li>
                            </div>
                            <div className="ms-5 my-3">
                                <MDBCardImage src={process.env.PUBLIC_URL + 'images/logout.svg'} alt='phillipe' className="d-inline"/>
                                <li className="nav-item d-inline mx-2"><Link to="/Logout" className="nav-link d-inline text-black">Sign Out</Link></li>
                            </div>       
                    </div>
                </MDBCol>
                     
                <MDBCol size="md-7 container">
                        <h1 className='ms-3 mb-3'>Enrolled</h1>
                        <MDBCard style={{ maxWidth: '2560px' }}>
                        <MDBRow className='g-5'>
                        <MDBCol md='4'>
                        <MDBCardImage src={process.env.PUBLIC_URL + 'images/gelato.png'} fluid/>
                        </MDBCol>
                        <MDBCol md='6'>
                        <div className="card-body">
                            <h5> <strong> How to make Gelato: Tips and recipes to make the Italian treat </strong></h5>
                            <p className="card-text mb-3"> Chef Manchang Wuyep</p>
                            <p className="text-start d-inline "> 1hr 30min </p> 
                            <p className=" text-danger d-inline mx-5"> <strong>Remove</strong>
                            <p className="text-danger d-inline "> <strong className='mx-3'>View</strong> </p></p>
                        </div>
                    
                </MDBCol>
                    </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </div>
    );
}

export default Enrolled;
