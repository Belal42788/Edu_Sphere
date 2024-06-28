import React, { useState, useEffect } from "react";
import axios from "axios";
import courseImg1 from "../../assets/images/courses/courses-12.jpg";
import courseImg2 from "../../assets/images/courses/courses-17.jpg";
import courseImg3 from "../../assets/images/courses/courses-03.jpg";
import courseImg4 from "../../assets/images/courses/courses-04.jpg";

import courseImg10 from "../../assets/images/courses/courses-05.jpg";
import courseImg11 from "../../assets/images/courses/courses-05.jpg";
import courseImg12 from "../../assets/images/courses/courses-09.jpg";
import courseImg13 from "../../assets/images/courses/courses-05.jpg";
import courseImg14 from "../../assets/images/courses/courses-11.jpg";
import courseImg15 from "../../assets/images/courses/courses-10.jpg";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-22.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-23.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import author8 from "../../assets/images/author/author-06.jpg";
import author9 from "../../assets/images/author/author-01.jpg";
import author10 from "../../assets/images/author/author-01.jpg";
import author11 from "../../assets/images/author/author-06.jpg";
import author12 from "../../assets/images/author/author-01.jpg";
import author13 from "../../assets/images/author/author-24.jpg";
import author14 from "../../assets/images/author/author-02.jpg";
import author15 from "../../assets/images/author/author-04.jpg";
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
import { FaEllipsisH, FaStar } from 'react-icons/fa';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useNavigate } from 'react-router-dom';
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';


function MyCourses() {

    const navigate = useNavigate();
    const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('UserToken');

      if (!token) {
        console.error('No authentication token found');
        // You might want to redirect to the login page or handle this case accordingly
        return;
      }

      const response = await axios.get('https://localhost:7225/api/Student/MyCourses', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Getdata successful', response.data);
        setApplications(response.data);
    } catch (error) {
      console.error('Error during getting data', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  useEffect(() => {
        fetchApplications();
    }, []); // Empty dependency array means this effect runs once when the component mounts


    const coursesinf = [
        { id: 8, title: 'Effective Communication Skills for Managers', instructor: 'Laura Garcia', duration: '7 weeks', ImageUlrcourses: courseImg1, ImageUlrinstr: author8 },
        { id: 12, title: 'Advanced Excel Techniques for Data Analysis', instructor: 'Patricia Martinez', duration: '6 weeks', ImageUlrcourses: courseImg2, ImageUlrinstr: author12 },
        { id: 14, title: 'SEO Mastery: Boost Your Website’s Google Ranking', instructor: 'Karen Robinson', duration: '8 weeks', ImageUlrcourses: courseImg10, ImageUlrinstr: author14 },
        { id: 15, title: 'Creative Writing: Unlocking the Writer Within', instructor: 'Brian Lopez', duration: '7 weeks', ImageUlrcourses: courseImg3, ImageUlrinstr: author15 },
    ];
    
    return (
        <>
            <Navbar name='My' name2='courses' name3="MyCourses" />
            <div class="section section-padding">
                <div class="container">

                <div class="courses-category-wrapper">
                    <div class="courses-search search-2">
                        <input type="text" placeholder="Search here"/>
                        <button><i class="icofont-search"></i></button>
                    </div>

                    
                </div>


                
                <div class="courses-wrapper-02">
                    <div class="row">
                        {applications.map((item)=>(
                        <div class="col-lg-4 col-md-6">
                            <div class="single-courses">
                                <div class="courses-images">
                                    <a href="coursesdetails"><img src={item.image} alt="Courses"/></a>
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
                                                <a href="#"><img src={item.teacherImage}alt="Author"/></a>
                                            </div>
                                            <div class="author-name">
                                                <a class="name" href="#">{item.teacherName}</a>
                                                <a class="name-2" href="#">Ohula Malsh</a>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 class="title"><a href="courses-details.html">{item.courseName}</a></h4>

                                    <div class="courses-rating">
                                        <p>38% Complete</p>

                                        <div class="rating-progress-bar">
                                            <div class="rating-line"style={{width: '38%'}}></div>
                                        </div>

                                        <div class="rating-meta">
                                            <span class="rating-star">
													<span class="rating-bar" style={{width: '80%'}}></span>
                                            </span>
                                            <p>Your rating</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))};
                  
                    </div>
                </div>
 

                    
                </div>
            </div>
            <div><Advertise /></div>
            <div>
                <Footer /></div>
            <FloatingChatbot />
            <TidioChat />
        </>
    );
};
export default MyCourses;
