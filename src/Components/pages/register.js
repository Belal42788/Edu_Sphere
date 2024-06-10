import React from "react";
import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from "../../assets/images/shape/shape-26.png";
import image2 from "../../assets/images/register-login.png";
import { useState } from "react";
import Advertise from "../advertise";
export default function Register() {
  const [Nameregister, setNameregister] = useState("");
  const [emailregister, setemailregister] = useState("");
  const [passwordregister, setPasswordregister] = useState("");
  const [confirmpasswordregister, setconfirmPasswordregister] = useState("");
  const handleChangeName = (e) => {
    const username = e.target.value;
    setNameregister(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setemailregister(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPasswordregister(password);
  };
  const onChangeconfirmPassword = (e) => {
    const confirmpassword = e.target.value;
    setconfirmPasswordregister(confirmpassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Nameregister", Nameregister);
    localStorage.setItem("emailregister", emailregister);
    localStorage.setItem("passwordregister", passwordregister);
    localStorage.setItem("confirmpasswordregister", confirmpasswordregister);
  };
  return (
    <div>
      <div>
        <Navbar name="Register" name2="form" name3="Register" />
      </div>
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
              <div class="col-lg-6">
                <div className="register-login-form">
                  <h3 className="title">
                    Registration <span>Now</span>
                  </h3>
                  <div className="form-wrapper">
                    <form action="#">
                      <div className="single-form">
                        <input
                          type="text"
                          onChange={handleChangeName}
                          placeholder="Name"
                        />
                      </div>
                      <div className="single-form">
                        <input
                          type="email"
                          onChange={onChangeEmail}
                          placeholder="Email"
                        />
                      </div>
                      <div className="single-form">
                        <input
                          type="password"
                          onChange={onChangePassword}
                          placeholder="Password"
                        />
                      </div>
                      <div className="single-form">
                        <input
                          type="password"
                          onChange={onChangeconfirmPassword}
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="single-form">
                        <button
                          className="btn btn-primary btn-hover-dark w-100"
                          onClick={handleSubmit}
                        >
                          Create an account
                        </button>
                        <a
                          className="btn btn-secondary btn-outline w-100"
                          href="#"
                        >
                          Sign up with Google
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
      <div>
        <Advertise />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
