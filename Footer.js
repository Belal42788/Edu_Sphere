import React from "react";
import "../Styles/Contact.css"
import Image1 from "../assets/images/logo.png";
import Image12 from "../assets/images/shape/shape-21.png";
import Image13 from "../assets/images/shape/shape-22.png";
function Footer() {
  return (
    <>
      
      <div className="section footer-section">
          <div className="footer-widget-section">
            <img className="shape-1 animation-down" src={Image12} alt="Shape" />

            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
                  <div className="footer-widget">
                    <div className="widget-logo">
                      <a href="#">
                        <img src={Image1} alt="Logo" />
                      </a>
                    </div>

                    <div className="widget-address">
                      <h4 className="footer-widget-title">Caribbean Ct</h4>
                      <p>Haymarket, Virginia (VA).</p>
                    </div>

                    <ul className="widget-info">
                      <li>
                        <p>
                          {" "}
                          <i className="flaticon-email"></i>{" "}
                          <a href="mailto:address@gmail.com">
                            address@gmail.com
                          </a>{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          {" "}
                          <i className="flaticon-phone-call"></i>{" "}
                          <a href="tel:9702621413">(970) 262-1413</a>{" "}
                        </p>
                      </li>
                    </ul>

                    <ul className="widget-social">
                      <li>
                        <a href="#">
                          <i className="flaticon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-skype"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-6 order-md-3 order-lg-2">
                  <div className="footer-widget-link">
                    <div className="footer-widget">
                      <h4 className="footer-widget-title">Category</h4>

                      <ul className="widget-link">
                        <li>
                          <a href="#">Creative Writing</a>
                        </li>
                        <li>
                          <a href="#">Film & Video</a>
                        </li>
                        <li>
                          <a href="#">Graphic Design</a>
                        </li>
                        <li>
                          <a href="#">UI/UX Design</a>
                        </li>
                        <li>
                          <a href="#">Business Analytics</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                      </ul>
                    </div>

                    <div className="footer-widget">
                      <h4 className="footer-widget-title">Quick Links</h4>

                      <ul className="widget-link">
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Discussion</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Customer Support</a>
                        </li>
                        <li>
                          <a href="#">Course FAQ’s</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Subscribe</h4>

                    <div className="widget-subscribe">
                      <p>
                        Lorem Ipsum has been them an industry printer took a
                        galley make book.
                      </p>

                      <div className="widget-form">
                        <form action="#">
                          <input type="text" placeholder="Email here" />
                          <button className="btn btn-primary btn-hover-dark">
                            Subscribe Now
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img className="shape-2 animation-left" src={Image13} alt="Shape" />
          </div>

          <div className="footer-copyright">
            <div className="container">
              <div className="copyright-wrapper">
                <div className="copyright-link">
                  <a href="#">Terms of Service</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Sitemap</a>
                  <a href="#">Security</a>
                </div>
                <div className="copyright-text">
                  <p>
                    &copy; 2021 <span> Education </span> Made with{" "}
                    <i className="icofont-heart-alt"></i> by{" "}
                    <a href="#">EduSphere</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
