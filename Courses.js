import React from "react";
import courseImg1 from "../assets/images/courses/courses-01.jpg";
import courseImg2 from "../assets/images/courses/courses-02.jpg";
import courseImg3 from "../assets/images/courses/courses-03.jpg";
import courseImg4 from "../assets/images/courses/courses-04.jpg";
import courseImg5 from "../assets/images/courses/courses-05.jpg";
import author1 from "../assets/images/author/author-01.jpg";
import author2 from "../assets/images/author/author-02.jpg";
import author3 from "../assets/images/author/author-03.jpg";
import author4 from "../assets/images/author/author-04.jpg";
import author5 from "../assets/images/author/author-05.jpg";
import "../Styles/Contact.css"
import CourseCard from "./CourseCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Courses() {
  return (
  <>
    <div class="section section-padding">
  <Navbar/>
        <div class="container">

           <div class="courses-category-wrapper">
                <div class="courses-search search-2">
                    <input type="text" placeholder="Search here"/>
                    <button><i class="icofont-search"></i></button>
                </div>

                <ul class="category-menu">
                    <li><a class="active" href="#">All Courses</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Archived</a></li>
                </ul>
            </div>

            <div class="courses-wrapper-02">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses">
                            <div class="courses-images">
                                <a href="courses-details.html"><img src={courseImg1} alt="Courses"/></a>

                                <div class="courses-option dropdown">
                                    <button class="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#"><i class="icofont-share-alt"></i> Share</a></li>
                                        <li><a href="#"><i class="icofont-plus"></i> Create Collection</a></li>
                                        <li><a href="#"><i class="icofont-star"></i> Favorite</a></li>
                                        <li><a href="#"><i class="icofont-archive"></i> Archive</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="courses-content">
                                <div class="courses-author">
                                    <div class="author">
                                        <div class="author-thumb">
                                            <a href="#"><img src={author1} alt="Author"/></a>
                                        </div>
                                        <div class="author-name">
                                            <a class="name" href="#">Jason Williams</a>
                                            <a class="name-2" href="#">Ohula Malsh</a>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>

                                <div class="courses-rating">
                                    <p>38% Complete</p>

                                    <div class="rating-progress-bar">
                                        <div class="rating-line" ></div>
                                    </div>

                                    <div class="rating-meta">
                                        <span class="rating-star">
                      <span class="rating-bar" ></span>
                                        </span>
                                        <p>Your rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses">
                            <div class="courses-images">
                                <a href="courses-details.html"><img src={courseImg2} alt="Courses"/></a>

                                <div class="courses-option dropdown">
                                    <button class="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#"><i class="icofont-share-alt"></i> Share</a></li>
                                        <li><a href="#"><i class="icofont-plus"></i> Create Collection</a></li>
                                        <li><a href="#"><i class="icofont-star"></i> Favorite</a></li>
                                        <li><a href="#"><i class="icofont-archive"></i> Archive</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="courses-content">
                                <div class="courses-author">
                                    <div class="author">
                                        <div class="author-thumb">
                                            <a href="#"><img src={author2} alt="Author"/></a>
                                        </div>
                                        <div class="author-name">
                                            <a class="name" href="#">Pamela Foster </a>
                                            <a class="name-2" href="#">Ohula Malsh</a>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

                                <div class="courses-rating">
                                    <p>80% Complete</p>

                                    <div class="rating-progress-bar">
                                        <div class="rating-line" ></div>
                                    </div>

                                    <div class="rating-meta">
                                        <span class="rating-star">
                      <span class="rating-bar" ></span>
                                        </span>
                                        <p><a href="#">Leave a rating</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses">
                            <div class="courses-images">
                                <a href="courses-details.html"><img src={courseImg3} alt="Courses"/></a>

                                <div class="courses-option dropdown">
                                    <button class="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#"><i class="icofont-share-alt"></i> Share</a></li>
                                        <li><a href="#"><i class="icofont-plus"></i> Create Collection</a></li>
                                        <li><a href="#"><i class="icofont-star"></i> Favorite</a></li>
                                        <li><a href="#"><i class="icofont-archive"></i> Archive</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="courses-content">
                                <div class="courses-author">
                                    <div class="author">
                                        <div class="author-thumb">
                                            <a href="#"><img src={author3} alt="Author"/></a>
                                        </div>
                                        <div class="author-name">
                                            <a class="name" href="#">Rose Simmons</a>
                                            <a class="name-2" href="#">Ohula Malsh</a>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>

                                <div class="courses-rating">
                                    <p>15% Complete</p>

                                    <div class="rating-progress-bar">
                                        <div class="rating-line" ></div>
                                    </div>

                                    <div class="rating-meta">
                                        <span class="rating-star">
                      <span class="rating-bar" ></span>
                                        </span>
                                        <p>Your rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses">
                            <div class="courses-images">
                                <a href="courses-details.html"><img src={courseImg4} alt="Courses"/></a>

                                <div class="courses-option dropdown">
                                    <button class="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#"><i class="icofont-share-alt"></i> Share</a></li>
                                        <li><a href="#"><i class="icofont-plus"></i> Create Collection</a></li>
                                        <li><a href="#"><i class="icofont-star"></i> Favorite</a></li>
                                        <li><a href="#"><i class="icofont-archive"></i> Archive</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="courses-content">
                                <div class="courses-author">
                                    <div class="author">
                                        <div class="author-thumb">
                                            <a href="#"><img src={author4} alt="Author"/></a>
                                        </div>
                                        <div class="author-name">
                                            <a class="name" href="#">Jason Williams</a>
                                            <a class="name-2" href="#">Ohula Malsh</a>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>

                                <div class="courses-rating">
                                    <p>45% Complete</p>

                                    <div class="rating-progress-bar">
                                        <div class="rating-line" ></div>
                                    </div>

                                    <div class="rating-meta">
                                        <span class="rating-star">
                      <span class="rating-bar" ></span>
                                        </span>
                                        <p>Your rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses">
                            <div class="courses-images">
                                <a href="courses-details.html"><img src={courseImg5} alt="Courses"/></a>

                                <div class="courses-option dropdown">
                                    <button class="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#"><i class="icofont-share-alt"></i> Share</a></li>
                                        <li><a href="#"><i class="icofont-plus"></i> Create Collection</a></li>
                                        <li><a href="#"><i class="icofont-star"></i> Favorite</a></li>
                                        <li><a href="#"><i class="icofont-archive"></i> Archive</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="courses-content">
                                <div class="courses-author">
                                    <div class="author">
                                        <div class="author-thumb">
                                            <a href="#"><img src={author5} alt="Author"/></a>
                                        </div>
                                        <div class="author-name">
                                            <a class="name" href="#">Pamela Foster</a>
                                            <a class="name-2" href="#">Ohula Malsh</a>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>

                                <div class="courses-rating">
                                    <p>38% Complete</p>

                                    <div class="rating-progress-bar">
                                        <div class="rating-line" ></div>
                                    </div>

                                    <div class="rating-meta">
                                        <span class="rating-star">
                      <span class="rating-bar" ></span>
                                        </span>
                                        <p>Your rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <Footer/>

        
    </>
  );
};

export default Courses;
