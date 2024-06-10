import React from "react";
import detail1 from "../../assets/images/courses/courses-details.jpg";
import detail2 from "../../assets/images/courses/circle-shape.png";
import courseImg03 from "../../assets/seo.png";
import courseImg04 from "../../assets/ui-ux.png";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-03.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import Advertise from "../advertise"
//import FreeCourseCard from "./FreeCourseCard";
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
function FreeCourse() {
  const coursesinf = [
    {
      id: 1, title: 'Data Science and Machine Learning with Python - Hands On!', instructor: 'John Doe', duration: '4 weeks', price: '428'
    }]
  return (
    <>
      <Navbar name='Courses' name2='Details' name3='Courses' />
      <div className="section section-padding mt-n10">
        <div className="container">
          <div className="row gx-10">
            <div className="col-lg-8">
              <div className="courses-details">
                <div className="courses-details-images">
                  <img src={detail1} alt="Courses Details" />
                  <span className="tags">Finance</span>
                  <div className="courses-play">
                    <img src={detail2} alt="Play" />
                    <a
                      className="play video-popup"
                      href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                </div>
                <h2 className="title">
                  Finance & Investment Series: Learn to Budget and Calculate
                  Your Net Worth.
                </h2>
                <div className="courses-details-admin">
                  <div className="admin-author">
                    <div className="author-thumb">
                      <img src={author1} alt="Author" />
                    </div>
                    <div className="author-content">
                      <a className="name" href="#">
                        Pamela Foster
                      </a>
                      <span className="Enroll">286 Enrolled Students</span>
                    </div>
                  </div>
                  <div className="admin-rating">
                    <span className="rating-count">4.9</span>
                    <span className="rating-star">
                      <span className="rating-bar"></span>
                    </span>
                    <span className="rating-text">(5,764 Rating)</span>
                  </div>
                </div>
                <div className="courses-details-tab">
                  <div className="details-tab-menu">
                    <ul className="nav justify-content-center">
                      <li>
                        <button
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                        >
                          Description
                        </button>
                      </li>
                      <li>
                        <button
                          data-bs-toggle="tab"
                          data-bs-target="#instructors"
                        >
                          Instructors
                        </button>
                      </li>
                      <li>
                        <button data-bs-toggle="tab" data-bs-target="#reviews">
                          Reviews
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="details-tab-content">
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="description">
                        <div className="tab-description">
                          <div className="description-wrapper">
                            <h3 className="tab-title">Description:</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was popularsed
                              in the 1960 with release containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>
                          </div>
                          {/* <div className="description-wrapper">
                            <h3 className="tab-title">Curriculum:</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was popularsed
                              in the 1960 with release containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>
                          </div>
                          <div className="description-wrapper">
                            <h3 className="tab-title">Certification:</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was popularsed
                              in the 1960 with release containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>
                          </div> */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="instructors">
                        <div className="tab-instructors">
                          <h3 className="tab-title">Course Instructor:</h3>
                          <div className="row">
                            <div className="col-md-3 col-6">
                              <div className="single-team">
                                <div className="team-thumb">
                                  <img src={author1} alt="Author" />
                                </div>
                                <div className="team-content">
                                  <div className="rating">
                                    <span className="count">4.9</span>
                                    <i className="icofont-star"></i>
                                    <span className="text">(rating)</span>
                                  </div>
                                  <h4 className="name">Margarita James</h4>
                                  <span className="designation">
                                    MSC, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-6">
                              <div className="single-team">
                                <div className="team-thumb">
                                  <img src={author2} alt="Author" />
                                </div>
                                <div className="team-content">
                                  <div className="rating">
                                    <span className="count">4.9</span>
                                    <i className="icofont-star"></i>
                                    <span className="text">(rating)</span>
                                  </div>
                                  <h4 className="name">Mitchell Colon</h4>
                                  <span className="designation">
                                    BBA, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-6">
                              <div className="single-team">
                                <div className="team-thumb">
                                  <img src={author3} alt="Author" />
                                </div>
                                <div className="team-content">
                                  <div className="rating">
                                    <span className="count">4.9</span>
                                    <i className="icofont-star"></i>
                                    <span className="text">(rating)</span>
                                  </div>
                                  <h4 className="name">Sonya Gordon</h4>
                                  <span className="designation">
                                    MBA, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-6">
                              <div className="single-team">
                                <div className="team-thumb">
                                  <img src={author4} alt="Author" />
                                </div>
                                <div className="team-content">
                                  <div className="rating">
                                    <span className="count">4.9</span>
                                    <i className="icofont-star"></i>
                                    <span className="text">(rating)</span>
                                  </div>
                                  <h4 className="name">Archie Neal</h4>
                                  <span className="designation">
                                    BBS, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row gx-10">
                            <div className="col-lg-6">
                              <div className="tab-rating-content">
                                <h3 className="tab-title">Rating:</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of printing
                                  and typesetting industry. Lorem Ipsum has been
                                  the i dustry's standard dummy text ever since
                                  the 1500 unknown printer took a galley of
                                  type.
                                </p>
                                <p>
                                  Lorem Ipsum is simply dummy text of printing
                                  and typesetting industry text ever since
                                </p>
                                <p>
                                  Lorem Ipsum is simply dummy text of printing
                                  and dustry's standard dummy text ever since
                                  the 1500 unknown printer took a galley of
                                  type.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="tab-rating-box">
                                <span className="count">
                                  4.8 <i className="icofont-star"></i>
                                </span>
                                <p>Rating (86K+)</p>
                                <div className="rating-box-wrapper">
                                  <div className="single-rating">
                                    <span className="rating-star">
                                      <span className="rating-bar"></span>
                                    </span>
                                    <div className="rating-progress-bar">
                                      <div className="rating-line"></div>
                                    </div>
                                  </div>
                                  <div className="single-rating">
                                    <span className="rating-star">
                                      <span className="rating-bar"></span>
                                    </span>
                                    <div className="rating-progress-bar">
                                      <div className="rating-line"></div>
                                    </div>
                                  </div>
                                  <div className="single-rating">
                                    <span className="rating-star">
                                      <span className="rating-bar"></span>
                                    </span>
                                    <div className="rating-progress-bar">
                                      <div className="rating-line"></div>
                                    </div>
                                  </div>
                                  <div className="single-rating">
                                    <span className="rating-star">
                                      <span className="rating-bar"></span>
                                    </span>
                                    <div className="rating-progress-bar">
                                      <div className="rating-line"></div>
                                    </div>
                                  </div>
                                  <div className="single-rating">
                                    <span className="rating-star">
                                      <span className="rating-bar"></span>
                                    </span>
                                    <div className="rating-progress-bar">
                                      <div className="rating-line"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="reviews">
                        <div className="tab-reviews">
                          <h3 className="tab-title">Student Reviews:</h3>
                          <div className="reviews-wrapper reviews-active">
                            <div className="swiper-container">
                              <div className="swiper-wrapper">
                                <div className="single-review swiper-slide">
                                  <div className="review-author">
                                    <div className="author-thumb">
                                      <img src={author6} alt="Author" />
                                      <i className="icofont-quote-left"></i>
                                    </div>
                                    <div className="author-content">
                                      <h4 className="name">Sara Alexander</h4>
                                      <span className="designation">
                                        Product Designer, USA
                                      </span>
                                      <span className="rating-star">
                                        <span className="rating-bar"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <p>
                                    Lorem Ipsum has been the industry's standard
                                    dummy text since the 1500 when unknown
                                    printer took a galley of type and scrambled
                                    to make type specimen book has survived not
                                    five centuries but also the leap into
                                    electronic type and book.
                                  </p>
                                </div>
                                <div className="single-review swiper-slide">
                                  <div className="review-author">
                                    <div className="author-thumb">
                                      <img src={author7} alt="Author" />
                                      <i className="icofont-quote-left"></i>
                                    </div>
                                    <div className="author-content">
                                      <h4 className="name">Karol Bachman</h4>
                                      <span className="designation">
                                        Product Designer, USA
                                      </span>
                                      <span className="rating-star">
                                        <span className="rating-bar"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <p>
                                    Lorem Ipsum has been the industry's standard
                                    dummy text since the 1500 when unknown
                                    printer took a galley of type and scrambled
                                    to make type specimen book has survived not
                                    five centuries but also the leap into
                                    electronic type and book.
                                  </p>
                                </div>
                                <div className="single-review swiper-slide">
                                  <div className="review-author">
                                    <div className="author-thumb">
                                      <img src={author3} alt="Author" />
                                      <i className="icofont-quote-left"></i>
                                    </div>
                                    <div className="author-content">
                                      <h4 className="name">Gertude Culbertson</h4>
                                      <span className="designation">
                                        Product Designer, USA
                                      </span>
                                      <span className="rating-star">
                                        <span className="rating-bar"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <p>
                                    Lorem Ipsum has been the industry's standard
                                    dummy text since the 1500 when unknown
                                    printer took a galley of type and scrambled
                                    to make type specimen book has survived not
                                    five centuries but also the leap into
                                    electronic type and book.
                                  </p>
                                </div>
                              </div>
                              =<div className="swiper-pagination"></div>
                            </div>
                          </div>
                          <div className="reviews-btn">
                            <button
                              type="button"
                              className="btn btn-primary btn-hover-dark"
                              data-bs-toggle="modal"
                              data-bs-target="#reviewsModal"
                            >
                              Write A Review
                            </button>
                          </div>
                          <div className="modal fade" id="reviewsModal">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Add a Review</h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body reviews-form">
                                  <form action="#">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="single-form">
                                          <input
                                            type="text"
                                            placeholder="Enter your name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="single-form">
                                          <input
                                            type="text"
                                            placeholder="Enter your Email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="reviews-rating">
                                          <label>Rating</label>
                                          <ul id="rating" className="rating">
                                            <li
                                              className="star"
                                              title="Poor"
                                              data-value="1"
                                            >
                                              <i className="icofont-star"></i>
                                            </li>
                                            <li
                                              className="star"
                                              title="Poor"
                                              data-value="2"
                                            >
                                              <i className="icofont-star"></i>
                                            </li>
                                            <li
                                              className="star"
                                              title="Poor"
                                              data-value="3"
                                            >
                                              <i className="icofont-star"></i>
                                            </li>
                                            <li
                                              className="star"
                                              title="Poor"
                                              data-value="4"
                                            >
                                              <i className="icofont-star"></i>
                                            </li>
                                            <li
                                              className="star"
                                              title="Poor"
                                              data-value="5"
                                            >
                                              <i className="icofont-star"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="single-form">
                                          <textarea placeholder="Write your comments here"></textarea>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="single-form">
                                          <button className="btn btn-primary btn-hover-dark">
                                            Submit Review
                                          </button>
                                        </div>
                                      </div>
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
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget widget-information">
                  <div className="info-price">
                    <span className="price">$420.38</span>
                  </div>
                  <div className="info-list">
                    <ul>
                      <li>
                        <i className="icofont-man-in-glasses"></i>{" "}
                        <strong>Instructor</strong> <span>Pamela Foster</span>
                      </li>
                      <li>
                        <i className="icofont-clock-time"></i>{" "}
                        <strong>Duration</strong> <span>08 hr 15 mins</span>
                      </li>
                      <li>
                        <i className="icofont-ui-video-play"></i>{" "}
                        <strong>Lectures</strong> <span>29</span>
                      </li>
                      <li>
                        <i className="icofont-bars"></i> <strong>Level</strong>{" "}
                        <span>Secondary</span>
                      </li>
                      <li>
                        <i className="icofont-book-alt"></i>{" "}
                        <strong>Language</strong> <span>English</span>
                      </li>
                      <li>
                        <i className="icofont-certificate-alt-1"></i>{" "}
                        <strong>Certificate</strong> <span>Yes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="info-btn">
                    <a href="#" className="btn btn-primary btn-hover-dark">
                      Enroll Now
                    </a>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h4 className="widget-title">Share Course:</h4>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-linkedin"></i>
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
            </div>
          </div>
        </div>
      </div>
      <div><Advertise /></div>
      <div><Footer /></div>
    </>
  );
}
export default FreeCourse;
