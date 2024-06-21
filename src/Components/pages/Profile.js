import "../../Styles/Profile.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise";
import React, { useState, useEffect } from "react";
import profilePicture from "../../assets/images/author/author-07.jpg"; // Updated profile picture path
import { useNavigate } from 'react-router-dom';
import AdminHeader from "../AdminHeader";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('UserName');
    const email = localStorage.getItem('Email');
    const image = localStorage.getItem('Image');
      setUserName(!username ? "Username" :username);
      setEmailLogin(!email ? "user@example.com" : email );
      setImageFile(!image ? profilePicture : image );
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="section section-padding">
        <div className="container">
          <div className="profile-wrapper">
            <div className="profile-header">
              <div className="profile-picture">
                <img src={imageFile} alt="User Profile" />
              </div>
              <div className="profile-details">
                <p className="username">
                  <span className="label">Username:</span>
                  <span className="value">{userName}</span>
                </p>
                <p className="email">
                  <span className="label">Email:</span>
                  <span className="value">{emailLogin}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
