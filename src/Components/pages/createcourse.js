import React, { useState } from 'react';
import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from '../../assets/images/shape/shape-26.png';
import image2 from '../../assets/imaheboy.jpg';
import Advertise from "../advertise";
import AdminHeader from '../AdminHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createcourse() {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setlanguage] = useState("");
  const [courseCost, setCourseCost] = useState("");
  const [courseImage, setCourseImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleCourseNameChange = (e) => setCourseName(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleVideoUrlChange = (e) => setlanguage(e.target.value);
  const handleCourseCostChange = (e) => setCourseCost(e.target.value);
  const handleCourseImageChange = (e) => setCourseImage(e.target.files[0]);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("CourseName", courseName);
    formData.append("CourseDescription", description);
    formData.append("Subject", subject);
    // formData.append("videoUrl", videoUrl);
    // formData.append("TeacherID", ",mndsfkj");
    formData.append("Cost", courseCost);
    formData.append("Language", language);
    formData.append("Image", courseImage);
    
    console.log("FormData entries:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    // Log form data to console (for demonstration purposes)
    // Replace this with actual form submission logic (e.g., API call)
        const token = localStorage.getItem('UserToken');

    if (!token) {
      console.error('No authentication token found');
      navigate('/Login');
        return;
    }
      try {
        const response = await axios.post('https://localhost:7225/api/Course/CreateCourse', formData, {
          headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}` // Add the token here
            }
        });
        console.log('CreateCourse successful', response.data);
        alert('Course created successfully!');
        // Handle successful registration, e.g., redirect to login or home page
      } catch (error) {
        if (error.response && error.response.status === 403) {
                alert('You are not Teacher Until Admin give you access');
        console.error('Access forbidden: you do not have the necessary permissions');
        // Optionally handle insufficient permissions, e.g., show a message or redirect
            } else {
                alert('Something wrong please try again');
        console.error('Error during Getting data', error);
      }
        // Handle registration error
      }
  };

  return (
    <div>
      <div><AdminHeader /></div>
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
                    create course 
                  </h3>
                  <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                      <div className="single-form">
                        <input type="text" placeholder="Course Name" value={courseName} onChange={handleCourseNameChange} />
                      </div>
                      <div className="single-form">
                        <input type="text" placeholder="Subject" value={subject} onChange={handleSubjectChange} />
                      </div>
                      <div className="single-form">
                        <input type="text" placeholder="language" value={language} onChange={handleVideoUrlChange} />
                      </div>
                      <div className="single-form">
                        <input type="text" placeholder="Cost of course" value={courseCost} onChange={handleCourseCostChange} />
                      </div>
                      <div className="single-form">
                        <label style={{ textTransform: 'capitalize' }}>Upload image of course</label>
                        <input type="file" onChange={handleCourseImageChange} />
                      </div>
                      <div className="single-form">
                        <textarea name="Description" placeholder="Description" value={description} onChange={handleDescriptionChange}></textarea>
                      </div>
                      <div className="single-form">
                        <button type="submit" className="btn btn-primary btn-hover-dark w-100">Create Course</button>
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
    </div>
  );
}

export default Createcourse;
