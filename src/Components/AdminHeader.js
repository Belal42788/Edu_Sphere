import React, { useEffect, useState } from "react";
import Belal from "../assets/images/author/Belal.jpg";
import Image1 from "../assets/images/logo-icon.png";
import "../Styles/Contact.css";
import author10 from "../assets/images/author/author-01.jpg";

function AdminHeader(props) {
  const [photo, setPhoto] = useState(author10);
  const [sign, setSign] = useState(true);

    const hundelSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('UserToken');
    localStorage.removeItem('Email');
    localStorage.removeItem('UserName');
    localStorage.removeItem('Image');
    setSign(true);
    window.location.reload(); // This will reload the page
}

  useEffect(() => {
    const token = localStorage.getItem('UserToken');
      
      if (!token) {
        console.error('No authentication token found');
        // You might want to redirect to the login page or handle this case accordingly
        return;
      }
   const image = localStorage.getItem('Image');
    if (!image) {
      setPhoto(author10);
      setSign(true);
    } else { 
      setPhoto(image);
      setSign(false);
    }
  }, []);
  return (
    <>
      <div style={{marginBottom:'15px'}}>
        <div className="header-main">
          <div className="container">
            <div className="header-main-wrapper">
              <div className="header-logo" style={{ display: 'flex' }}>
                <a href="/" style={{ paddingLeft: '15px' }}>
                  <img src={Image1} width="50" height="50" alt="Logo" />
                </a>
                <h2 style={{ paddingLeft: '10px', textTransform: 'capitalize' }}>
                  Edu<span style={{ color: 'green' }}>Sphere</span>
                </h2>
              </div>
              <div className="header-menu d-none d-lg-block">
                <ul className="nav-menu">
                  <li><a href="/">Home</a></li>
                  <li>
                    <a href="#">Course</a>
                    <ul className="sub-menu">
                      <li><a href="courses">All Courses</a></li>
                      <li><a href="MyCourses">My Courses</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    {!sign? (<ul className="sub-menu">
                      <li><a href="about">About</a></li>
                      <li><a href="faq">FAQ</a></li>
                      <li><a href="404-error">404 Error</a></li>
                      <li><a href="Afterenroll">After Enroll</a></li>
                      <li><a href="CoursesAdmin">Instructor Dashboard</a></li>
                      <li><a href="createcourse">Create Course</a></li>
                      <li><a href="createLesson">Create lesson</a></li>
                      <li><a href="TeacherRegisteration">Become A Instructor</a></li>
                    </ul>) :(
                    <ul className="sub-menu">
                      <li><a href="about">About</a></li>
                      <li><a href="register">Register</a></li>
                      <li><a href="login">Login</a></li>
                      <li><a href="faq">FAQ</a></li>
                      <li><a href="404-error">404 Error</a></li>
                      <li><a href="Afterenroll">After Enroll</a></li>
                      <li><a href="CoursesAdmin">Instructor Dashboard</a></li>
                      <li><a href="createcourse">Create Course</a></li>
                      <li><a href="createLesson">Create lesson</a></li>
                      <li><a href="TeacherRegisteration">Become A Instructor</a></li>
                      </ul>
                        )}
                  </li>
                  <li><a href="contact">Contact</a></li>
                </ul>
              </div>
              {!sign ? (
                <div className="login-header-action ml-auto">
                  <a className="action author" href="profile">
                    <img src={photo} alt="Author" />
                  </a>
                  <div className="dropdown">
                    <button className="action more" data-bs-toggle="dropdown">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="" href="profile">
                          <i className="icofont-user"></i> Profile
                        </a>
                      </li>
                      {!props.isInstructor ? (
                        <li>
                          <a className="" href="TeacherRegisteration">
                            <i className="icofont-education"></i> Become an instructor
                          </a>
                        </li>
                      ) : (
                        <li>
                          <a className="" href="coursesAdmin">
                            <i className="icofont-teacher"></i> Instructor Dashboard
                          </a>
                        </li>
                      )}
                      <li>
                        <a className="" href="login" onClick={hundelSignOut}>
                          <i className="icofont-logout"></i> Sign Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="header-sign-in-up d-none d-lg-block">
                  <ul>
                    <li><a className="sign-in" href="login">Sign In</a></li>
                    <li><a className="sign-up" href="register">Sign Up</a></li>
                  </ul>
                </div>
              )}
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
                  <li><a href="Coursedetails">Courses Details</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
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
      </div>
    </>
  );
}

export default AdminHeader;
