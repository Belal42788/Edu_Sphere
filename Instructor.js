import React from 'react'
import picture from '../images/teacher.png';
import './Instructor.css';
import Navbar from "../Navbar.js";
import Sectionprimary from "../Sectionprimary.js";

import Sectionfixed from "../Sectionfixed.js";

function Instructor() {
    
  const coursesinf = [
    { id: 1, title: 'Introduction to React', instructor: 'John Doe'  , ImageUlrinstr: picture },
    { id: 2, title: 'JavaScript Basics', instructor: 'Jane Smith'   , ImageUlrinstr: picture },
    { id: 3, title: 'HTML/CSS Fundamentals', instructor: 'Alex Johnson'   , ImageUlrinstr: picture },
    { id: 4, title: 'Advanced JavaScript', instructor: 'Emily Brown'   , ImageUlrinstr: picture },
    { id: 5, title: 'React Hooks', instructor: 'Michael Clark'   , ImageUlrinstr: picture },
    { id: 6, title: 'Node.js Fundamentals', instructor: 'Sarah White'   , ImageUlrinstr: picture },
    { id: 7, title: 'Node.js Express', instructor: 'David Wilson'   , ImageUlrinstr: picture },
    { id: 8, title: 'PHP Basics', instructor: 'Jessica Lee'   , ImageUlrinstr: picture },
    { id: 9, title: '.NET Framework Essentials', instructor: 'Ryan Adams'   , ImageUlrinstr: picture },
    { id: 10, title: 'Java Programming', instructor: 'Lisa Taylor'   , ImageUlrinstr: picture },
    { id: 11, title: 'Advanced Java Concepts', instructor: 'Chris Evans'   , ImageUlrinstr: picture },
  ];
  return (
    <div className='container'>
                        <div className='Navbarregister col-xl-12'><Navbar/></div>
                         <div className='Sectionprimaryregister  col-12' 
                          style={{zIndex:500 , marginTop:'82px'}}><Sectionprimary name = "Instructor" /></div>
                             
                                <div className='row Instructor_parent'>
                                    {coursesinf.map((item) => (
                                            <>
                                   <div className=' Instructor_parent_inner col-xl-4 col-lg-5 mt-5 ml-3'>
                                        <img src={item.ImageUlrinstr} className='col-12' draggable = 'false'  alt="ImageInstructor"/>
                                        <div className='Instructor_details col-xl-8 '>
                                        <h4> <a>{item.instructor}</a></h4>

                                        <span>{item.title}</span>
                                        </div>
                                        </div>
                                                                    </>
                                ))}

                            </div>
                            <div className='Sectionfixed mt-5'><Sectionfixed/></div>

                        </div>
  )
}

export default Instructor
