import React from 'react'
import "../../Styles/Contact.css"
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from '../../assets/images/shape/shape-26.png'
import image2 from '../../assets/images/register-login.png'
import Advertise from "../advertise"
import { useState } from 'react';
export default function Login() {
    const [emaillogin, setemaillogin] = useState("");
    const [passwordlogin, setPasswordlogin] = useState("");
    const onChangeEmaillogin = (e) => {
        const email = e.target.value;
        setemaillogin(email);
    };
    const onChangePasswordlogin = (e) => {
        const password = e.target.value;
        setPasswordlogin(password);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const emails = emaillogin.trim() === localStorage.getItem("emailregister");
        const Passwords = passwordlogin.trim() === localStorage.getItem("passwordregister");
        const fin = (emaillogin && passwordlogin)
        if (fin) console.log("fin")
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
                                        <form action="#">
                                            <div className="single-form">
                                                <input type="email" onChange={onChangeEmaillogin} placeholder="Username or Email" />
                                            </div>
                                            <div className="single-form">
                                                <input type="password" onChange={onChangePasswordlogin} placeholder="Password" />
                                            </div>
                                            <div className="single-form">
                                                <button className="btn btn-primary btn-hover-dark w-100" onClick={handleSubmit}>Login</button>
                                                <a className="btn btn-secondary btn-outline w-100" href="#">Login with Google</a>
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
    )
}
