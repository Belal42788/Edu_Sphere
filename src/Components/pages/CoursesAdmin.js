import React, { useState, useEffect } from "react";
import axios from "axios";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-23.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-04.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import author8 from "../../assets/images/author/author-06.jpg";
import author9 from "../../assets/images/author/author-01.jpg";
import author10 from "../../assets/images/author/author-01.jpg";

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
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';
import { useNavigate } from 'react-router-dom';

function CoursesAdmin() {
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

    const hundelnavigate = (id) => { 
        navigate(`/Coursesdetailsadmain/${id}`, { state: { data: applications } });
    };

    return (
        <>
            <div><AdminHeader /></div>
            <div className="section overflow-hidden position-relative" id="wrapper">
                <div className="page-content-wrapper">
                    <div className="container-fluid custom-container">
                        {/* Admin Courses Tab Start */}
                        <div className="admin-courses-tab">
                            <h3 className="title">Courses</h3>
                            <div className="courses-tab-wrapper">
                                <div className="tab-btn">
                                    <a href="CreateCourse" className="btn btn-primary btn-hover-dark">New Course</a>
                                </div>
                            </div>
                        </div>
                        <div className="admin-courses-tab-content">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1">
                                    {applications.map((item) => (
                                        <div className="courses-item" key={item.id}>
                                            <div style={{ width: '15%' }} className="item-thumb">
                                                <a href="" onClick={() => hundelnavigate(item.id)}>
                                                    <img src={item.image} alt={item.courseName} />
                                                </a>
                                            </div>
                                            <div className="content-title">
                                                <h3 className="title"><a href="" onClick={() => hundelnavigate(item.id)}>{item.courseName}</a></h3>
                                            </div>
                                            <div className="content-wrapper">
                                                <div className="content-box">
                                                    <p>Earned</p>
                                                    <span className="count">$3,200.00</span>
                                                </div>
                                                <div className="content-box">
                                                    <p>Enrollment’s</p>
                                                    <span className="count">5,728</span>
                                                </div>
                                                <div className="content-box">
                                                    <p>Course Rating</p>
                                                    <span className="count">
                                                        4.5
                                                        <span className="rating-star">
                                                            <span className="rating-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <div><Footer /></div>
            <FloatingChatbot />
            <TidioChat />
        </>
    );
}

export default CoursesAdmin;
