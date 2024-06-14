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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/TeacherRegisteration" element={<TeacherRegisteration />} />
        <Route path="/Afterenroll" element={<Afterenroll />} />
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
