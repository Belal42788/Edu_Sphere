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
function MyCourses() {
    const coursesinf = [
        { id: 8, title: 'Effective Communication Skills for Managers', instructor: 'Laura Garcia', duration: '7 weeks', ImageUlrcourses: courseImg8, ImageUlrinstr: author8 },
        { id: 12, title: 'Advanced Excel Techniques for Data Analysis', instructor: 'Patricia Martinez', duration: '6 weeks', ImageUlrcourses: courseImg12, ImageUlrinstr: author12 },
        { id: 14, title: 'SEO Mastery: Boost Your Website’s Google Ranking', instructor: 'Karen Robinson', duration: '8 weeks', ImageUlrcourses: courseImg14, ImageUlrinstr: author14 },
        { id: 15, title: 'Creative Writing: Unlocking the Writer Within', instructor: 'Brian Lopez', duration: '7 weeks', ImageUlrcourses: courseImg15, ImageUlrinstr: author15 },
    ];
    
    return (
        <>
            <Navbar name='My' name2='courses' name3="MyCourses" />
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
export default MyCourses;
