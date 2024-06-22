import React from "react";
import detail1 from "../../assets/images/courses/courses-details.jpg";
import detail2 from "../../assets/images/courses/circle-shape.png";
import courseImg03 from "../../assets/seo.png";
import courseImg04 from "../../assets/ui-ux.png";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-17.jpg";
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
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';

function FreeCourse() {
  const coursesinf = [
    {
      id: 1, title: 'Data Science and Machine Learning with Python - Hands On!', instructor: 'John Doe', lecture: '29', price: '428', Language: 'English',
      Certificate: 'Yes'
    }]

  const teamInfo = [
    {
      id: 1,
      name: 'bill James',
      designation: 'MSC, Instructor',
      rating: 4.9,
      ImageUrl: author1
    },
    {
      id: 2,
      name: 'mario Colon',
      designation: 'BBA, Instructor',
      rating: 4.9,
      ImageUrl: author2
    },
    {
      id: 3,
      name: 'Son Gordon',
      designation: 'MBA, Instructor',
      rating: 4.9,
      ImageUrl: author3
    },
    {
      id: 4,
      name: 'Archie Neal',
      designation: 'BBS, Instructor',
      rating: 4.9,
      ImageUrl: author4
    }
  ];
  const feedback = [
    {
      imagefeed: author7,
      Namefeed: 'Mohammed Ali',
      Nationfeed: 'POR',
      comment: 'This course has been a game-changer for me. Before enrolling, I struggled to manage my finances and felt overwhelmed by my debt. The lessons on budgeting and saving strategies have given me the tools I need to take control of my financial future. The instructors are knowledgeable and make complex topics easy to understand. I highly recommend this course to anyone looking to improve their financial literacy.'
    },
    {
      imagefeed: author6,
      Namefeed: 'Messi Roberts',
      Nationfeed: 'USA',
      comment: 'I was always intimidated by the idea of investing, but this course broke it down in a way that was accessible and practical. The step-by-step guidance on creating a budget and setting financial goals has been invaluable. I ve already started implementing what I ve learned and can see a positive impact on my finances. The real-world examples and practical exercises made a huge difference.'
    },


  ]
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
                            This comprehensive course is designed to help you master the essentials of budgeting and net worth calculation. You will learn practical strategies for managing your finances, setting financial goals, and making informed investment decisions. Our expert instructors provide clear, step-by-step guidance to ensure you understand and apply key concepts effectively. By the end of the course, you will have the tools and knowledge needed to take control of your financial future.
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
                      <div class="tab-pane fade" id="reviews">
                        <div class="tab-reviews">
                          <h3 class="tab-title">Student Reviews:</h3>
                          <div class="reviews-wrapper reviews-active">
                            <div class="swiper-container">
                              <div className="swiper-wrapper">
                                {feedback.map((item) => (
                                  <div className="single-testimonial  col-lg-5">

                                    <div className="testimonial-author">

                                      <div className="author-thumb">
                                        <img src={item.imagefeed} alt="Author" />
                                        <i className="icofont-quote-left"></i>
                                      </div>
                                      <span className="rating-star">
                                        <span className="rating-bar"></span>
                                      </span>
                                    </div>
                                    <div className="testimonial-content">
                                      <p>
                                        {item.comment}
                                      </p>
                                      <h4 className="name"> {item.Namefeed}</h4>
                                      <span className="designation">Product Designer,  {item.Nationfeed}</span>
                                    </div>
                                  </div>
                                ))};
                              </div>
                              <div class="swiper-pagination"></div>
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
                 <div class="lesson-btn">
                      <a href="lessons" class="btn btn-primary btn-hover-dark">
                       Lessons
                      </a>
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
export default FreeCourse;