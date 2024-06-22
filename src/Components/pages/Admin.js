import "../../Styles/Profile.css";
import AdminHeader from "../AdminHeader";
import Footer from "../Footer";
import Advertise from "../advertise";
import React, { useState, useEffect } from "react";
import profilePicture from "../../assets/images/author/author-07.jpg"; // Updated profile picture path
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';


export default function Admin() {
    const handleAccept = async (applicationId) => {
        try {
            const token = localStorage.getItem('UserToken');
      
            if (!token) {
                console.error('No authentication token found');
                // You might want to redirect to the login page or handle this case accordingly
                return;
            }
            console.log(applicationId);
            const Data = {
                id: applicationId
            };
      
            const response = await axios.post('https://localhost:7225/api/Admin/AcceptApplication', Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
      
            console.log('Accept successful', response.data);
        } catch (error) {
            console.error('Error during accepting application', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    };

    const handleReject = async (applicationId) => {
        try {
            const token = localStorage.getItem('UserToken');
      
            if (!token) {
                console.error('No authentication token found');
                // You might want to redirect to the login page or handle this case accordingly
                return;
            }

            const Data = {
                id: applicationId
            };
      
            const response = await axios.post('https://localhost:7225/api/Admin/RejectApplication', Data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
      
            console.log('Reject successful', response.data);
        } catch (error) {
            console.error('Error during rejecting application', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    };

    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {
        try {
            const token = localStorage.getItem('UserToken');
      
            if (!token) {
                console.error('No authentication token found');
                // You might want to redirect to the login page or handle this case accordingly
                return;
            }
      
            const response = await axios.get('https://localhost:7225/api/Admin/GetAllApplication', {
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

    return (
        <div>
            <AdminHeader />
            {applications.map((item) => (
                <div className="tab-content courses-tab-content" key={item.applicationId}>
                    <div className="tab-pane fade show active" id="tabs1">
                        <div className="courses-wrapper">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-courses" style={{ height: '300px' }}>
                                        <span>Image Degree</span>
                                        <div style={{ width: '20%' }}>
                                            <img src={item.degreeImageUrl} alt="Courses" />
                                        </div>
                                        <div><span>Name :  </span> {item.name}</div>
                                        <div><span>ApplicationId :  </span> {item.applictationId}</div>
                                        <div><span>Degree :  </span> {item.degree}</div>
                                    </div>
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100" onClick={() => handleAccept(item.applictationId)}>
                                            Accept
                                        </button>
                                    </div>
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100" onClick={() => handleReject(item.applictationId)}>
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
            <FloatingChatbot />
            <TidioChat />
        </div>
    );
}
