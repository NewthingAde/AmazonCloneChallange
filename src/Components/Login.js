import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'; 
import { auth } from '../firebase'; 

function Login() {
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
         // Firebase Signin
        const signin = e=> {
            e.preventDefault();
            auth.signInWithEmailAndPassword(email, password).then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
        }

         // Firebase registration

        const register = e=> {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(email, password).then((auth) => {
                //it sucessfully create a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        } 

    return (
        <div className="login">
            <Link to="/">
            <img className="login__image mt-3"
                src={process.env.PUBLIC_URL + 'images/glologo.png'}/>
            </Link>
            <div className="logincontainer my-4">
                <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange= {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password"  value={password} onChange= {e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signin} className="login_signin">Sign In</button> 
            </form>
            <p>
            Yes, I want to get the most out of GlobalChef by receiving
                  emails with exclusive deals, personal recommendations and
                  learning tips.
            </p>
            <button type='submit' onClick={register} className=" btn btn-danger ">Get Started</button> 
            </div>
        </div>
    )}

export default Login
