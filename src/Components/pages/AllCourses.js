import React from "react";
import courseImg1 from "../../assets/images/courses/courses-01.jpg";
import courseImg2 from "../../assets/images/courses/courses-02.jpg";
import courseImg3 from "../../assets/images/courses/courses-03.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";
import courseImg5 from "../../assets/images/courses/courses-05.jpg";
import courseImg6 from "../../assets/images/courses/courses-05.jpg";
import courseImg7 from "../../assets/images/courses/courses-05.jpg";
import courseImg8 from "../../assets/images/courses/courses-05.jpg";
import courseImg9 from "../../assets/images/courses/courses-05.jpg";
import courseImg10 from "../../assets/images/courses/courses-05.jpg";
import courseImg11 from "../../assets/images/courses/courses-05.jpg";
import courseImg12 from "../../assets/images/courses/courses-05.jpg";
import courseImg13 from "../../assets/images/courses/courses-05.jpg";
import courseImg14 from "../../assets/images/courses/courses-05.jpg";
import courseImg15 from "../../assets/images/courses/courses-05.jpg";
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
import author11 from "../../assets/images/author/author-11.jpg";
import author12 from "../../assets/images/author/author-12.jpg";
import author13 from "../../assets/images/author/author-13.jpg";
import author14 from "../../assets/images/author/author-14.jpg";
import author15 from "../../assets/images/author/author-15.jpg";
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
        { id: 6, title: 'Introduction to Cybersecurity', instructor: 'Sarah Williams', duration: '3 weeks', ImageUlrcourses: courseImg6, ImageUlrinstr: author6 },
        { id: 7, title: 'Mastering Adobe Photoshop for Beginners', instructor: 'David Miller', duration: '4 weeks', ImageUlrcourses: courseImg7, ImageUlrinstr: author7 },
        { id: 8, title: 'Effective Communication Skills for Managers', instructor: 'Laura Garcia', duration: '7 weeks', ImageUlrcourses: courseImg8, ImageUlrinstr: author8 },
        { id: 9, title: 'Web Development Bootcamp with HTML, CSS, and JavaScript', instructor: 'James Martinez', duration: '10 weeks', ImageUlrcourses: courseImg9, ImageUlrinstr: author9 },
        { id: 10, title: 'Practical Project Management: Strategies and Tools', instructor: 'Jessica Lee', duration: '5 weeks', ImageUlrcourses: courseImg10, ImageUlrinstr: author10 },
        { id: 11, title: 'The Art of Public Speaking', instructor: 'Daniel Harris', duration: '4 weeks', ImageUlrcourses: courseImg11, ImageUlrinstr: author11 },
        { id: 12, title: 'Advanced Excel Techniques for Data Analysis', instructor: 'Patricia Martinez', duration: '6 weeks', ImageUlrcourses: courseImg12, ImageUlrinstr: author12 },
        { id: 13, title: 'Digital Photography: Learn Your Camera and Take Stunning Photos', instructor: 'Christopher Wilson', duration: '5 weeks', ImageUlrcourses: courseImg13, ImageUlrinstr: author13 },
        { id: 14, title: 'SEO Mastery: Boost Your Website’s Google Ranking', instructor: 'Karen Robinson', duration: '8 weeks', ImageUlrcourses: courseImg14, ImageUlrinstr: author14 },
        { id: 15, title: 'Creative Writing: Unlocking the Writer Within', instructor: 'Brian Lopez', duration: '7 weeks', ImageUlrcourses: courseImg15, ImageUlrinstr: author15 },
    ];
    
    return (
        <>
            <Navbar name='All' name2='courses' name3="courses" />
            <div className="section section-padding">
                <div className="container">
                    <div className="courses-wrapper-02">
                        <div className="row">
                            {coursesinf.map((item) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-courses">
                                        <div className="courses-images">
                                            <a href="Coursedetails"><img src={item.ImageUlrcourses} alt="Courses" /></a>
                                            <div className="courses-option dropdown">
                                                <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#"><i className="icofont-share-alt"></i> Share</a></li>
                                                    <li><a href="#"><i className="icofont-plus"></i> Create Collection</a></li>
                                                    <li><a href="#"><i className="icofont-star"></i> Favorite</a></li>
                                                    <li><a href="#"><i className="icofont-archive"></i> Archive</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#"><img src={item.ImageUlrinstr} alt="Author" /></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#">{item.instructor}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="title"><a href="Coursedetails">{item.title}</a></h4>
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
