import React, { useState, useEffect } from "react";
import axios from "axios";

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
import author15 from "../../assets/images/author/author-23.jpg";
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
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';

function Courses() {
    const [sign, setSign] = useState(false);
    const [applications, setApplications] = useState([]);
    const [instructorImage, setInstructorImage] = useState("");
    const [instructorName, setInstructorName] = useState("");

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
            setSign(true);
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
        { id: 1, title: 'Data Science and Machine Learning with Python - Hands On!', instructor: 'John Doe', duration: '4 weeks', ImageUlrcourses: courseImg1, ImageUlrinstr: author1 },
        { id: 2, title: 'Create Amazing Color Schemes for Your UX Design Projects', instructor: 'Jemi Smith', duration: '6 weeks', ImageUlrcourses: courseImg2, ImageUlrinstr: author2 },
        { id: 3, title: 'Finance Series: Learn to Budget and Calculate your Net Worth.', instructor: 'lary Brown', duration: '8 weeks', ImageUlrcourses: courseImg5, ImageUlrinstr: author4 },
       
       
        { id: 4, title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape', instructor: 'Michael Clark', duration: '6 weeks', ImageUlrcourses: courseImg11, ImageUlrinstr: author5 },
        { id: 5, title: 'Effective Communication Skills for Managers', instructor: 'Lan Garcia', duration: '7 weeks', ImageUlrcourses: courseImg12, ImageUlrinstr: author8 },

        { id: 6, title: 'Practical Project Management: Strategies and Tools', instructor: 'Tim Lee', duration: '5 weeks', ImageUlrcourses: courseImg9, ImageUlrinstr: author10 },

        { id: 7, title: 'Web Development Bootcamp with HTML, CSS, and JavaScript', instructor: 'James Martinez', duration: '10 weeks', ImageUlrcourses: courseImg8, ImageUlrinstr: author9 },


        { id: 8, title: 'The Art of Public Speaking', instructor: 'Daniel Harris', duration: '4 weeks', ImageUlrcourses: courseImg3, ImageUlrinstr: author11 },

        { id: 9, title: 'Digital Photography: Learn Your Camera and Take Stunning Photos', instructor: 'Christopher Wilson', duration: '5 weeks', ImageUlrcourses: courseImg10, ImageUlrinstr: author13 },
    ];
    



    
    return (
        <>
            <Navbar name='All' name2='courses' name3="courses" />
            <div class="section section-padding">
                <div class="container">
                    <div class="courses-wrapper-02">
                        <div class="row">
                            {coursesinf.map((item) => (
                                <div className="col-lg-4 col-md-6" >
                                    <div className="single-courses" style={{height:'400px'}}>
                                        <div className="courses-images">
                                            <a key={item.id} href={`Coursedetails/${item.id}`}><img src={item.ImageUlrcourses} alt="Courses" /></a>
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
                                        <div className="courses-content" style={{marginBottom:'20px'}}>
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#"><img src={item.ImageUlrinstr} alt="Author" /></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">{item.instructor}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="title" ><a href="Coursedetails">{item.title}</a></h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {coursesinf.map((item) => (
                                <div className="col-lg-4 col-md-6" >
                                    <div className="single-courses" style={{height:'400px'}}>
                                        <div className="courses-images">
                                            <a key={item.id} href={`Coursedetails/${item.id}`}><img src={item.ImageUlrcourses} alt="Courses" /></a>
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
                                        <div className="courses-content" style={{marginBottom:'20px'}}>
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#"><img src={item.ImageUlrinstr} alt="Author" /></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">{item.instructor}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="title" ><a href="Coursedetails">{item.title}</a></h4>
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
export default Courses;