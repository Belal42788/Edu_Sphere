import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useNavigate } from 'react-router-dom';
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';


function MyCourses() {

        const navigate = useNavigate();
    const [sign, setSign] = useState(false);
    const [applications, setApplications] = useState([]);
    const [instructorImage, setInstructorImage] = useState("");
    const [instructorName, setInstructorName] = useState("");

    const fetchApplications = async () => {
        try {
            const token = localStorage.getItem('UserToken');
            const instructorImg = localStorage.getItem('Image');
            const instructorNm = localStorage.getItem('UserName');
            console.log(instructorImg);
            if (!token) {
                console.error('No authentication token found');
                // You might want to redirect to the login page or handle this case accordingly
                return;
            }
      
            const response = await axios.get('https://localhost:7225/api/Teacher/GetMyCourses', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
      
            console.log('Getdata successful', response.data);
            setSign(true);
            setApplications(response.data);
            setInstructorImage(instructorImg);
            setInstructorName(instructorNm);
            
            
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
                            {!sign ? 
                            coursesinf.map((item) => (
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
                            )): applications.map((item) => (
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="Coursedetails"><img style={{width:'40%'}} src={item.ImageUlrcourses} alt="Courses" /></a>
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
                                                        <a href="#"><img src={instructorImage} alt="Author" /></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">{instructorName}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="Coursedetails">{item.courseName}</a></h4>
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
            <FloatingChatbot />
            <TidioChat />
        </>
    );
};
export default MyCourses;
