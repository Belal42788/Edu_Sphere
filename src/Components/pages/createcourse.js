import React, { useState } from 'react';
import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from '../../assets/images/shape/shape-26.png';
import image2 from '../../assets/imaheboy.jpg';
import Advertise from "../advertise";

function Createcourse() {
  const [courseName, setCourseName] = useState("");
  const [subject, setSubject] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [courseCost, setCourseCost] = useState("");
  const [courseImage, setCourseImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleCourseNameChange = (e) => setCourseName(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleVideoUrlChange = (e) => setVideoUrl(e.target.value);
  const handleCourseCostChange = (e) => setCourseCost(e.target.value);
  const handleCourseImageChange = (e) => setCourseImage(e.target.files[0]);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("subject", subject);
    formData.append("videoUrl", videoUrl);
    formData.append("courseCost", courseCost);
    formData.append("courseImage", courseImage);
    formData.append("description", description);

    // Log form data to console (for demonstration purposes)
    // Replace this with actual form submission logic (e.g., API call)
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div>
      <div><Navbar name='create course' name2='form' name3='create course' /></div>
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
                    create course <span>Now</span>
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
                        <input type="text" placeholder="Url of video" value={videoUrl} onChange={handleVideoUrlChange} />
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
      <div><Advertise /></div>
      <div><Footer /></div>
    </div>
  );
}

export default Createcourse;
