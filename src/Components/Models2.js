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
import { useStateValue } from '../StateProvider';



export default function Models() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }

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

{/* 
<Link to={!user && '/'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className="option_line1">
                        Hello, {user? user?.email: "Guest"}
                    </span>
                    <span className="option_line2">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link> */}


      <MDBBtn color="danger" onClick={toggleShow}>
        Sign In
      </MDBBtn>
      <MDBModal
        show={basicModal}
        getOpenState={(e: any) => setBasicModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="ms-5">Welcome Back!</MDBModalTitle>
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
                <div className="my-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              <MDBBtn color="danger" onClick={signin} className="mb-2 mx-4">
                Sign In
              </MDBBtn>
            </MDBModalBody>

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
                {" "}
                No account yet? <a href="#">Sign Up</a>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
