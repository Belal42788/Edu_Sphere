// import {useRef} from "react"
// import {FaBars , FaTimes} from "react-icons/fa";
// import "../Styles/main.css"
// function Navbar() {
//     const navRef = useRef();

//     const showNavbar = () => {
//         navRef.current.classList.toggle("responsive_nav");
//     }

//   return (
//     <header>
//       <h3>Logo</h3>
//       <nav ref={navRef}>
//         <a href="/#">Home</a>
//         <a href="/#">Sevices</a>
//         <a href="/#">About</a>
//         <a href="/#">Contact</a>
//         <a href="/#">My Profile</a>
//         <a href="/#">Log In</a>
//         <a href="/#">Sign Up</a>
//         <button className = "nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes/>
//         </button>
//       </nav>

//       <button className = "nav-btn" onClick={showNavbar}>
//         <FaBars/>
//       </button>

//     </header>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/logo.png"
import Image2 from "../assets/images/shape/shape-8.png"
import Image3 from "../assets/images/shape/shape-23.png"
import Image4 from "../assets/images/shape/shape-5.png"
import Image5 from "../assets/images/shape/shape-6.png"
import Image6 from "../assets/images/shape/shape-24.png"
import Image7 from "../assets/images/author/author-11.jpg"

import "../Styles/Contact.css"

function Navbar(){
  return (
    <>
    <div className="header-section">

    
<div className="header-top d-none d-lg-block">
    <div className="container">

        <div className="header-top-wrapper">

         
            <div className="header-top-left">
                <p>All course 28% off for <a href="#">Liberian people’s.</a></p>
            </div>
           
          
            <div className="header-top-medal">
                <div className="top-info">
                    <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                    <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
                </div>
            </div>
            

           
            <div className="header-top-right">
                <ul className="social">
                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                    <li><a href="#"><i className="flaticon-skype"></i></a></li>
                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                </ul>
            </div>
          

        </div>
        

    </div>
</div>

<div className="header-main">
    <div className="container">

       <div className="header-main-wrapper">

            <div className="header-logo">
                <a href="index.html"><img src={Image1} alt="Logo"/></a>
            </div>
         

            <div className="header-menu d-none d-lg-block">
                <ul className="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a href="#">All Course</a>
                        <ul className="sub-menu">
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="courses-details.html">Courses Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages </a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="404-error.html">404 Error</a></li>
                            <li><a href="after-enroll.html">After Enroll</a></li>
                            <li><a href="courses-admin.html">Instructor Dashboard (Course List)</a></li>
                            <li><a href="overview.html">Instructor Dashboard (Performance)</a></li>
                            <li><a href="students.html">Students</a></li>
                            <li><a href="reviews.html">Reviews</a></li>
                            <li><a href="engagement.html">Course engagement</a></li>
                            <li><a href="traffic-conversion.html">Traffic & conversion</a></li>
                            <li><a href="messages.html">Messages</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid.html">Blog</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog Details</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                    <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

            </div>
         

            
            <div className="header-sign-in-up d-none d-lg-block">
                <ul>
                    <li><a className="sign-in" href="login.html">Sign In</a></li>
                    <li><a className="sign-up" href="register.html">Sign Up</a></li>
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
        <li><a className="sign-in" href="login.html">Sign In</a></li>
        <li><a className="sign-up" href="register.html">Sign Up</a></li>
    </ul>
</div>

<div className="mobile-menu-items">
    <ul className="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li>
            <a href="#">All Course</a>
            <ul className="sub-menu">
                <li><a href="courses.html">Courses</a></li>
                <li><a href="courses-details.html">Courses Details</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Pages </a>
            <ul className="sub-menu">
                <li><a href="about.html">About</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="404-error.html">404 Error</a></li>
                <li><a href="after-enroll.html">After Enroll</a></li>
                <li><a href="courses-admin.html">Instructor Dashboard (Course List)</a></li>
                <li><a href="overview.html">Instructor Dashboard (Performance)</a></li>
                <li><a href="students.html">Students</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="engagement.html">Course engagement</a></li>
                <li><a href="traffic-conversion.html">Traffic & conversion</a></li>
                <li><a href="messages.html">Messages</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Blog</a>
            <ul className="sub-menu">
                <li>
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                        <li><a href="blog-grid.html">Blog</a></li>
                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Blog Details</a>
                    <ul className="sub-menu">
                        <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                        <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="contact.html">Contact</a></li>
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

<img className="shape-1 animation-round" src={Image2} alt="Shape"/>

<img className="shape-2" src={Image3} alt="Shape"/>

<div className="container">
  
    <div className="page-banner-content">
        <ul className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li className="active">Contact Us</li>
        </ul>
        <h2 className="title">Contact <span>Us</span></h2>
    </div>
  
</div>

<div className="shape-icon-box">

    <img className="icon-shape-1 animation-left" src={Image4} alt="Shape"/>

    <div className="box-content">
        <div className="box-wrapper">
            <i className="flaticon-badge"></i>
        </div>
    </div>

    <img className="icon-shape-2" src={Image5} alt="Shape"/>

</div>


<img className="shape-3" src={Image6} alt="Shape"/>

<img className="shape-author" src={Image7} alt="Shape"/>

</div>

    </>
  );
};

export default Navbar;
