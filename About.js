import React from "react";
import author1 from "../assets/images/author/author-01.jpg";
import author2 from "../assets/images/author/author-02.jpg";
import author3 from "../assets/images/author/author-03.jpg";
import author4 from "../assets/images/author/author-04.jpg";
import author5 from "../assets/images/author/author-05.jpg";
import author6 from "../assets/images/author/author-06.jpg";
import author7 from "../assets/images/author/author-07.jpg";
import author8 from "../assets/images/author/author-08.jpg";
import author9 from "../assets/images/author/author-09.jpg";
import author10 from "../assets/images/author/author-10.jpg";

import about1 from "../assets/images/about.jpg";
import about2 from "../assets/images/logo-icon.png";

import shape12 from "../assets/images/shape/shape-12.png";
import shape13 from "../assets/images/shape/shape-13.png";
import shape14 from "../assets/images/shape/shape-14.png";
import shape19 from "../assets/images/shape/shape-19.png";
import shape20 from "../assets/images/shape/shape-20.png";

import brand1 from "../assets/images/brand/brand-01.png";
import brand2 from "../assets/images/brand/brand-02.png";
import brand3 from "../assets/images/brand/brand-03.png";
import brand4 from "../assets/images/brand/brand-04.png";
import brand5 from "../assets/images/brand/brand-05.png";
import brand6 from "../assets/images/brand/brand-06.png";
import google from "../assets/images/google-play.png";
import appstore from "../assets/images/app-store.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../Styles/Contact.css";

