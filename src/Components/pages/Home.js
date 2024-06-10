import React from 'react'
import "../../Styles/Contact.css"
import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise"
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/animate.min.css'
import '../../Styles/plugins/swiper-bundle.min.css'
import '../../Styles/plugins/magnific-popup.css'
import '../../Styles/plugins/nice-select.css'
import '../../Styles/plugins/apexcharts.css'
import '../../Styles/plugins/jqvmap.min.css'
import Image1 from "../../assets/images/logo-icon.png"
import Image2 from "../../assets/images/shape/shape-8.png"
import Image3 from "../../assets/images/shape/shape-23.png"
import Image4 from "../../assets/images/shape/shape-5.png"
import Image5 from "../../assets/images/shape/shape-6.png"
import Image6 from "../../assets/images/shape/shape-24.png"
import Image7 from "../../assets/images/author/author-11.jpg"
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-03.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-05.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import author8 from "../../assets/images/author/author-08.jpg";
import author9 from "../../assets/images/author/author-09.jpg";
import author10 from "../../assets/images/author/author-10.jpg";
import courseImg1 from "../../assets/images/courses/courses-01.jpg";
import courseImg2 from "../../assets/images/courses/courses-02.jpg";
import courseImg3 from "../../assets/images/courses/courses-03.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";
import courseImg5 from "../../assets/images/courses/courses-05.jpg";
import courseImg6 from "../../assets/images/courses/courses-05.jpg";
import slider1 from "../../assets/images/slider/slider-1.png";
import shape1 from "../../assets/images/shape/shape-1.png"
import Shape2 from "../../assets/images/shape/shape-2.png"
import Shape3 from "../../assets/images/shape/shape-3.png"
import Shape4 from "../../assets/images/shape/shape-4.png"
import Shape5 from "../../assets/images/shape/shape-5.png"
import Shape6 from "../../assets/images/shape/shape-6.png"
import Shape7 from "../../assets/images/shape/shape-7.png"
import Shape8 from "../../assets/images/shape/shape-8.png"
import Shape9 from "../../assets/images/shape/shape-9.png"
import Shape10 from "../../assets/images/shape/shape-10.png"
import Shape11 from "../../assets/images/shape/shape-11.png"
import shape12 from "../../assets/images/shape/shape-12.png"
import Shape13 from "../../assets/images/shape/shape-13.png"
import shape14 from "../../assets/images/shape/shape-14.png"
import Shape15 from "../../assets/images/shape/shape-15.png"
import Shape16 from "../../assets/images/shape/shape-16.png"
import Shape17 from "../../assets/images/shape/shape-17.png"
import Shape18 from "../../assets/images/shape/shape-18.png"
function Home() {
    return (
        <>
            <div classNameName="header-section">
                <div classNameName="header-main">
                    <div classNameName="container">
                        <div classNameName="header-main-wrapper">
                            <div className="header-logo" style={{ display: 'flex' }}>
                                <a href="/" style={{ paddingLeft: '15px' }}><img src={Image1} width="50" height="50" alt="Logo" /></a>
                                <h2 style={{ paddingLeft: '10px', textTransform: 'capitalize' }}>edu<span style={{ color: 'green' }}>sphere</span></h2>
                            </div>
                            <div classNameName="header-menu d-none d-lg-block">
                                <ul classNameName="nav-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <a href="#">All Course</a>
                                        <ul classNameName="sub-menu">
                                            <li><a href="courses">All Courses</a></li>
                                            <li><a href="MyCourses">My Courses</a></li>
                                            <li><a href="Coursedetails">Courses Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages </a>
                                        <ul classNameName="sub-menu">
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
                            <div classNameName="header-sign-in-up d-none d-lg-block">
                                <ul>
                                    <li><a classNameName="sign-in" href="login">Sign In</a></li>
                                    <li><a classNameName="sign-up" href="register">Sign Up</a></li>
                                </ul>
                            </div>
                            <div classNameName="header-toggle d-lg-none">
                                <a classNameName="menu-toggle" href="javascript:void(0)">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classNameName="mobile-menu">
                <a classNameName="menu-close" href="javascript:void(0)">
                    <i classNameName="icofont-close-line"></i>
                </a>
                <div classNameName="mobile-top">
                    <p><i classNameName="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                    <p><i classNameName="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
                </div>
                <div classNameName="mobile-sign-in-up">
                    <ul>
                        <li><a classNameName="sign-in" href="login">Sign In</a></li>
                        <li><a classNameName="sign-up" href="register">Sign Up</a></li>
                    </ul>
                </div>
                <div classNameName="mobile-menu-items">
                    <ul classNameName="nav-menu">
                        <li><a href="/">Home</a></li>
                        <li>
                            <a href="#">All Course</a>
                            <ul classNameName="sub-menu">
                                <li><a href="courses">Courses</a></li>
                                <li><a href="courses-details">Courses Details</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pages </a>
                            <ul classNameName="sub-menu">
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
                <div classNameName="mobile-social">
                    <ul classNameName="social">
                        <li><a href="#"><i classNameName="flaticon-facebook"></i></a></li>
                        <li><a href="#"><i classNameName="flaticon-twitter"></i></a></li>
                        <li><a href="#"><i classNameName="flaticon-skype"></i></a></li>
                        <li><a href="#"><i classNameName="flaticon-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="section slider-section">
                <div className="slider-shape">
                    <img className="shape-1 animation-round" src={Shape8} alt="Shape" />
                </div>
                <div className="container">
                    <div className="slider-content">
                        <h4 className="sub-title">Start your favourite course</h4>
                        <h2 className="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2>
                        <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                        <a className="btn btn-primary btn-hover-dark" href="#">Start A Course</a>
                    </div>
                </div>
                <div className="slider-courses-box">
                    <img className="shape-1 animation-left" src={Shape5} alt="Shape" />
                </div>
                <div className="slider-rating-box">
                    <div className="box-rating">
                        <div className="box-wrapper">
                            <span className="count">4.8 <i className="flaticon-star"></i></span>
                            <p>Rating (86K)</p>
                        </div>
                    </div>
                    <img className="shape animation-up" src={Shape7} alt="Shape" />
                </div>
                <div className="slider-images">
                    <div className="images">
                        <img src={slider1} alt="Slider" />
                    </div>
                </div>
                <div className="slider-video">
                    <img className="shape-1" src={Shape9} alt="Shape" />
                    <div className="video-play">
                        <img src={Shape10} alt="Shape" />
                        <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" className="play video-popup"><i className="flaticon-play"></i></a>
                    </div>
                </div>
            </div>
            <div className="section section-padding-02">
                <div className="container">
                    <div className="courses-top">
                        <div className="section-title shape-01">
                            <h2 className="main-title">Most popular <span>Courses</span> of EduSphere</h2>
                        </div>
                    </div>
                    <div className="tab-content courses-tab-content">
                        <div className="tab-pane fade show active" id="tabs1">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs2">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs3">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs4">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs5">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs6">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs7">
                            <div className="courses-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg4} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author1} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$385.00</span>
                                                        <span className="old-parice">$440.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg2} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author2} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Pamela Foster</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$420.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg6} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author3} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Rose Simmons</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Science</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$295.00</span>
                                                        <span className="old-parice">$340.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg5} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author4} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Finance</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">Free</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg1} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author5} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$136.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-courses">
                                            <div className="courses-images">
                                                <a href="Coursedetails"><img src={courseImg3} alt="Courses" /></a>
                                            </div>
                                            <div className="courses-content">
                                                <div className="courses-author">
                                                    <div className="author">
                                                        <div className="author-thumb">
                                                            <a href="#"><img src={author6} alt="Author" /></a>
                                                        </div>
                                                        <div className="author-name">
                                                            <a className="name" href="#">Jason Williams</a>
                                                        </div>
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">Design</a>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="Coursedetails">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                                <div className="courses-meta">
                                                    <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                    <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                                </div>
                                                <div className="courses-price-review">
                                                    <div className="courses-price">
                                                        <span className="sale-parice">$237.00</span>
                                                    </div>
                                                    <div className="courses-review">
                                                        <span className="rating-count">4.9</span>
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="courses-btn text-center">
                        <a href="courses" className="btn btn-secondary btn-hover-primary">Other Course</a>
                    </div>
                </div>
            </div>
            <div className="section section-padding-02">
                <div className="container">
                    <div className="call-to-action-wrapper">
                        <img className="cat-shape-01 animation-round" src={shape12} alt="Shape" />
                        <img className="cat-shape-02" src={Shape13} alt="Shape" />
                        <img className="cat-shape-03 animation-round" src={shape12} alt="Shape" />
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="section-title shape-02">
                                    <h5 className="sub-title">Become A Instructor</h5>
                                    <h2 className="main-title">You can join with EduSphere as <span>a instructor?</span></h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="call-to-action-btn">
                                    <a className="btn btn-primary btn-hover-dark" href="contact">Drop Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-padding mt-n1">
                <div className="container">
                    <div className="section-title shape-03 text-center">
                        <h5 className="sub-title">Over 1,235+ Course</h5>
                        <h2 className="main-title">How It <span> Work?</span></h2>
                    </div>
                    <div className="how-it-work-wrapper">
                        <div className="single-work">
                            <img className="shape-1" src={Shape15} alt="Shape" />
                            <div className="work-icon">
                                <i className="flaticon-transparency"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Find Your Course</h3>
                                <p>It has survived not only centurie also leap into electronic.</p>
                            </div>
                        </div>
                        <div className="work-arrow">
                            <img className="arrow" src={Shape17} alt="Shape" />
                        </div>
                        <div className="single-work">
                            <img className="shape-2" src={Shape15} alt="Shape" />
                            <div className="work-icon">
                                <i className="flaticon-forms"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Book A Seat</h3>
                                <p>It has survived not only centurie also leap into electronic.</p>
                            </div>
                        </div>
                        <div className="work-arrow">
                            <img className="arrow" src={Shape17} alt="Shape" />
                        </div>
                        <div className="single-work">
                            <img className="shape-3" src={Shape16} alt="Shape" />
                            <div className="work-icon">
                                <i className="flaticon-badge"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Get Certificate</h3>
                                <p>It has survived not only centurie also leap into electronic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-padding-02 mt-n1">
                <div className="container">
                    <div className="section-title shape-03 text-center">
                        <h5 className="sub-title">Student Testimonial</h5>
                        <h2 className="main-title">Feedback From <span> Student</span></h2>
                    </div>
                    <div className="testimonial-wrapper testimonial-active">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="single-testimonial swiper-slide">
                                    <div className="testimonial-author">
                                        <div className="author-thumb">
                                            <img src={author6} alt="Author" />
                                            <i className="icofont-quote-left"></i>
                                        </div>
                                        <span className="rating-star">
                                            <span className="rating-bar" style={{ width: '80' }}></span>
                                        </span>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                        <h4 className="name">Sara Alexander</h4>
                                        <span className="designation">Product Designer, USA</span>
                                    </div>
                                </div>
                                <div className="single-testimonial swiper-slide">
                                    <div className="testimonial-author">
                                        <div className="author-thumb">
                                            <img src={author7} alt="Author" />
                                            <i className="icofont-quote-left"></i>
                                        </div>
                                        <span className="rating-star">
                                            <span className="rating-bar" style={{ width: '80' }}></span>
                                        </span>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                        <h4 className="name">Melissa Roberts</h4>
                                        <span className="designation">Product Designer, USA</span>
                                    </div>
                                </div>
                                <div className="single-testimonial swiper-slide">
                                    <div className="testimonial-author">
                                        <div className="author-thumb">
                                            <img src={author7} alt="Author" />
                                            <i className="icofont-quote-left"></i>
                                        </div>
                                        <span className="rating-star">
                                            <span className="rating-bar" style={{ width: '80' }}></span>
                                        </span>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                        <h4 className="name">Sara Alexander</h4>
                                        <span className="designation">Product Designer, USA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Advertise /></div>
            <div><Footer /></div>
        </>
    )
}
export default Home;