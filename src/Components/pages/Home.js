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
import Image7 from "../../assets/images/author/author-06.jpg"
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-17.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-20.jpg";
import author6 from "../../assets/images/author/author-19.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import author8 from "../../assets/images/author/author-06.jpg";
import author9 from "../../assets/images/author/author-01.jpg";
import author10 from "../../assets/images/author/author-01.jpg";
import courseImg9 from "../../assets/images/courses/courses-09.jpg";
import courseImg1 from "../../assets/images/courses/courses-01.jpg";
import courseImg2 from "../../assets/images/courses/courses-02.jpg";
import courseImg3 from "../../assets/images/courses/courses-03.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";
import courseImg5 from "../../assets/images/courses/courses-07.jpg";
import courseImg6 from "../../assets/images/courses/courses-05.jpg";
import courseImg8 from "../../assets/images/courses/courses-08.jpg";
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
    const coursesinf = [
        {
            id: 1,
            title: 'Data Science and Machine Learning with Python - Hands On!',
            instructor: 'Jason Williams',
            duration: '8 hr 15 mins',
            ImageUlrcourses: courseImg1,
            ImageUlrinstr: author1,
            tag: 'Science',
            lectures: '29 Lectures',
            salePrice: '$385.00',
            oldPrice: '$440.00',
            ratingCount: '4.9',
            ratingBar: '80%'
        },
        {
            id: 2,
            title: 'Create Amazing Color Schemes for Your UX Design Projects',
            instructor: 'Pamela Foster',
            duration: '8 hr 15 mins',
            ImageUlrcourses: courseImg2,
            ImageUlrinstr: author2,
            tag: 'Science',
            lectures: '29 Lectures',
            salePrice: '$420.00',
            oldPrice: null,
            ratingCount: '4.9',
            ratingBar: '80%'
        },
        {
            id: 3,
            title: 'Culture & Leadership: Strategies for a Successful Business',
            instructor: 'Rose Simmons',
            duration: '8 hr 15 mins',
            ImageUlrcourses: courseImg8,
            ImageUlrinstr: author3,
            tag: 'Science',
            lectures: '29 Lectures',
            salePrice: '$295.00',
            oldPrice: '$340.00',
            ratingCount: '4.9',
            ratingBar: '80%'
        },
        {
            id: 4,
            title: 'Finance Series: Learn to Budget and Calculate your Net Worth.',
            instructor: 'Jason Williams',
            duration: '8 hr 15 mins',
            ImageUlrcourses: courseImg9,
            ImageUlrinstr: author4,
            tag: 'Finance',
            lectures: '29 Lectures',
            salePrice: 'Free',
            oldPrice: null,
            ratingCount: '4.9',
            ratingBar: '80%'
        },
        {
            id: 5,
            title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape',
            instructor: 'Jason Williams',
            duration: '8 hr 15 mins',
            ImageUlrcourses: courseImg5,
            ImageUlrinstr: author5,
            tag: 'Marketing',
            lectures: '29 Lectures',
            salePrice: '$136.00',
            oldPrice: null,
            ratingCount: '4.9',
            ratingBar: '80%'
        },
        {
            id: 6,
            title: 'Graphic Design: Illustrating Badges and Icons with Geometric Shapes',
            instructor: 'Jason Williams',
            duration: '8 hr 15 mins',
            ImageUlrcourses: courseImg6,
            ImageUlrinstr: author6,
            tag: 'Design',
            lectures: '29 Lectures',
            salePrice: '$237.00',
            oldPrice: null,
            ratingCount: '4.9',
            ratingBar: '80%'
        },
        // Add similar objects for courses 7 to 15
    ];
    const feedback = [
        {
            imagefeed: author7,
            Namefeed: 'Mohammed Ali',
            Nationfeed: 'POR',
            comment: 'EduSpherehas been an incredible resource for my personal and professional growth. The variety of courses available is impressive, and the quality of instruction is top-notch. The platform is user-friendly and allows me to learn at my own pace, which is perfect for my busy schedule. I have gained valuable skills that have already made a difference in my career'
        },
        {
            imagefeed: author6,
            Namefeed: 'Messi Roberts',
            Nationfeed: 'USA',
            comment: 'EduSphereoffers a seamless learning experience with its well-structured courses and intuitive interface. The ability to access course materials from anywhere makes it convenient for me to study on the go. The support team is also very responsive and helpful. I highly recommend EduSphereto anyone looking to invest in their education.'
        },


    ]
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
                                        <a href="#">Course</a>
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
                            <a href="#">Course</a>
                            <ul className="sub-menu">
                                <li><a href="courses">All Courses</a></li>
                                <li><a href="courses-details">Courses Details</a></li>
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
            <div class="section slider-section">
                <div class="slider-shape">
                    <img class="shape-1 animation-round" src={Shape8} alt="Shape" />
                </div>
                <div class="container">
                    <div class="slider-content">
                        <h4 class="sub-title">Start your favourite course</h4>
                        <h2 class="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2>
                        <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                        <a class="btn btn-primary btn-hover-dark" href="courses">Start A Course</a>
                    </div>
                </div>
                <div class="slider-courses-box">
                    <img class="shape-1 animation-left" src={Shape5} alt="Shape" />
                </div>
                <div class="slider-rating-box">
                    <div class="box-rating">
                        <div class="box-wrapper">
                            <span class="count">4.8 <i class="flaticon-star"></i></span>
                            <p>Rating (86K)</p>
                        </div>
                    </div>
                    <img class="shape animation-up" src={Shape7} alt="Shape" />
                </div>
                <div class="slider-images">
                    <div class="images">
                        <img src={slider1} alt="Slider" />
                    </div>
                </div>
                <div class="slider-video">
                    <img class="shape-1" src={Shape9} alt="Shape" />
                    <div class="video-play">
                        <img src={Shape10} alt="Shape" />
                        <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" class="play video-popup"><i class="flaticon-play"></i></a>
                    </div>
                </div>
            </div>
            <div class="section section-padding-02">
                <div class="container">
                    <div class="courses-top">
                        <div class="section-title shape-01">
                            <h2 class="main-title">Most popular <span>Courses</span> of EduSphere</h2>
                        </div>
                    </div>
                    <div className="tab-content courses-tab-content">
                        <div className="tab-pane fade show active" id="tabs1">
                            <div className="courses-wrapper">
                                <div className="row">
                                    {coursesinf.map((item) => (
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-courses">
                                                <div className="courses-images">
                                                    <a href="Coursedetails"><img src={item.ImageUlrcourses} alt="Courses" /></a>
                                                </div>
                                                <div className="courses-content">
                                                    <div className="courses-author">
                                                        <div className="author">
                                                            <div className="author-thumb">
                                                                <a href="#"><img src={item.ImageUlrinstr} alt="Author" /></a>
                                                            </div>
                                                            <div className="author-name">
                                                                <a className="name" href="#">Jason Williams</a>
                                                            </div>
                                                        </div>
                                                        <div className="tag">
                                                            <a href="#">Science</a>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><a href="Coursedetails">{item.title}</a></h4>
                                                    <div className="courses-meta">
                                                        <span> <i className="icofont-clock-time"></i> {item.duration}</span>
                                                        <span> <i className="icofont-read-book"></i> {item.lectures}</span>
                                                    </div>
                                                    <div className="courses-price-review">
                                                        <div className="courses-price">
                                                            <span className="sale-parice">{item.salePrice}</span>
                                                            <span className="old-parice">{item.oldPrice}</span>
                                                        </div>
                                                        <div className="courses-review">
                                                            <span className="rating-count">{item.ratingBar}</span>
                                                            <span className="rating-star">
                                                                <span className="rating-bar" style={{ width: '80%' }}></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))};
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="courses-btn text-center">
                        <a href="courses" class="btn btn-secondary btn-hover-primary">Other Course</a>
                    </div>
                </div>
            </div>
            <div class="section section-padding-02">
                <div class="container">
                    <div class="call-to-action-wrapper">
                        <img class="cat-shape-01 animation-round" src={shape12} alt="Shape" />
                        <img class="cat-shape-02" src={Shape13} alt="Shape" />
                        <img class="cat-shape-03 animation-round" src={shape12} alt="Shape" />
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="section-title shape-02">
                                    <h5 class="sub-title">Become A Instructor</h5>
                                    <h2 class="main-title">You can join with EduSphere as <span>a instructor?</span></h2>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="call-to-action-btn">
                                    <a class="btn btn-primary btn-hover-dark" href="TeacherRegisteration">Drop Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section-padding mt-n1">
                <div class="container">
                    <div class="section-title shape-03 text-center">
                        <h5 class="sub-title">Over 1,235+ Course</h5>
                        <h2 class="main-title">How It <span> Work?</span></h2>
                    </div>
                    <div class="how-it-work-wrapper">
                        <div class="single-work">
                            <img class="shape-1" src={Shape15} alt="Shape" />
                            <div class="work-icon">
                                <i class="flaticon-transparency"></i>
                            </div>
                            <div class="work-content">
                                <h3 class="title">Find Your Course</h3>
                                <p>It has survived not only centurie also leap into electronic.</p>
                            </div>
                        </div>
                        <div class="work-arrow">
                            <img class="arrow" src={Shape17} alt="Shape" />
                        </div>
                        <div class="single-work">
                            <img class="shape-2" src={Shape15} alt="Shape" />
                            <div class="work-icon">
                                <i class="flaticon-forms"></i>
                            </div>
                            <div class="work-content">
                                <h3 class="title">Book A Seat</h3>
                                <p>It has survived not only centurie also leap into electronic.</p>
                            </div>
                        </div>
                        <div class="work-arrow">
                            <img class="arrow" src={Shape17} alt="Shape" />
                        </div>
                        <div class="single-work">
                            <img class="shape-3" src={Shape16} alt="Shape" />
                            <div class="work-icon">
                                <i class="flaticon-badge"></i>
                            </div>
                            <div class="work-content">
                                <h3 class="title">Get Certificate</h3>
                                <p>It has survived not only centurie also leap into electronic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section-padding-02 mt-n1">
                <div class="container">
                    <div class="section-title shape-03 text-center">
                        <h5 class="sub-title">Student Testimonial</h5>
                        <h2 class="main-title">Feedback From <span> Student</span></h2>
                    </div>
                    <div class="testimonial-wrapper testimonial-active">
                        <div class="swiper-container">
                            <div className="swiper-wrapper">
                                {feedback.map((item) => (
                                    <div className="single-testimonial  col-lg-5">

                                        <div className="testimonial-author">

                                            <div className="author-thumb">
                                                <img src={item.imagefeed} alt="Author" />
                                                <i className="icofont-quote-left"></i>
                                            </div>
                                            <span className="rating-star">
                                                <span className="rating-bar"></span>
                                            </span>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>
                                                {item.comment}
                                            </p>
                                            <h4 className="name"> {item.Namefeed}</h4>
                                            <span className="designation">Product Designer,  {item.Nationfeed}</span>
                                        </div>
                                    </div>
                                ))};
                            </div>
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