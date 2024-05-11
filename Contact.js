import React, { useState } from "react";
// import contact1 from "../Contact/contact1.png"
import "../Styles/Contact.css";

import Image8 from "../assets/images/shape/shape-12.png";
import Image9 from "../assets/images/shape/shape-14.png";
import Image10 from "../assets/images/google-play.png";
import Image11 from "../assets/images/app-store.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="main-wrapper">
        <div className="section section-padding-02">
          <div className="container">
            <div className="contact-map-wrapper">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="section section-padding">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="contact-info">
                    <img
                      className="shape animation-round"
                      src={Image8}
                      alt="Shape"
                    />

                    <div className="single-contact-info">
                      <div className="info-icon">
                        <i class="fas fa-phone"></i>
                      </div>
                      <div className="info-content">
                        <h6 className="title">Phone No.</h6>
                        <p>
                          <a href="tel:88193326867">(88) 193 326 867</a>
                        </p>
                      </div>
                    </div>

                    <div className="single-contact-info">
                      <div className="info-icon">
                        <i class="far fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h6 className="title">Email Address.</h6>
                        <p>
                          <a href="mailto:edule100@gmail.com">
                            edule100@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="single-contact-info">
                      <div className="info-icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info-content">
                        <h6 className="title">Office Address.</h6>
                        <p>Talga, Alabama, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-form">
                    <h3 className="title">
                      Get in Touch <span>With Us</span>
                    </h3>

                    <div className="form-wrapper">
                      <form
                        id="contact-form"
                        action="https://htmlmail.hasthemes.com/humayun/edule-contact.php"
                        method="POST"
                      >
                        <div className="single-form">
                          <input type="text" name="name" placeholder="Name" />
                        </div>

                        <div className="single-form">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="single-form">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                          />
                        </div>

                        <div className="single-form">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <p className="form-message"></p>

                        <div className="single-form">
                          <button className="btn btn-primary btn-hover-dark w-100">
                            Send Message <i className="flaticon-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-padding download-section">
          <div className="app-shape-1"></div>
          <div className="app-shape-2"></div>
          <div className="app-shape-3"></div>
          <div className="app-shape-4"></div>

          <div className="container">
            <div className="download-app-wrapper mt-n6">
              <div className="section-title section-title-white">
                <h5 className="sub-title">Ready to start?</h5>
                <h2 className="main-title">
                  Download our mobile app. for easy to start your course.
                </h2>
              </div>

              <img
                className="shape-1 animation-right"
                src={Image9}
                alt="Shape"
              />

              <div className="download-app-btn">
                <ul className="app-btn">
                  <li>
                    <a href="#">
                      <img src={Image10} alt="Google Play" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Image11} alt="App Store" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
    <Footer/>
    </>
  );
}

export default Contact;
