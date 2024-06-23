import React, { useState, useEffect } from "react";
import axios from "axios";

import detail1 from "../../assets/images/courses/courses-details.jpg";
import detail2 from "../../assets/images/courses/circle-shape.png";
import courseImg1 from "../../assets/images/courses/courses-14.jpg";
import courseImg2 from "../../assets/images/courses/courses-13.jpg";
import courseImg3 from "../../assets/images/courses/courses-16.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";
import courseImg5 from "../../assets/images/courses/courses-15.jpg";
import courseImg6 from "../../assets/images/courses/courses-06.jpg";
import courseImg7 from "../../assets/images/courses/courses-07.jpg";
import courseImg8 from "../../assets/images/courses/courses-08.jpg";
import courseImg9 from "../../assets/images/courses/courses-09.jpg";
import courseImg10 from "../../assets/images/courses/courses-10.jpg";
import courseImg11 from "../../assets/images/courses/courses-11.jpg";
import courseImg12 from "../../assets/images/courses/courses-12.jpg";


import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-04.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-06.jpg";
import author6 from "../../assets/images/author/author-17.jpg";
import author7 from "../../assets/images/author/author-18.jpg";
import author8 from "../../assets/images/author/author-19.jpg";
import author9 from "../../assets/images/author/author-20.jpg";
import author10 from "../../assets/images/author/author-01.jpg";
import author11 from "../../assets/images/author/author-06.jpg";
import author12 from "../../assets/images/author/author-24.jpg";
import author13 from "../../assets/images/author/author-21.jpg";
import author14 from "../../assets/images/author/author-22.jpg";
import author15 from "../../assets/images/author/author-23.jpg";import Advertise from "../advertise"
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
import { useParams } from 'react-router-dom';

const coursesinf = [
  {
    id: 1, title: 'Data Science and Machine Learning with Python - Hands On!', instructor: 'John Doe', lecture: '29', price: '428', Language: 'English',
    Certificate: 'Yes', image:courseImg1,imageIns:author1
  },
  {
    id: 2, title: 'Create Amazing Color Schemes for Your UX Design Projects', instructor: 'Jemi Smith', lecture: '29', price: '400', Language: 'English',
    Certificate: 'Yes', image:courseImg2,imageIns:author2
  },
  {
    id: 3, title: 'Finance Series: Learn to Budget and Calculate your Net Worth.', instructor: 'lary Brown', lecture: '29', price: '348', Language: 'English',
    Certificate: 'Yes', image:courseImg5,imageIns:author3
  },
  {
    id: 4, title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape', instructor: 'Michael Clark', lecture: '29', price: '499', Language: 'English',
    Certificate: 'Yes', image:courseImg11,imageIns:author4
  },
  {
    id: 5, title: 'Effective Communication Skills for Managers', instructor: 'Lan Garcia', lecture: '29', price: '295', Language: 'English',
    Certificate: 'Yes', image:courseImg12,imageIns:author5
  },
  {
    id: 6, title: 'Practical Project Management: Strategies and Tools', instructor: 'Tim Lee', lecture: '29', price: '299', Language: 'English',
    Certificate: 'Yes', image:courseImg9,imageIns:author6
  },
  {
    id: 7, title: 'Web Development Bootcamp with HTML, CSS, and JavaScript', instructor: 'James Martinez', lecture: '29', price: '399', Language: 'English',
    Certificate: 'Yes', image:courseImg8,imageIns:author7
  },
  {
    id: 8, title: 'The Art of Public Speaking', instructor: 'Daniel Harris', lecture: '29', price: '428', Language: 'English',
    Certificate: 'Yes', image:courseImg3,imageIns:author8
  },
  {
    id: 9, title: 'Digital Photography: Learn Your Camera and Take Stunning Photos', instructor: 'Christopher Wilson', lecture: '29', price: '200', Language: 'English',
    Certificate: 'Yes', image:courseImg10,imageIns:author9
  }
]



    


function FreeCourse() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('UserToken');

      if (!token) {
        console.error('No authentication token found');
        // You might want to redirect to the login page or handle this case accordingly
        return;
      }

      const response = await axios.get('https://localhost:7225/api/Course/AllCoures', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Getdata successful', response.data);
      setApplications(response.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error during getting data', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
        fetchApplications();
    }, []); // Empty dependency array means this effect runs once when the component mounts

  const { id } = useParams();
  const course = applications.find(c => c.id === parseInt(id));

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
            {loading ? (<div className="loading">Loading...</div>) : (<>
            <div class="col-lg-8">
              <div class="courses-details">
                <div class="courses-details-images">
                  <img src={course.image} alt="Courses Details" />
                  <span class="tags">{course.subject}</span>
                  <div class="courses-play">
                    <img src={detail2} alt="Play" />
                      <a
                        class="play video-popup"
                        href={course.link}
                    >
                      <i class="flaticon-play"></i>
                    </a>
                  </div>
                </div>
                <h2 class="title">
                 {course.courseName}
                </h2>
                <div class="courses-details-admin">
                  <div class="admin-author">
                    <div class="author-thumb">
                      <img src={course.teacherImage} alt="Author" />
                    </div>
                    <div class="author-content">
                      <a class="name" href="#">
                       {course.teacherName}
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
                            {course.courseDescription}
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
          

              <div class="col-lg-4">
                <div class="sidebar">
                  <div class="sidebar-widget widget-information">


                    <div class="info-price">
                      <span class="price">${course.cost}</span>
                    </div>
                    <div class="info-list">
                      <ul>
                        <li>
                          <i class="icofont-man-in-glasses"></i>{" "}
                          <strong>Instructor</strong> <span>{course.teacherName}</span>
                        </li>

                        <li>
                          <i class="icofont-ui-video-play"></i>{" "}
                          <strong>Lectures</strong> <span>1</span>
                        </li>

                        <li>
                          <i class="icofont-book-alt"></i>{" "}
                          <strong>Language</strong> <span>{course.language}</span>
                        </li>
                        <li>
                          <i class="icofont-certificate-alt-1"></i>{" "}
                          <strong>Certificate</strong> <span>Yes</span>
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
              </>
              ) }
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