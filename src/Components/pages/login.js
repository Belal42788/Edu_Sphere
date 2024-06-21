import "../../Styles/Contact.css"
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from '../../assets/images/shape/shape-26.png'
import image2 from '../../assets/images/register-login.png'
import Advertise from "../advertise"
import React, { useRef, useState, useEffect } from 'react';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHeader from "../AdminHeader";

export default function Login() {
  const navigate = useNavigate();
    const userRef = useRef();

  const [emaillogin, setemaillogin] = useState("");
  const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

  const [passwordlogin, setPasswordlogin] = useState("");
  const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
  
  const [errMsg, setErrMsg] = useState(false);
  
    const onChangeEmaillogin = (e) => {
      const email = e.target.value;
      setemaillogin(email);
    };
  
    const onChangePasswordlogin = (e) => {
      const password = e.target.value;
      setPasswordlogin(password);
    };
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        const result = emaillogin.length > 0;
        setValidEmail(result);
    }, [emaillogin])
  
  useEffect(() => {
        const result = passwordlogin.length > 0 ;
        setValidPwd(result);
  }, [passwordlogin])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const loginData = {
        Email: emaillogin,
        Password: passwordlogin
      };

      try {
        const response = await axios.post('https://localhost:7225/api/User/Login', loginData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const token = response.data.token;
        const userName = response.data.firstName + " " + response.data.lastName;
        localStorage.setItem('UserToken', token);
        localStorage.setItem('Email', response.data.email);
        localStorage.setItem('UserName',userName);
        localStorage.setItem('Image', response.data.image);
        console.log(userName);
        console.log('Login successful', response.data);
        if (emaillogin === 'abdelrahmanezzateid@gmail.com') {
          navigate("/Admin");
          alert('Wellcome admin');
        }
        alert('Registration successful');
        navigate("/");
      } catch (error) {
        setErrMsg(true);
        console.error('Error logging in', error);
      }
    };

    return (
      <div>
        <div><Navbar name='Login' name2='form' name3='Login' /></div>
        <div className="section section-padding">
          <div className="container">
            <div className="register-login-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="register-login-images">
                    <div className="shape-1">
                      <img src={image} alt="Shape" />
                    </div>
                    <div className="images">
                      <img src={image2} alt="Register Login" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="register-login-form">
                    <h3 className="title">Login <span>Now</span></h3>
                    <div className="form-wrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="single-form">
                          <input
                            type="email"
                            onChange={onChangeEmaillogin}
                            placeholder="Email"
                            value={emaillogin}
                            ref={userRef} 
                            autoComplete="off"
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => {setEmailFocus(true); setErrMsg(false)}}
                            onBlur={() => setEmailFocus(false)}
                          />
                        </div>
                        <div className="single-form">
                          <input
                            type="password"
                            onChange={onChangePasswordlogin}
                            placeholder="Password"
                            value={passwordlogin}
                            ref={userRef} 
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => { setPwdFocus(true); setErrMsg(false) }}
                            onBlur={() => setPwdFocus(false)}
                          />
                        </div>
                        <div className="single-form">
                          <p id="uidnote" className={errMsg ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Invalid Email or Password.<br />
                          </p>
                          <button className="btn btn-primary btn-hover-dark w-100" type="submit"
                          disabled={!validPwd || !validEmail ? true : false}
                          >
                            Login
                          </button>
                          <a className="btn btn-secondary btn-outline w-100" href="#">
                            Login with Google
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div><Advertise /></div>
        <div><Footer /></div>
      </div>
    );
}
