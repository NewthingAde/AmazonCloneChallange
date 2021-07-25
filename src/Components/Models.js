import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBNavbarLink,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function Models() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Firebase Signin
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  // Firebase registration

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it sucessfully create a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <MDBBtn color="warning" outline onClick={toggleShow}>
        Get Started
      </MDBBtn>
      <MDBModal
        show={basicModal}
        getOpenState={(e: any) => setBasicModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="ms-5">
                Sign up and start learning
              </MDBModalTitle>
              <MDBIcon
                className=" fa-times-circle"
                size="2x"
                onClick={toggleShow}
                fas
                color="danger"
              />
            </MDBModalHeader>
            <MDBModalBody className="mx-4">
              <form className=" w-auto">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
              <div className="d-flex">
                <MDBCheckbox name="flexCheck" value="" id="flexCheckChecked" />
                <p className="mb-5 text-start">
                  Yes, I want to get the most out of GlobalChef by receiving
                  emails with exclusive deals, personal recommendations and
                  learning tips.
                </p>
              </div>
            </MDBModalBody>

            <MDBBtn color="danger" onClick={register} className="mb-2 mx-4">
              Sign Up
            </MDBBtn>

            <p className="mb-5 mx-4">
              By signing up, you agree to our Terms of Use and Privacy Policy
            </p>
            <p className="text-center"> Or</p>

            <MDBBtn color="primary" onClick={toggleShow} className="mb-2 mx-4">
              Continue With Facebook
            </MDBBtn>

            <MDBBtn
              color="danger"
              onClick={toggleShow}
              className="mb-2 my-3 mx-4"
            >
              Continue With Google
            </MDBBtn>
            <hr></hr>

            <div className="d-flex flex-row justify-content-center">
              <div>
                Already have an account? <a href="#">Login</a>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
