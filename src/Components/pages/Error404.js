import React from "react";
import Image from "../../assets/images/error.png";
import Advertise from "../advertise"
import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/animate.min.css'
import '../../Styles/plugins/swiper-bundle.min.css'
import '../../Styles/plugins/magnific-popup.css'
import '../../Styles/plugins/nice-select.css'
import '../../Styles/plugins/apexcharts.css'
import '../../Styles/plugins/jqvmap.min.css'
function Error404() {
  return (
    <>
      <Navbar name='Page Not' name2='Found' name3='Error404' />
      <div className="section section-padding mt-n10">
        <div className="container">
          <div className="error-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="error-images">
                  <img className="shape-3" src={Image} alt="Error" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="error-content">
                  <h5 className="sub-title">This Page is Not Found.</h5>
                  <h2 className="main-title">We are very sorry for error. We <span> can’t find this</span> page.</h2>
                  <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                  <a href="/" className="btn btn-primary btn-hover-dark">Back To Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Advertise /></div>
      <div><Footer /></div>
    </>
  );
}
export default Error404;
