import "../../Styles/Profile.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise";
import React from "react";
import profilePicture from "../../assets/images/author/author-07.jpg"; // Updated profile picture path

export default function Profile() {
  return (
    <div>
      <Navbar name="Profile" />
      <div className="section section-padding">
        <div className="container">
          <div className="profile-wrapper">
            <div className="profile-header">
              <div className="profile-picture">
                <img src={profilePicture} alt="User Profile" />
              </div>
              <div className="profile-details">
                <p className="username">
                  <span className="label">Username:</span>
                  <span className="value">the user name</span>
                </p>
                <p className="email">
                  <span className="label">Email:</span>
                  <span className="value">user@example.com</span>
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
