import React from "react";
import courseImg1 from "../../assets/images/courses/courses-01.jpg";
import courseImg2 from "../../assets/images/courses/courses-02.jpg";
import courseImg3 from "../../assets/images/courses/courses-03.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";
import courseImg5 from "../../assets/images/courses/courses-05.jpg";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-03.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-05.jpg";
import "../../Styles/Contact.css"
import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise"
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/icofont.min.css'
import '../../Styles/plugins/animate.min.css'
import '../../Styles/plugins/swiper-bundle.min.css'
import '../../Styles/plugins/magnific-popup.css'
import '../../Styles/plugins/nice-select.css'
import '../../Styles/plugins/apexcharts.css'
import '../../Styles/plugins/jqvmap.min.css'
function Courses() {
    const coursesinf = [
        { id: 1, title: 'Data Science and Machine Learning with Python - Hands On!', instructor: 'John Doe', duration: '4 weeks', ImageUlrcourses: courseImg1, ImageUlrinstr: author1 },
        { id: 2, title: 'Create Amazing Color Schemes for Your UX Design Projects', instructor: 'Jane Smith', duration: '6 weeks', ImageUlrcourses: courseImg2, ImageUlrinstr: author2 },
        { id: 3, title: 'Culture & Leadership: Strategies for a Successful Business', instructor: 'Alex Johnson', duration: '5 weeks', ImageUlrcourses: courseImg3, ImageUlrinstr: author3 },
        { id: 4, title: 'Finance Series: Learn to Budget and Calculate your Net Worth.', instructor: 'Emily Brown', duration: '8 weeks', ImageUlrcourses: courseImg4, ImageUlrinstr: author4 },
        { id: 5, title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape', instructor: 'Michael Clark', duration: '6 weeks', ImageUlrcourses: courseImg5, ImageUlrinstr: author5 },
    ];
    return (
        <>
            <Navbar name='my' name2='courses' name3="courses" />
            <div class="section section-padding">
                <div class="container">
                    <div class="courses-wrapper-02">
                        <div class="row">
                            {coursesinf.map((item) => (
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="Coursedetails"><img src={item.ImageUlrcourses} alt="Courses" /></a>
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
                                                        <a href="#"><img src={item.ImageUlrinstr} alt="Author" /></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">{item.instructor}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="Coursedetails">{item.title}</a></h4>
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div><Advertise /></div>
            <div>
                <Footer /></div>
        </>
    );
};
export default Courses;
