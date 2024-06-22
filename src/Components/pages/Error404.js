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
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';

function Error404() {
  return (
    <>
      <Navbar name='Page Not' name2='Found' name3='Error404' />
      <div class="section section-padding mt-n10">
        <div class="container">
          <div class="error-wrapper">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="error-images">
                  <img className="shape-3" src={Image} alt="Error" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="error-content">
                  <h5 class="sub-title">This Page is Not Found.</h5>
                  <h2 class="main-title">We are very sorry for error. We <span> can’t find this</span> page.</h2>
                  <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                  <a href="/" class="btn btn-primary btn-hover-dark">Back To Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Advertise /></div>
      <div><Footer /></div>
            <FloatingChatbot />
            <TidioChat />
    </>
  );
}
export default Error404;