function About() {
  return (
    <>
      <Navbar />
      <div class="section">
        <div class="section-padding-02 mt-n10">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="about-images">
                  <div class="images">
                    <img src={about1} alt="About" />
                  </div>

                  <div class="about-years">
                    <div class="years-icon">
                      <img src={about2} alt="About" />
                    </div>
                    <p>
                      <strong>28+</strong> Years Experience
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-content">
                  <h5 class="sub-title">Welcome to Edule.</h5>
                  <h2 class="main-title">
                    You can join with Edule and upgrade your skill for your{" "}
                    <span>bright future.</span>
                  </h2>
                  <p>
                    Lorem Ipsum has been the industr’s standard dummy text ever
                    since unknown printer took galley type and scmbled make type
                    specimen book. It has survived not only five centuries.
                  </p>
                  <a href="#" class="btn btn-primary btn-hover-dark">
                    Start A Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-padding-02 mt-n6">
          <div class="container">
            <div class="about-items-wrapper">
              <div class="row">
                <div class="col-lg-4">
                  <div class="about-item">
                    <div class="item-icon-title">
                      <div class="item-icon">
                        <i class="flaticon-tutor"></i>
                      </div>
                      <div class="item-title">
                        <h3 class="title">Top Instructors</h3>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled to make type specimen
                      book has survived.
                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled make.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="about-item">
                    <div class="item-icon-title">
                      <div class="item-icon">
                        <i class="flaticon-coding"></i>
                      </div>
                      <div class="item-title">
                        <h3 class="title">Portable Program</h3>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled to make type specimen
                      book has survived.
                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled make.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="about-item">
                    <div class="item-icon-title">
                      <div class="item-icon">
                        <i class="flaticon-increase"></i>
                      </div>
                      <div class="item-title">
                        <h3 class="title">Improve Quickly</h3>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled to make type specimen
                      book has survived.
                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled make.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding-02">
        <div class="container">
          <div class="call-to-action-wrapper">
            <img
              class="cat-shape-01 animation-round"
              src={shape12}
              alt="Shape"
            />
            <img class="cat-shape-02" src={shape13} alt="Shape" />
            <img
              class="cat-shape-03 animation-round"
              src={shape12}
              alt="Shape"
            />

            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="section-title shape-02">
                  <h5 class="sub-title">Become A Instructor</h5>
                  <h2 class="main-title">
                    You can join with Edule as <span>a instructor?</span>
                  </h2>
                </div>
              </div>
              <div class="col-md-6">
                <div class="call-to-action-btn">
                  <a class="btn btn-primary btn-hover-dark" href="#">
                    Drop Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding mt-n1">
        <div class="container">
          <div class="section-title shape-03 text-center">
            <h5 class="sub-title">Team Member’s</h5>
            <h2 class="main-title">
              Edule Skilled <span> Instructor</span>
            </h2>
          </div>

          <div class="team-wrapper">
            <div class="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author1} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Margarita James</h4>
                    <span class="designation">MSC, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author2} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Mitchell Colon</h4>
                    <span class="designation">BBA, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author3} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Sonya Gordon</h4>
                    <span class="designation">MBA, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author4} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Archie Neal</h4>
                    <span class="designation">BBS, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author5} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Randal Ramsey</h4>
                    <span class="designation">MBBS, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author6} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Rochelle Thomas</h4>
                    <span class="designation">MSC, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author7} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Della Salazar</h4>
                    <span class="designation">BBA, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author8} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Ricardo Patrick</h4>
                    <span class="designation">MBA, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author9} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Kurt Stewart</h4>
                    <span class="designation">BBS, Instructor</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="single-team">
                  <div class="team-thumb">
                    <img src={author10} alt="Author" />
                  </div>
                  <div class="team-content">
                    <div class="rating">
                      <span class="count">4.9</span>
                      <i class="icofont-star"></i>
                      <span class="text">(rating)</span>
                    </div>
                    <h4 class="name">Rodney Terry</h4>
                    <span class="designation">MBBS, Instructor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding download-section">
        <div class="app-shape-1"></div>
        <div class="app-shape-2"></div>
        <div class="app-shape-3"></div>
        <div class="app-shape-4"></div>

        <div class="container">
          <div class="download-app-wrapper mt-n6">
            <div class="section-title section-title-white">
              <h5 class="sub-title">Ready to start?</h5>
              <h2 class="main-title">
                Download our mobile app. for easy to start your course.
              </h2>
            </div>

            <img class="shape-1 animation-right" src={shape14} alt="Shape" />

            <div class="download-app-btn">
              <ul class="app-btn">
                <li>
                  <a href="#">
                    <img src={google} alt="Google Play" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={appstore} alt="App Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding-02 mt-n1">
        <div class="container">
          <div class="section-title shape-03 text-center">
            <h5 class="sub-title">Student Testimonial</h5>
            <h2 class="main-title">
              Feedback From <span> Student</span>
            </h2>
          </div>

          <div class="testimonial-wrapper testimonial-active">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="single-testimonial swiper-slide">
                  <div class="testimonial-author">
                    <div class="author-thumb">
                      <img src={author6} alt="Author" />

                      <i class="icofont-quote-left"></i>
                    </div>

                    <span class="rating-star">
                      <span class="rating-bar"></span>
                    </span>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make type specimen book has
                      survived not five centuries but also the leap into
                      electronic.
                    </p>
                    <h4 class="name">Sara Alexander</h4>
                    <span class="designation">Product Designer, USA</span>
                  </div>
                </div>

                <div class="single-testimonial swiper-slide">
                  <div class="testimonial-author">
                    <div class="author-thumb">
                      <img src={author7} alt="Author" />

                      <i class="icofont-quote-left"></i>
                    </div>

                    <span class="rating-star">
                      <span class="rating-bar"></span>
                    </span>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make type specimen book has
                      survived not five centuries but also the leap into
                      electronic.
                    </p>
                    <h4 class="name">Melissa Roberts</h4>
                    <span class="designation">Product Designer, USA</span>
                  </div>
                </div>

                <div class="single-testimonial swiper-slide">
                  <div class="testimonial-author">
                    <div class="author-thumb">
                      <img src={author3} alt="Author" />

                      <i class="icofont-quote-left"></i>
                    </div>

                    <span class="rating-star">
                      <span class="rating-bar"></span>
                    </span>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make type specimen book has
                      survived not five centuries but also the leap into
                      electronic.
                    </p>
                    <h4 class="name">Sara Alexander</h4>
                    <span class="designation">Product Designer, USA</span>
                  </div>
                </div>
              </div>

              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding">
        <div class="container">
          <div class="brand-logo-wrapper">
            <img class="shape-1" src={shape19} alt="Shape" />
            <img
              class="shape-2 animation-round"
              src={shape20}
              alt="Shape"
            />\{" "}
            <div class="section-title shape-03">
              <h2 class="main-title">
                Best Supporter of <span> Edule.</span>
              </h2>
            </div>
            <div class="brand-logo brand-active">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="single-brand swiper-slide">
                    <img src={brand1} alt="Brand" />
                  </div>

                  <div class="single-brand swiper-slide">
                    <img src={brand2} alt="Brand" />
                  </div>

                  <div class="single-brand swiper-slide">
                    <img src={brand3} alt="Brand" />
                  </div>

                  <div class="single-brand swiper-slide">
                    <img src={brand4} alt="Brand" />
                  </div>

                  <div class="single-brand swiper-slide">
                    <img src={brand5} alt="Brand" />
                  </div>

                  <div class="single-brand swiper-slide">
                    <img src={brand6} alt="Brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
