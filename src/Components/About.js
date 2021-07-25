import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { BrowseRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBCardImage } from 'mdb-react-ui-kit';
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Navbars from "./navbar";

class About extends Component {
  render() {
    return (
      <div>
      <Navbars/>
        <div>
        <MDBCardImage src={process.env.PUBLIC_URL + 'images/contact.png'} alt='con' position='top' img-fluid/>
        </div>
        <div >
          <h1 className='text-center mt-5'>ABOUT HomeChef</h1>
          <p className="container text-start"> 
            HomeChef Academy is an EduTrust-certified institution that
            cultivates global chefs and F&B professionals in an environment of
            culinary authenticity. The Academy imparts skills and knowledge in
            East and West, Old World and New World cuisines, herbs and spices,
            innovation and technology. A synchronised study-apprenticeship
            rotation enable the students to expand their horizons beyond the
            classrooms, maximising their employability and preparedness for
            careers as global chefs and F&B professionals upon graduation. </p>

          <p className="container my-3 text-start"> Since 2007, HomeChef has been recognised by the SkillsFuture Singapore
            (SSG) as a CET Institute for Culinary and F&B Management. It has
            also signed degree articulation agreements with renowned educational
            institutions including Johnson & Wales University (America),
            International College of Hotel Management (Australia), George Brown
            College (Canada), Technological and Higher Education Institute of
            HongKong (Hong Kong), University of West London (United Kingdom).
            Students can choose from a range of degree and nationally-recognised
            diploma, higher certificate, advanced certificate, and continuing
            education modular programmes suitable for their level of experience
            and commitment. Students who are Singaporeans or Permanent Residents
            signing up for WSQ programmes receive up to 90% tuition subsidy.</p>
           
           <p className="container text-start"> With an international cadre of experienced faculty and staff,
            state-of-the-art facilities and strong industry partnerships,
            At-Sunrice celebrates the true craft of F&B industry and advances
            the culinary arts and F&B profession with integrity and meaning.
          </p>
        </div>
        <div className="text-center bg-warning pt-5 mt-3 pb-5">
            <h1 className='text-center mb-5'> OUR VISSION </h1>
            <p> Advancing Foodpreneurship, Culinary Arts and F&B Profession with Integrity and Meaning.</p>
            <h1 className='text-center mb-5'> OUR MISSION </h1>
            <p>We cultivate Foodpreneurs, global chefs and F&B professionals in a living environment of authenticity and disruptive collaboration.</p>
            <p className="my-5">We nurture skills and knowledge in East & West, Old World & New World cuisine, Herbs & Spices and Foodnovations driven by technology for Momentum effect.</p>
            <p>We nurture skills and knowledge in East & West, Old World & New World cuisine, Herbs & Spices and Foodnovations driven by technology for Momentum effect.</p>
            <p className="my-5">We create culinary products and sensory experiences for enrichment, education and enterprise.</p>
        </div>
      </div>
    );
  }
}

export default About;
