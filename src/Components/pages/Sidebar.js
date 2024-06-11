// src/Sidebar.js
import React from 'react';
import studentImage from '../../assets/images/author/author-04.jpg';
import "../../Styles/Contact.css";
const Sidebar = () => {
  return (
    <div className="sidebarprofile" >
<div style={{marginTop:'10px'}}> <img className="img1" src={studentImage} alt="Student" /></div>
     <h4  >Youssef Rafat</h4 >

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
