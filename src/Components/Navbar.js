import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/logo-icon.png"
import Image2 from "../assets/images/shape/shape-8.png"
import Image3 from "../assets/images/shape/shape-23.png"
import Image4 from "../assets/images/shape/shape-5.png"
import Image5 from "../assets/images/shape/shape-6.png"
import Image6 from "../assets/images/shape/shape-24.png"
import Image7 from "../assets/images/author/author-11.jpg"
import "../Styles/Contact.css"
import '../Styles/flaticon.css'
function Navbar(props) {
    return (
        <>
            <div className="header-section">
                <div className="header-main">
                    <div className="container">
                        <div className="header-main-wrapper">
                            <div class="header-logo" style={{ display: 'flex' }}>
                                <a href="/" style={{ paddingLeft: '15px' }}><img src={Image1} width="50" height="50" alt="Logo" /></a>
                                <h2 style={{ paddingLeft: '10px', textTransform: 'capitalize' }}>edu<span style={{ color: 'green' }}>sphere</span></h2>
                            </div>
                            <div className="header-menu d-none d-lg-block">
                                <ul className="nav-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <a href="#">All Course</a>
                                        <ul className="sub-menu">
                                            <li><a href="courses">All Courses</a></li>
                                            <li><a href="MyCourses">My Courses</a></li>
                                            <li><a href="Coursedetails">Courses Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages </a>
                                        <ul className="sub-menu">
                                            <li><a href="about">About</a></li>
                                            <li><a href="register">Register</a></li>
                                            <li><a href="login">Login</a></li>
                                            <li><a href="faq">FAQ</a></li>
                                            <li><a href="404-error">404 Error</a></li>
                                            <li><a href="Afterenroll">After Enroll</a></li>
                                            <li><a href="CoursesAdmin">Instructor Dashboard (Course List)</a></li>
                                            <li><a href="createcourse">Create Course</a></li>
                                            <li><a href="createLesson">Create lesson</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="header-sign-in-up d-none d-lg-block">
                                <ul>
                                    <li><a className="sign-in" href="login">Sign In</a></li>
                                    <li><a className="sign-up" href="register">Sign Up</a></li>
                                </ul>
                            </div>
                            <div className="header-toggle d-lg-none">
                                <a className="menu-toggle" href="javascript:void(0)">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu">
                <a className="menu-close" href="javascript:void(0)">
                    <i className="icofont-close-line"></i>
                </a>
                <div className="mobile-top">
                    <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                    <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
                </div>
                <div className="mobile-sign-in-up">
                    <ul>
                        <li><a className="sign-in" href="login">Sign In</a></li>
                        <li><a className="sign-up" href="register">Sign Up</a></li>
                    </ul>
                </div>
                <div className="mobile-menu-items">
                    <ul className="nav-menu">
                        <li><a href="/">Home</a></li>
                        <li>
                            <a href="#">All Course</a>
                            <ul className="sub-menu">
                                <li><a href="courses">Courses</a></li>
                                <li><a href="Coursedetails">Courses Details</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pages </a>
                            <ul className="sub-menu">
                                <li><a href="about">About</a></li>
                                <li><a href="register">Register</a></li>
                                <li><a href="login">Login</a></li>
                                <li><a href="faq">FAQ</a></li>
                                <li><a href="404-error">404 Error</a></li>
                                <li><a href="after-enroll">After Enroll</a></li>
                                <li><a href="CoursesAdmin">Instructor Dashboard (Course List)</a></li>
                            </ul>
                        </li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
                <div className="mobile-social">
                    <ul className="social">
                        <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                        <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                        <li><a href="#"><i className="flaticon-skype"></i></a></li>
                        <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="overlay"></div>
            <div className="section page-banner">
                <img className="shape-1 animation-round" src={Image2} alt="Shape" />
                <img className="shape-2" src={Image3} alt="Shape" />
                <div className="container">
                    <div className="page-banner-content">
                        <ul className="breadcrumb" style={{ textTransform: 'capitalize' }}>
                            <li><a href="#">Home</a></li>
                            <li className="active" style={{ textTransform: 'capitalize' }}>{props.name3} </li>
                        </ul>
                        <h2 className="title" style={{ textTransform: 'capitalize' }}>{props.name} <span>{props.name2}</span></h2>
                    </div>
                </div>
                <div className="shape-icon-box">
                    <img className="icon-shape-1 animation-left" src={Image4} alt="Shape" />
                    <div className="box-content">
                        <div className="box-wrapper">
                            <i className="flaticon-badge"></i>
                        </div>
                    </div>
                    <img className="icon-shape-2" src={Image5} alt="Shape" />
                </div>
                <img className="shape-3" src={Image6} alt="Shape" />
                <img className="shape-author" src={Image7} alt="Shape" />
            </div>
        </>
    );
};
export default Navbar;
