import "./App.css";
import Login from "./Components/pages/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import Error404 from "./Components/pages/Error404";
import Contact from "./Components/pages/Contact";
import Coursedetails from "./Components/pages/Coursedetails";
import Courses from "./Components/pages/Courses";
import Faq from "./Components/pages/faq";
import Register from "./Components/pages/register";
import Afterenroll from "./Components/pages/afterenroll";
import Overview from "./Components/pages/overview";
import Home from "./Components/pages/Home";
import Createcourse from "./Components/pages/createcourse";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Afterenroll" element={<Afterenroll />} />
        <Route path="/createcourse" element={<Createcourse />} />
        <Route path="/Overview" element={<Overview />} />
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
