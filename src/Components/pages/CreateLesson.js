import React, { useState } from 'react';
import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from '../../assets/images/shape/shape-26.png';
import image2 from '../../assets/imaheboy.jpg';
import Advertise from "../advertise";
import axios from "axios";
import AdminHeader from '../AdminHeader';
import { useNavigate } from 'react-router-dom';
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';


function CreateLesson() {
    const navigate = useNavigate();
    
    const [courseName, setCourseName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [CourseId, setCourseId] = useState(0);
    const [courseImage, setCourseImage] = useState(null);
    const [Material, setMaterial] = useState(null);

    const handleCourseNameChange = (e) => setCourseName(e.target.value);
    const handleCourseIdChange = (e) => setCourseId(e.target.value);
    const handleVideoUrlChange = (e) => setVideoUrl(e.target.value);
    const handleCourseImageChange = (e) => setCourseImage(e.target.files[0]);
    const handleCourseMaterialChange = (e) => setMaterial(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append("Title", courseName);
        formData.append("CourseID", CourseId);
        formData.append("Topic", videoUrl);
        formData.append("Video", courseImage);
        formData.append("LessonMaterial", Material);
   

        // Log form data to console (for demonstration purposes)
        // Replace this with actual form submission logic (e.g., API call)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const token = localStorage.getItem('UserToken');

        console.log(token);

        if (!token) {
            console.error('No authentication token found');
            navigate('/Login');
            return;
        }
        try {
            const response = await axios.post('https://localhost:7225/api/Lesson/CreateLesson', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Add the token here
                }
            });
            alert('Create Lesson successful');
            console.log('Create Lesson successful', response.data);
        } catch (error) {
            if (error.response && error.response.status === 403) {
                alert('You are not Teacher Until Admin give you access');
        console.error('Access forbidden: you do not have the necessary permissions');
        // Optionally handle insufficient permissions, e.g., show a message or redirect
            } else {
                alert('Something wrong!');
        console.error('Error during Getting data', error);
      }
        }
    };

    return (
        <div>
            <AdminHeader />
            <div className="section section-padding">
                <div className="container">
                    <div className="register-login-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="register-login-images">
                                    <div className="shape-1">
                                        <img src={image} alt="Shape" />
                                    </div>
                                    <div className="images">
                                        <img src={image2} alt="Register Login" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="register-login-form">
                                    <h3 className="title" style={{ textTransform: 'capitalize' }}>
                                        Add Lesson
                                    </h3>
                                    <div className="form-wrapper">
                                        <form onSubmit={handleSubmit}>
                                            <div className="single-form">
                                                <input type="text" placeholder="Lesson Name" value={courseName} onChange={handleCourseNameChange} />
                                            </div>
                                            <div className="single-form">
                                                <input type="text" placeholder="CourseID" value={CourseId} onChange={handleCourseIdChange} />
                                            </div>
                                            <div className="single-form">
                                                <input type="text" placeholder="Topic" value={videoUrl} onChange={handleVideoUrlChange} />
                                            </div>
                                            <div className="single-form">
                                                <label style={{ textTransform: 'capitalize' }}>Upload lesson</label>
                                                <input type="file" onChange={handleCourseImageChange} />
                                            </div>
                                            <div className="single-form">
                                                <label style={{ textTransform: 'capitalize' }}>Upload Lesson's Material</label>
                                                <input type="file" onChange={handleCourseMaterialChange} />
                                            </div>
                                            <div className="single-form">
                                                <button type="submit" className="btn btn-primary btn-hover-dark w-100">Create Lesson</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
            <FloatingChatbot />
            <TidioChat />
        </div>
    );
}

export default CreateLesson;
