// src/Sidebar.js
import React from 'react';
import './Sidebar.css';
import studentImage from '../../assets/images/author/author-04.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar-1">
      <h2>Admin Student</h2>
<div> <img className="img1" src={studentImage} alt="Student" /></div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="courses">Courses</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="login">Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
