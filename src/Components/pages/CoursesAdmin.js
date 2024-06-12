import React from "react";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-03.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-05.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import author8 from "../../assets/images/author/author-08.jpg";
import author9 from "../../assets/images/author/author-09.jpg";
import author10 from "../../assets/images/author/author-10.jpg";

import icon1 from "../../assets/images/resources-icon/icon-2-1.png";
import icon2 from "../../assets/images/resources-icon/icon-2-2.png";
import icon3 from "../../assets/images/resources-icon/icon-2-3.png";
import icon4 from "../../assets/images/resources-icon/icon-2-4.png";
import icon5 from "../../assets/images/resources-icon/icon-2-5.png";
import icon6 from "../../assets/images/menu-icon/icon-6.png";

import courseImg1 from "../../assets/images/courses/courses-01.jpg";
import courseImg2 from "../../assets/images/courses/courses-02.jpg";
import courseImg3 from "../../assets/images/courses/courses-03.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";
import courseImg5 from "../../assets/images/courses/courses-05.jpg";
import courseImg6 from "../../assets/images/courses/courses-05.jpg";
import slider1 from "../../assets/images/slider/slider-1.png";
import shape1 from "../../assets/images/shape/shape-1.png"
import Shape2 from "../../assets/images/shape/shape-2.png"
import Shape3 from "../../assets/images/shape/shape-3.png"
import Shape4 from "../../assets/images/shape/shape-4.png"
import Shape5 from "../../assets/images/shape/shape-5.png"
import Shape6 from "../../assets/images/shape/shape-6.png"
import Shape7 from "../../assets/images/shape/shape-7.png"
import Shape8 from "../../assets/images/shape/shape-8.png"
import Shape9 from "../../assets/images/shape/shape-9.png"
import Shape10 from "../../assets/images/shape/shape-10.png"
import Shape11 from "../../assets/images/shape/shape-11.png"
import shape12 from "../../assets/images/shape/shape-12.png"
import Shape13 from "../../assets/images/shape/shape-13.png"
import shape14 from "../../assets/images/shape/shape-14.png"
import Shape15 from "../../assets/images/shape/shape-15.png"
import Shape16 from "../../assets/images/shape/shape-16.png"
import Shape17 from "../../assets/images/shape/shape-17.png"
import Shape18 from "../../assets/images/shape/shape-18.png"
import course1 from "../../assets/images/courses/admin-courses-01.jpg"
import "../../Styles/plugins/icofont.min.css";
import "../../Styles/plugins/animate.min.css";
import "../../Styles/plugins/swiper-bundle.min.css";
import "../../Styles/plugins/magnific-popup.css";
import "../../Styles/plugins/nice-select.css";
import "../../Styles/plugins/apexcharts.css";
import "../../Styles/plugins/jqvmap.min.css";
import "../../Styles/Contact.css";
import Footer from "../Footer";
import AdminHeader from "../AdminHeader";
function CoursesAdmin() {
    const courses = [
        {
            itemThumb: course1,
            alt: "Courses",
            meta: ["Live", "Free", "Public"],
            title: "Build An eCommerce Site With WooCommerce and WooLentor",
            earned: "$5,68.00",
            enrollments: "1,852",
            rating: 4.5,
            ratingBarWidth: "80%"
        },
        {
            itemThumb: course1,
            alt: "Courses",
            meta: ["Live", "Paid", "Private"],
            title: "Learn React for Beginners",
            earned: "$3,200.00",
            enrollments: "2,135",
            rating: 4.7,
            ratingBarWidth: "94%"
        },
        {
            itemThumb: course1,
            alt: "Courses",
            meta: ["On-Demand", "Free", "Public"],
            title: "Mastering Python Programming",
            earned: "$7,450.00",
            enrollments: "5,728",
            rating: 4.9,
            ratingBarWidth: "98%"
        },
        {
            itemThumb: course1,
            alt: "Courses",
            meta: ["Live", "Paid", "Public"],
            title: "Advanced JavaScript Techniques",
            earned: "$2,870.00",
            enrollments: "1,420",
            rating: 4.6,
            ratingBarWidth: "92%"
        },
        {
            itemThumb: course1,
            alt: "Courses",
            meta: ["Live", "Free", "Private"],
            title: "Design Principles for Beginners",
            earned: "$4,500.00",
            enrollments: "3,980",
            rating: 4.8,
            ratingBarWidth: "96%"
        },
        {
            itemThumb: course1,
            alt: "Courses",
            meta: ["On-Demand", "Paid", "Public"],
            title: "Introduction to Machine Learning",
            earned: "$6,200.00",
            enrollments: "4,120",
            rating: 4.7,
            ratingBarWidth: "94%"
        }
    ];
    return (
        <>
            <div><AdminHeader /></div>
            <div class="section overflow-hidden position-relative" id="wrapper">
                <div class="page-content-wrapper">
                    <div class="container-fluid custom-container">
                        {/* <!-- Admin Courses Tab Start -->*/}
                        <div class="admin-courses-tab">
                            <h3 class="title">Courses</h3>
                            <div class="courses-tab-wrapper">
                                <div class="tab-btn">
                                    <a href="CreateCourse" class="btn btn-primary btn-hover-dark">New Course</a>
                                </div>
                            </div>
                        </div>
                        <div class="admin-courses-tab-content">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab1">
                                    {courses.map((item)=>(
                                    <div class="courses-item">
                                        <div class="item-thumb">
                                            <a href="#">
                                                <img src={item.itemThumb} alt={item.alt} />
                                            </a>
                                        </div>
                                        <div class="content-title">
                                            <div class="meta">
                                                <a href="#" class="action">{item.meta[0]}</a>
                                                <a href="#" class="action">{item.meta[1]}</a>
                                                <a href="#" class="action">{item.meta[2]}</a>
                                            </div>
                                            <h3 class="title"><a href="#">{item.title}.</a></h3>
                                        </div>
                                        <div class="content-wrapper">
                                            <div class="content-box">
                                                <p>Earned</p>
                                                <span class="count">{item.earned}</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Enrollment’s</p>
                                                <span class="count">{item.enrollments}</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Course Rating</p>
                                                <span class="count">
                                                {item.rating}
                                                    <span class="rating-star">
                                                        <span class="rating-bar" style={{width: '80%'}}></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    ))  };
                                    {/* <div class="courses-item">
                                        <div class="item-thumb">
                                            <a href="#">
                                                <img src={course1} alt="Courses" />
                                            </a>
                                        </div>
                                        <div class="content-title">
                                            <div class="meta">
                                                <a href="#" class="action">Live</a>
                                                <a href="#" class="action">Paid</a>
                                                <a href="#" class="action">Private</a>
                                            </div>
                                            <h3 class="title"><a href="#">Learn React for Beginners</a></h3>
                                        </div>
                                        <div class="content-wrapper">
                                            <div class="content-box">
                                                <p>Earned</p>
                                                <span class="count">$3,200.00</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Enrollment’s</p>
                                                <span class="count">2,135</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Course Rating</p>
                                                <span class="count">
                                                    4.7
                                                    <span class="rating-star">
                                                        <span class="rating-bar" style={{width: '94%'}}></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="courses-item">
                                        <div class="item-thumb">
                                            <a href="#">
                                                <img src={course1} alt="Courses" />
                                            </a>
                                        </div>
                                        <div class="content-title">
                                            <div class="meta">
                                                <a href="#" class="action">On-Demand</a>
                                                <a href="#" class="action">Free</a>
                                                <a href="#" class="action">Public</a>
                                            </div>
                                            <h3 class="title"><a href="#">Mastering Python Programming</a></h3>
                                        </div>
                                        <div class="content-wrapper">
                                            <div class="content-box">
                                                <p>Earned</p>
                                                <span class="count">$7,450.00</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Enrollment’s</p>
                                                <span class="count">5,728</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Course Rating</p>
                                                <span class="count">
                                                    4.9
                                                    <span class="rating-star">
                                                        <span class="rating-bar" style={{width: '98%'}}></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="courses-item">
                                        <div class="item-thumb">
                                            <a href="#">
                                                <img src={course1} alt="Courses" />
                                            </a>
                                        </div>
                                        <div class="content-title">
                                            <div class="meta">
                                                <a href="#" class="action">Live</a>
                                                <a href="#" class="action">Paid</a>
                                                <a href="#" class="action">Public</a>
                                            </div>
                                            <h3 class="title"><a href="#">Advanced JavaScript Techniques</a></h3>
                                        </div>
                                        <div class="content-wrapper">
                                            <div class="content-box">
                                                <p>Earned</p>
                                                <span class="count">$2,870.00</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Enrollment’s</p>
                                                <span class="count">1,420</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Course Rating</p>
                                                <span class="count">
                                                    4.6
                                                    <span class="rating-star">
                                                        <span class="rating-bar" style={{width: '92%'}}></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="courses-item">
                                        <div class="item-thumb">
                                            <a href="#">
                                                <img src={course1} alt="Courses" />
                                            </a>
                                        </div>
                                        <div class="content-title">
                                            <div class="meta">
                                                <a href="#" class="action">Live</a>
                                                <a href="#" class="action">Free</a>
                                                <a href="#" class="action">Private</a>
                                            </div>
                                            <h3 class="title"><a href="#">Design Principles for Beginners</a></h3>
                                        </div>
                                        <div class="content-wrapper">
                                            <div class="content-box">
                                                <p>Earned</p>
                                                <span class="count">$4,500.00</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Enrollment’s</p>
                                                <span class="count">3,980</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Course Rating</p>
                                                <span class="count">
                                                    4.8
                                                    <span class="rating-star">
                                                        <span class="rating-bar" style={{width: '96%'}}></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="courses-item">
                                        <div class="item-thumb">
                                            <a href="#">
                                                <img src={course1} alt="Courses" />
                                            </a>
                                        </div>
                                        <div class="content-title">
                                            <div class="meta">
                                                <a href="#" class="action">On-Demand</a>
                                                <a href="#" class="action">Paid</a>
                                                <a href="#" class="action">Public</a>
                                            </div>
                                            <h3 class="title"><a href="#">Introduction to Machine Learning</a></h3>
                                        </div>
                                        <div class="content-wrapper">
                                            <div class="content-box">
                                                <p>Earned</p>
                                                <span class="count">$6,200.00</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Enrollment’s</p>
                                                <span class="count">4,120</span>
                                            </div>
                                            <div class="content-box">
                                                <p>Course Rating</p>
                                                <span class="count">
                                                    4.7
                                                    <span class="rating-star">
                                                        <span class="rating-bar" style={{width: '94%'}}></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <div><Footer /></div>
        </>
    );
}
export default CoursesAdmin;
