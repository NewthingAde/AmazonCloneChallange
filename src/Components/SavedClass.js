import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Components/About";
import Classes from "../Components/Classes";
import Navbar2 from "../Components/Navbar2";

const SavedClass = () => {

    
  return (
    <div>
      <Navbar2 />
      <MDBRow className=" top-class pt-5 pb-5 text-black">
        <MDBCol size="md-3 bg-white">
          <div className="container">
            <MDBCardImage
              src={process.env.PUBLIC_URL + "images/philippe.png"}
              alt="phillipe"
              position="top"
              className="rounded-circle w-50 mt-3 d-block mx-auto"
            />
            <h5 className="text-center">Wendy Davies</h5>
            <p className="text-center">Lagos Nigeria</p>
            <div className="ms-5 my-3">
              <MDBCardImage
                src={process.env.PUBLIC_URL + "images/blackboard.svg"}
                alt="phillipe"
                className="d-inline"
              />
              <li className="nav-item d-inline mx-2">
                <Link to="/enrolled" className="nav-link  d-inline text-black">
                  Enrolled Classes
                </Link>
              </li>
            </div>
            <div className="ms-5 my-3">
              <MDBCardImage
                src={process.env.PUBLIC_URL + "images/save-icon.svg"}
                alt="phillipe"
                className="d-inline"
              />
              <li className="nav-item d-inline mx-2">
                <Link
                  to="/savedClasses"
                  className="nav-link d-inline text-danger"
                >
                  Saved Classes
                </Link>
              </li>
            </div>
            <div className="ms-5 my-3">
              <MDBCardImage
                src={process.env.PUBLIC_URL + "images/user.svg"}
                alt="phillipe"
                className="d-inline"
              />
              <li className="nav-item d-inline mx-2">
                <Link
                  to="/popularclasses"
                  className="nav-link d-inline text-black"
                >
                  Popular Classes
                </Link>
              </li>
            </div>
            <div className="ms-5 my-3">
              <MDBCardImage
                src={process.env.PUBLIC_URL + "images/settings.svg"}
                alt="phillipe"
                className="d-inline"
              />
              <li className="nav-item d-inline mx-2">
                <Link
                  to="/Linkedaccount"
                  className="nav-link d-inline text-black"
                >
                  Edit Profile
                </Link>
              </li>
            </div>
            <div className="ms-5 my-3">
              <MDBCardImage
                src={process.env.PUBLIC_URL + "images/logout.svg"}
                alt="phillipe"
                className="d-inline"
              />
              <li className="nav-item d-inline mx-2">
                <Link to="/Logout" className="nav-link d-inline text-black">
                  Sign Out
                </Link>
              </li>
            </div>
          </div>
        </MDBCol>

        <MDBCol size="md-9">
          <h1 className="ms-3 mb-3">Saved Classes</h1>
          <MDBRow className=" container text-black row-cols-md-3 g-4">
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/gelato.png"}
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <div>
                    {" "}
                    <span>300 Students</span>{" "}
                    <span className="float-end">1hr 40min</span>
                  </div>
                  <MDBCardText>
                    How to make Gelato: Tips and Recipes to make the Italian
                    treat
                  </MDBCardText>
                  <MDBCardText>Chef Manchang Wuyeng</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/berbeque.JPG"}
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <div>
                    {" "}
                    <span>300 Students</span>{" "}
                    <span className="float-end">1hr 40min</span>
                  </div>
                  <MDBCardText>
                    Master the art of grilling your barbeque like a chef
                  </MDBCardText>
                  <MDBCardText>Chef kola Ajisegiri</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/cookedrice.JPG"}
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <div>
                    {" "}
                    <span>300 Students</span>{" "}
                    <span className="float-end">1hr 40min</span>
                  </div>
                  <MDBCardText>
                    Learn how to cook rice spiced with fried shrimps
                  </MDBCardText>
                  <MDBCardText>Chef Michael Akpan</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default SavedClass;
