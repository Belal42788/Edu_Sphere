import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from "../../assets/images/shape/shape-26.png";
import image2 from "../../assets/images/register-login.png";
import React, { useRef, useState, useEffect } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Advertise from "../advertise";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function TeacherRegistration() {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [imageFile, setImageFile] = useState(null);

    const [errMsg, setErrMsg] = useState("");

    const handleCVUpload = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Degree","3");
        formData.append("DegreeImage", imageFile);

        const token = localStorage.getItem('UserToken');

    
        if (!token) {
            console.error('No authentication token found');
            navigate('/Login');
            return;
        }
        try {
            const response = await axios.post('https://localhost:7225/api/Teacher/TeacherApplication', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Add the token here
                }
            });
            alert('Registration successful');
            console.log('Registration successful', response.data);
        } catch (error) {
            alert('Something wrong!');
            console.error('Error during registration', error);
        }
    };

    return (
        <div>
            <Navbar name='Became a ' name2='instructor' name3='TeacherRegisteration' />
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
                                    <h3 className="title">Became a <span>Instructor</span></h3>
                                    <p>If you want to join our teaching team, please upload your CV. We will review your application and notify you via email about the acceptance or rejection of your application.</p>
                                    <div className="form-wrapper">
                                        <form onSubmit={handleSubmit}>
                                            <div className="single-form file-input-container">
                                                <input id="cv-upload" type="file" className="file-input" onChange={handleCVUpload} />
                                                <label htmlFor="cv-upload" className="custom-file-label">Upload Your CV</label>
                                            </div>
                                            <div className="single-form">
                                                <button className="btn btn-primary btn-hover-dark w-100" type="submit">
                                                    Create an account
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </div>
    );
}
