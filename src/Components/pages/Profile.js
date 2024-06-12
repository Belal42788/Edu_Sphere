// src/Profile.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Advertise from "../advertise";
import Footer from "../Footer";
import Navbar from "../Navbar";
import zIndex from "@mui/material/styles/zIndex";
import { Margin } from "@mui/icons-material";
// import studentImage from "../../assets/images/author/author-04.jpg"; // Import the student image

const Profile = () => {
  const student = {
    name: "John Doe",
    email: "john.doe@example.com",
   
  };

  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const checkMyCourses = () => {};

  return (
    <div className="profile-container" style={styles.container}>
     <div className="col-2">
      <Sidebar/>
      </div>
      <div className="col-10">

      <div className="content" style={styles.content}>
        <h1 style={styles.header}>Your Profile</h1>
       
        <p style={styles.p}><strong style={styles.text}>Your Name:</strong> {student.name}</p>
       
        <p style={styles.p}><strong style={styles.text}>Your Email:</strong> {student.email}</p>
        <button onClick={checkMyCourses} style={styles.button}>
          <a href="mycourses" style={styles.link}>Check My Courses</a>
        </button>
        <div className="mt-10">
          <Advertise />
        </div>
        <div style={styles.Footer}>

        <Footer  />
        </div>

      </div>
    </div>
    </div>

  );
};

const styles = {
 
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    height: "100vh",
  },
  content: {
    marginLeft: "5px", // Space for the sidebar
    // padding: "20px",
    flex: 1,
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
   
  },
  header: {
    textAlign: "center",
    color: "#309255",
  },
 
 
  p: {
    fontSize: "20px",
    color: "#000",
    margin: '10px 0',
  },
  text: {
    // display: 'inline-block',
    backgroundColor: "#309255",
        color: "#fff"   ,   
        width: '100px',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',  // Adding box shadow to "Your Name" and "Your Email" text
        padding: '5px',
        borderRadius: '4px',  // Adding slight rounded corners to the box shadow elements
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#309255",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
//   link: {
//     textDecoration: "none",
//     color: "white",
//   },
};

export default Profile;
