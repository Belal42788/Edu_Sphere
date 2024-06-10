import React, { useState } from "react";
// import contact1 from "../Contact/contact1.png"
import "../../Styles/Contact.css";
import Image8 from "../../assets/images/shape/shape-12.png";
import Image9 from "../../assets/images/shape/shape-14.png";
import Image10 from "../../assets/images/google-play.png";
import Image11 from "../../assets/images/app-store.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise"
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/animate.min.css'
import '../../Styles/plugins/swiper-bundle.min.css'
import '../../Styles/plugins/magnific-popup.css'
import '../../Styles/plugins/nice-select.css'
import '../../Styles/plugins/apexcharts.css'
import '../../Styles/plugins/jqvmap.min.css'
import '../../Styles/plugins/icofont.min.css'
function Contact() {
  return (
    <>
      <Navbar name='Contact' name2='US' name3='Contact' />
      <div className="main-wrapper">
        <div className="section section-padding-02">
          <div className="container">
            <div className="contact-map-wrapper">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Faculty%20of%20Science%2C%20Cairo%20University%2C%20Giza%2C%20Egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="info-content">
                        <h6 className="title">Phone No.</h6>
                        <p>
                          <a href="tel:88193326867">(+20) 1234567890</a>
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="info-icon">
                        <i class="flaticon-email"></i>
                      </div>
                      <div className="info-content">
                        <h6 className="title">Email Address.</h6>
                        <p>
                          <a href="mailto:EduSphere@gmail.com">
                            EduSphere@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="info-icon">
                        <i class="flaticon-pin"></i>
                      </div>
                      <div className="info-content">
                        <h6 className="title">Office Address.</h6>
                        <p>Giza,Egypt</p>
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
                        action="https://htmlmail.hasthemes.com/humayun/EduSphere-contact.php"
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
      </div>
      <div><Advertise /></div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Contact;
