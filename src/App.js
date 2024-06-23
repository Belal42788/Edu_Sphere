import "./App.css";
import Login from "./Components/pages/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import Error404 from "./Components/pages/Error404";
import Contact from "./Components/pages/Contact";
import Coursedetails from "./Components/pages/Coursedetails";
import Courses from "./Components/pages/AllCourses";
import Faq from "./Components/pages/faq";
import Register from "./Components/pages/register";
import Afterenroll from "./Components/pages/afterenroll";
import Home from "./Components/pages/Home";
import Createcourse from "./Components/pages/createcourse";
import CoursesAdmin from "./Components/pages/CoursesAdmin";
import MyCourses from "./Components/pages/MyCourses";
import CreateLesson from "./Components/pages/CreateLesson"
import Profile from "./Components/pages/Profile";
import TeacherRegisteration from "./Components/pages/TeacherRegisteration";
import Lessons from "./Components/pages/Lessons";
import Admin from "./Components/pages/Admin";
import Blog from "./Components/pages/Blog";
import Blogdetails from "./Components/pages/Blogdetails";
import Coursesdetailsadmain from "./Components/pages/coursesdetailsadmain"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/TeacherRegisteration" element={<TeacherRegisteration />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blogdetails" element={<Blogdetails />} />
        <Route path="/Afterenroll" element={<Afterenroll />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/MyCourses" element={<MyCourses />} />
        <Route path="/CoursesAdmin" element={<CoursesAdmin />} />
        <Route path="/createcourse" element={<Createcourse />} />
        <Route path="/CreateLesson" element={<CreateLesson />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Coursedetails" element={<Coursedetails />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Coursesdetailsadmain" element={<Coursesdetailsadmain />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
