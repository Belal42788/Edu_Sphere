import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AdminHeader from "../AdminHeader";
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';
import axios from 'axios';

export default function Profile() {
  const initialProfile = {
    id: 1,
    instructor: 'John Doe',
    Email: 'ahmedre126@gmail.com',
    courseName: 'Effective Communication Skills for Managers',
    Certificate: 'Yes'
  };

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('Email');
    const storedUsername = localStorage.getItem('UserName');
    const storedImage = localStorage.getItem('Image');
    if (storedEmail) setEmail(storedEmail);
    if (storedUsername) setUsername(storedUsername);
    if (storedImage) setImagePreview(storedImage);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", imageFile);

    console.log("FormData entries:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    try {
      const token = localStorage.getItem('UserToken');
      const response = await axios.put('https://localhost:7225/api/User/ChangeImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Updated successfully', response.data);
      alert('Updated successfully');
      setImageFile(response.data.image);
      setImagePreview(response.data.image);
      setMessage('Profile updated successfully!');
      localStorage.setItem('Image', response.data.image);
    } catch (error) {
      console.error('Error saving profile:', error);
      setMessage('An error occurred. Please check your profile details and image.');
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <>
      <div><Navbar name='my' name2='profile' name3='profile' /></div>
      <div className="section section-padding mt-n10">
        <div className="container">
          <div className="row gx-10">
            <div className="col-lg-12">
              <div className="sidebar">
                <div className="sidebar-widget widget-information">
                  <div className="info-price">
                    <img style={{ borderRadius: '50%' }} src={imagePreview} alt="Profile" />
                  </div>
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>Name</strong>
                        {isEditing ? (
                          <p style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="single-form">
                              <input type="text" name="instructor" value={username} onChange={handleChange} />
                            </div>
                          </p>
                        ) : (
                          <span>{username}</span>
                        )}
                      </li>
                      <li>
                        <strong>Email</strong>
                        {isEditing ? (
                          <p style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="single-form">
                              <input type="email" name="Email" value={email} onChange={handleChange} />
                            </div>
                          </p>
                        ) : (
                          <span>{email}</span>
                        )}
                      </li>
                      <li>
                        <strong>Course Name</strong>
                        {isEditing ? (
                          <p style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="single-form">
                              <input type="text" name="courseName" value={profile.courseName} onChange={handleChange} />
                            </div>
                          </p>
                        ) : (
                          <span>{profile.courseName}</span>
                        )}
                      </li>
                      <li>
                        {isEditing ? (
                          <p style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="single-form">
                              <input type="file" onChange={handleImageChange} />
                            </div>
                          </p>
                        ) : (
                          <span></span>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="info-actions">
                    {isEditing ? (
                      <button className="btn btn-primary btn-hover-dark" onClick={handleSave}>Save</button>
                    ) : (
                      <button className="btn btn-primary btn-hover-dark" onClick={handleEdit}>Edit Profile</button>
                    )}
                  </div>
                  {message && <p>{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Advertise /></div>
      <div><Footer /></div>
      <FloatingChatbot />
      <TidioChat />
    </>
  );
}
