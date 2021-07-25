import React from "react";
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow,MDBCol, MDBBtn,
} from "mdb-react-ui-kit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
const PopularClasses = () => {
  return (
    <div>
    <Navbar2/>
    <div className="container">
      <div>
        <h2 className="my-2 pt-4">
          Learn how to cook rice spiced with fried shrimps
        </h2>
        <MDBCardImage
          src={process.env.PUBLIC_URL + "images/chef.svg"}
          alt="chef"
          className="d-inline"
        />
        <p className="d-inline ms-2">Chef Majekadegbe Fishly</p>
        <MDBCardImage
          src={process.env.PUBLIC_URL + "images/alarmclock.svg"}
          alt="alarm"
          className="d-inline ms-3"
        />
        <p className="d-inline mx-2">5min 4sec</p>
        <iframe
          width="1124"
          className="my-3"
          height="480"
          src="https://www.youtube.com/embed/XNYEQ9QlOBY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <MDBRow className="text-center pt-5 pb-5 text-black">
        <MDBCol size="md-6">
          <div className="text-start">
            <h4>About this Class</h4>
            <p className="mb-5">
              Bold. Delicious. And packed with flavor. Who doesn’t love
              enchiladas? In this fast-paced class, geared towards the beginner,
              you’ll learn the basics of making green chicken enchiladas with an
              array of traditional ingredients, using the time-honored (read:
              secret) techniques of the Mexican kitchen, from charring on a
              comal to frying sauces, on your way to making luscious,
              deep-flavored enchiladas.
            </p>
            <MDBRow>
            <h4>About the Tutor</h4>
              <MDBCol md="3">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/logo.jpg"}
                  className="rounded-circle"
                  fluid
                />
              </MDBCol>
              <MDBCol md="9">
                <div className="mt-2">
                  <h5>
                    <strong>Chef Majekadegbe Fishly</strong>
                  </h5>
                  <p>
                    <strong>Lagos, Nigeria</strong>
                  </p>
                  <p>
                    Olayemi Ibikunle has 2 years of experience in working in
                    five private schools across Nigeria. She earned a B.Ed and a
                    Masters in Teaching and Learning from Harvard University.
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
        <MDBCol size="md-1"></MDBCol>
        <MDBCol size="md-5">
          <MDBCard style={{ maxWidth: "1024px" }}>
            <MDBRow className="g-2">
              <MDBCol md="4">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/gelato.png"}
                  className="h-100"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <div className="text-start">
                  <p>
                    {" "}
                    <strong>
                      {" "}
                      How to make Gelato: Tips and recipes to make the Italian
                      treat{" "}
                    </strong>
                  </p>
                  <p> Chef Manchang Wuyep</p>
                  <p> 1hr 30min </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          <MDBCard style={{ maxWidth: "1024px" }} className="my-2">
            <MDBRow className="g-2">
              <MDBCol md="4">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/berbeque.JPG"}
                  className="h-100"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <div className="text-start">
                  <p>
                    {" "}
                    <strong>
                      {" "}
                      How to make Gelato: Tips and recipes to make the Italian
                      treat{" "}
                    </strong>
                  </p>
                  <p> Chef Manchang Wuyep</p>
                  <p> 1hr 30min </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          <MDBCard style={{ maxWidth: "1024px" }}>
            <MDBRow className="g-2">
              <MDBCol md="4">
                <MDBCardImage
                  src={process.env.PUBLIC_URL + "images/avacado.png"}
                  className="h-100"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <div className="text-start">
                  <p>
                    {" "}
                    <strong>
                      {" "}
                      How to make Gelato: Tips and recipes to make the Italian
                      treat{" "}
                    </strong>
                  </p>
                  <p> Chef Manchang Wuyep</p>
                  <p> 1hr 30min </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
    </div>
  );
};

export default PopularClasses;
