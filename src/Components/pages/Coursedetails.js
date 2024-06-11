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
      id: 1, title: 'Data Science and Machine Learning with Python - Hands On!', instructor: 'John Doe', lecture: '29', price: '428' ,Language:'English',
      Certificate:'Yes'}]
  return (
    <>
      <Navbar name='Courses' name2='Details' name3='Courses' />
      <div class="section section-padding mt-n10">
        <div class="container">
          <div class="row gx-10">
            <div class="col-lg-8">
              <div class="courses-details">
                <div class="courses-details-images">
                  <img src={detail1} alt="Courses Details" />
                  <span class="tags">Finance</span>
                  <div class="courses-play">
                    <img src={detail2} alt="Play" />
                    <a
                      class="play video-popup"
                      href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"
                    >
                      <i class="flaticon-play"></i>
                    </a>
                  </div>
                </div>
                <h2 class="title">
                  Finance & Investment Series: Learn to Budget and Calculate
                  Your Net Worth.
                </h2>
                <div class="courses-details-admin">
                  <div class="admin-author">
                    <div class="author-thumb">
                      <img src={author1} alt="Author" />
                    </div>
                    <div class="author-content">
                      <a class="name" href="#">
                        Pamela Foster
                      </a>
                      <span class="Enroll">286 Enrolled Students</span>
                    </div>
                  </div>
                  <div class="admin-rating">
                    <span class="rating-count">4.9</span>
                    <span class="rating-star">
                      <span class="rating-bar"></span>
                    </span>
                    <span class="rating-text">(5,764 Rating)</span>
                  </div>
                </div>
                <div class="courses-details-tab">
                  <div class="details-tab-menu">
                    <ul class="nav justify-content-center">
                      <li>
                        <button
                          class="active"
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
                  <div class="details-tab-content">
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="description">
                        <div class="tab-description">
                          <div class="description-wrapper">
                            <h3 class="tab-title">Description:</h3>
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
                          {/* <div class="description-wrapper">
                            <h3 class="tab-title">Curriculum:</h3>
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
                          <div class="description-wrapper">
                            <h3 class="tab-title">Certification:</h3>
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
                      <div class="tab-pane fade" id="instructors">
                        <div class="tab-instructors">
                          <h3 class="tab-title">Course Instructor:</h3>
                          <div class="row">
                            <div class="col-md-3 col-6">
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
                                  <span class="designation">
                                    MSC, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 col-6">
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
                                  <span class="designation">
                                    BBA, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 col-6">
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
                                  <span class="designation">
                                    MBA, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 col-6">
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
                                  <span class="designation">
                                    BBS, Instructor
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row gx-10">
                            <div class="col-lg-6">
                              <div class="tab-rating-content">
                                <h3 class="tab-title">Rating:</h3>
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
                            <div class="col-lg-6">
                              <div class="tab-rating-box">
                                <span class="count">
                                  4.8 <i class="icofont-star"></i>
                                </span>
                                <p>Rating (86K+)</p>
                                <div class="rating-box-wrapper">
                                  <div class="single-rating">
                                    <span class="rating-star">
                                      <span class="rating-bar"></span>
                                    </span>
                                    <div class="rating-progress-bar">
                                      <div class="rating-line"></div>
                                    </div>
                                  </div>
                                  <div class="single-rating">
                                    <span class="rating-star">
                                      <span class="rating-bar"></span>
                                    </span>
                                    <div class="rating-progress-bar">
                                      <div class="rating-line"></div>
                                    </div>
                                  </div>
                                  <div class="single-rating">
                                    <span class="rating-star">
                                      <span class="rating-bar"></span>
                                    </span>
                                    <div class="rating-progress-bar">
                                      <div class="rating-line"></div>
                                    </div>
                                  </div>
                                  <div class="single-rating">
                                    <span class="rating-star">
                                      <span class="rating-bar"></span>
                                    </span>
                                    <div class="rating-progress-bar">
                                      <div class="rating-line"></div>
                                    </div>
                                  </div>
                                  <div class="single-rating">
                                    <span class="rating-star">
                                      <span class="rating-bar"></span>
                                    </span>
                                    <div class="rating-progress-bar">
                                      <div class="rating-line"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="reviews">
                        <div class="tab-reviews">
                          <h3 class="tab-title">Student Reviews:</h3>
                          <div class="reviews-wrapper reviews-active">
                            <div class="swiper-container">
                              <div class="swiper-wrapper">
                                <div class="single-review swiper-slide">
                                  <div class="review-author">
                                    <div class="author-thumb">
                                      <img src={author6} alt="Author" />
                                      <i class="icofont-quote-left"></i>
                                    </div>
                                    <div class="author-content">
                                      <h4 class="name">Sara Alexander</h4>
                                      <span class="designation">
                                        Product Designer, USA
                                      </span>
                                      <span class="rating-star">
                                        <span class="rating-bar"></span>
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
                                <div class="single-review swiper-slide">
                                  <div class="review-author">
                                    <div class="author-thumb">
                                      <img src={author7} alt="Author" />
                                      <i class="icofont-quote-left"></i>
                                    </div>
                                    <div class="author-content">
                                      <h4 class="name">Karol Bachman</h4>
                                      <span class="designation">
                                        Product Designer, USA
                                      </span>
                                      <span class="rating-star">
                                        <span class="rating-bar"></span>
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
                                <div class="single-review swiper-slide">
                                  <div class="review-author">
                                    <div class="author-thumb">
                                      <img src={author3} alt="Author" />
                                      <i class="icofont-quote-left"></i>
                                    </div>
                                    <div class="author-content">
                                      <h4 class="name">Gertude Culbertson</h4>
                                      <span class="designation">
                                        Product Designer, USA
                                      </span>
                                      <span class="rating-star">
                                        <span class="rating-bar"></span>
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
                              =<div class="swiper-pagination"></div>
                            </div>
                          </div>
                          <div class="reviews-btn">
                            <button
                              type="button"
                              class="btn btn-primary btn-hover-dark"
                              data-bs-toggle="modal"
                              data-bs-target="#reviewsModal"
                            >
                              Write A Review
                            </button>
                          </div>
                          <div class="modal fade" id="reviewsModal">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title">Add a Review</h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body reviews-form">
                                  <form action="#">
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="single-form">
                                          <input
                                            type="text"
                                            placeholder="Enter your name"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="single-form">
                                          <input
                                            type="text"
                                            placeholder="Enter your Email"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <div class="reviews-rating">
                                          <label>Rating</label>
                                          <ul id="rating" class="rating">
                                            <li
                                              class="star"
                                              title="Poor"
                                              data-value="1"
                                            >
                                              <i class="icofont-star"></i>
                                            </li>
                                            <li
                                              class="star"
                                              title="Poor"
                                              data-value="2"
                                            >
                                              <i class="icofont-star"></i>
                                            </li>
                                            <li
                                              class="star"
                                              title="Poor"
                                              data-value="3"
                                            >
                                              <i class="icofont-star"></i>
                                            </li>
                                            <li
                                              class="star"
                                              title="Poor"
                                              data-value="4"
                                            >
                                              <i class="icofont-star"></i>
                                            </li>
                                            <li
                                              class="star"
                                              title="Poor"
                                              data-value="5"
                                            >
                                              <i class="icofont-star"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <div class="single-form">
                                          <textarea placeholder="Write your comments here"></textarea>
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <div class="single-form">
                                          <button class="btn btn-primary btn-hover-dark">
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
            {coursesinf.map((item) => (

            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar-widget widget-information">
               

                  <div class="info-price">
                    <span class="price">${item.price}</span>
                  </div>
                  <div class="info-list">
                    <ul>
                      <li>
                        <i class="icofont-man-in-glasses"></i>{" "}
                        <strong>Instructor</strong> <span>{item.instructor}</span>
                      </li>
                     
                      <li>
                        <i class="icofont-ui-video-play"></i>{" "}
                        <strong>Lectures</strong> <span>{item.lecture}</span>
                      </li>
                    
                      <li>
                        <i class="icofont-book-alt"></i>{" "}
                        <strong>Language</strong> <span>{item.Language}</span>
                      </li>
                      <li>
                        <i class="icofont-certificate-alt-1"></i>{" "}
                        <strong>Certificate</strong> <span>{item.Certificate}</span>
                      </li>
                    </ul>
                  </div>
              

                  <div class="info-btn">
                    <a href="#" class="btn btn-primary btn-hover-dark">
                      Enroll Now
                    </a>
                  </div>
                </div>
                <div class="sidebar-widget">
                  <h4 class="widget-title">Share Course:</h4>
                  <ul class="social">
                    <li>
                      <a href="#">
                        <i class="flaticon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div><Advertise /></div>
      <div><Footer /></div>
    </>
  );
}
export default FreeCourse;
