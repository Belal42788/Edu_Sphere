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
    return (
        <>
            <div><AdminHeader /></div>
            {/* <!-- Courses Admin Start -->*/}
            <div className="section overflow-hidden position-relative" id="wrapper">
                {/* <!-- Page Content Wrapper Start -->*/}
                <div className="page-content-wrapper">
                    <div className="container-fluid custom-container">
                        {/* <!-- Admin Courses Tab Start -->*/}
                        <div className="admin-courses-tab">
                            <h3 className="title">Courses</h3>
                            <div className="courses-tab-wrapper">
                                <div className="tab-btn">
                                    <a href="#" className="btn btn-primary btn-hover-dark">New Course</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Admin Courses Tab End -->*/}
                        {/* <!-- Admin Courses Tab Content Start -->*/}
                        <div className="admin-courses-tab-content">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1">
                                    {/* <!-- Courses Item Start --> */}
<div className="courses-item">
    <div className="item-thumb">
        <a href="#">
            <img src={course1} alt="Courses" />
        </a>
    </div>
    <div className="content-title">
        <div className="meta">
            <a href="#" className="action">Live</a>
            <a href="#" className="action">Free</a>
            <a href="#" className="action">Public</a>
        </div>
        <h3 className="title"><a href="#">Build An eCommerce Site With WooCommerce and WooLentor.</a></h3>
    </div>
    <div className="content-wrapper">
        <div className="content-box">
            <p>Earned</p>
            <span className="count">$5,68.00</span>
        </div>
        <div className="content-box">
            <p>Enrollment’s</p>
            <span className="count">1,852</span>
        </div>
        <div className="content-box">
            <p>Course Rating</p>
            <span className="count">
                4.5
                <span className="rating-star">
                    <span className="rating-bar" style={{width: '80%'}}></span>
                </span>
            </span>
        </div>
    </div>
</div>
{/* <!-- Courses Item End --> */}

{/* <!-- Courses Item Start --> */}
<div className="courses-item">
    <div className="item-thumb">
        <a href="#">
            <img src={course1} alt="Courses" />
        </a>
    </div>
    <div className="content-title">
        <div className="meta">
            <a href="#" className="action">Live</a>
            <a href="#" className="action">Paid</a>
            <a href="#" className="action">Private</a>
        </div>
        <h3 className="title"><a href="#">Learn React for Beginners</a></h3>
    </div>
    <div className="content-wrapper">
        <div className="content-box">
            <p>Earned</p>
            <span className="count">$3,200.00</span>
        </div>
        <div className="content-box">
            <p>Enrollment’s</p>
            <span className="count">2,135</span>
        </div>
        <div className="content-box">
            <p>Course Rating</p>
            <span className="count">
                4.7
                <span className="rating-star">
                    <span className="rating-bar" style={{width: '94%'}}></span>
                </span>
            </span>
        </div>
    </div>
</div>
{/* <!-- Courses Item End --> */}

{/* <!-- Courses Item Start --> */}
<div className="courses-item">
    <div className="item-thumb">
        <a href="#">
            <img src={course1} alt="Courses" />
        </a>
    </div>
    <div className="content-title">
        <div className="meta">
            <a href="#" className="action">On-Demand</a>
            <a href="#" className="action">Free</a>
            <a href="#" className="action">Public</a>
        </div>
        <h3 className="title"><a href="#">Mastering Python Programming</a></h3>
    </div>
    <div className="content-wrapper">
        <div className="content-box">
            <p>Earned</p>
            <span className="count">$7,450.00</span>
        </div>
        <div className="content-box">
            <p>Enrollment’s</p>
            <span className="count">5,728</span>
        </div>
        <div className="content-box">
            <p>Course Rating</p>
            <span className="count">
                4.9
                <span className="rating-star">
                    <span className="rating-bar" style={{width: '98%'}}></span>
                </span>
            </span>
        </div>
    </div>
</div>
{/* <!-- Courses Item End --> */}

{/* <!-- Courses Item Start --> */}
<div className="courses-item">
    <div className="item-thumb">
        <a href="#">
            <img src={course1} alt="Courses" />
        </a>
    </div>
    <div className="content-title">
        <div className="meta">
            <a href="#" className="action">Live</a>
            <a href="#" className="action">Paid</a>
            <a href="#" className="action">Public</a>
        </div>
        <h3 className="title"><a href="#">Advanced JavaScript Techniques</a></h3>
    </div>
    <div className="content-wrapper">
        <div className="content-box">
            <p>Earned</p>
            <span className="count">$2,870.00</span>
        </div>
        <div className="content-box">
            <p>Enrollment’s</p>
            <span className="count">1,420</span>
        </div>
        <div className="content-box">
            <p>Course Rating</p>
            <span className="count">
                4.6
                <span className="rating-star">
                    <span className="rating-bar" style={{width: '92%'}}></span>
                </span>
            </span>
        </div>
    </div>
</div>
{/* <!-- Courses Item End --> */}

{/* <!-- Courses Item Start --> */}
<div className="courses-item">
    <div className="item-thumb">
        <a href="#">
            <img src={course1} alt="Courses" />
        </a>
    </div>
    <div className="content-title">
        <div className="meta">
            <a href="#" className="action">Live</a>
            <a href="#" className="action">Free</a>
            <a href="#" className="action">Private</a>
        </div>
        <h3 className="title"><a href="#">Design Principles for Beginners</a></h3>
    </div>
    <div className="content-wrapper">
        <div className="content-box">
            <p>Earned</p>
            <span className="count">$4,500.00</span>
        </div>
        <div className="content-box">
            <p>Enrollment’s</p>
            <span className="count">3,980</span>
        </div>
        <div className="content-box">
            <p>Course Rating</p>
            <span className="count">
                4.8
                <span className="rating-star">
                    <span className="rating-bar" style={{width: '96%'}}></span>
                </span>
            </span>
        </div>
    </div>
</div>
{/* <!-- Courses Item End --> */}

{/* <!-- Courses Item Start --> */}
<div className="courses-item">
    <div className="item-thumb">
        <a href="#">
            <img src={course1} alt="Courses" />
        </a>
    </div>
    <div className="content-title">
        <div className="meta">
            <a href="#" className="action">On-Demand</a>
            <a href="#" className="action">Paid</a>
            <a href="#" className="action">Public</a>
        </div>
        <h3 className="title"><a href="#">Introduction to Machine Learning</a></h3>
    </div>
    <div className="content-wrapper">
        <div className="content-box">
            <p>Earned</p>
            <span className="count">$6,200.00</span>
        </div>
        <div className="content-box">
            <p>Enrollment’s</p>
            <span className="count">4,120</span>
        </div>
        <div className="content-box">
            <p>Course Rating</p>
            <span className="count">
                4.7
                <span className="rating-star">
                    <span className="rating-bar" style={{width: '94%'}}></span>
                </span>
            </span>
        </div>
    </div>
</div>
{/* <!-- Courses Item End --> */}

                                </div>
                            </div>
                        </div>
                        {/* <!-- Admin Courses Tab Content End -->*/}
                    </div>
                </div>
                {/* <!-- Page Content Wrapper End -->*/}
            </div>
            {/* <!-- Courses Admin End -->*/}
            <div><Footer /></div>
        </>
    );
}
export default CoursesAdmin;
