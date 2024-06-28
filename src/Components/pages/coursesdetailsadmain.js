import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';
import Footer from "../Footer";
import Navbar from "../Navbar";
import courseImg1 from "../../assets/images/courses/courses-01.jpg";
import { useParams,useLocation } from 'react-router-dom';
import "../../Styles/Contact.css";

function Coursesdetailsadmain() {
  const initialVideoLinks = [
    {
      title: "01. The Complete Medicine Masterclass",
      url: "https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119",
      description: "An introductory course to medicine."
    },
    {
      title: "02. Standard dummy text ever",
      url: "https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119",
      description: "A comprehensive guide to dummy text usage."
    },
    {
      title: "03. Printer took a galley of type and scrambled",
      url: "https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119",
      description: "Understanding the history of printing."
    },
    {
      title: "04. It to make a type specimen book & break",
      url: "https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119",
      description: "Creating and breaking type specimen books."
    },
    {
      title: "05. Survived not only five centuries also the leap",
      url: "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4",
      description: "The resilience of type across centuries."
    },
    {
      title: "06. Into typesettingremaining essentially",
      url: "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4",
      description: "The essentials of typesetting."
    },
    {
      title: "07. Unchanged. It was popularised in the 1960s",
      url: "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4",
      description: "How typesetting remained unchanged since the 1960s."
    },
    {
      title: "08. The release of Letraset sheets containing",
      url: "http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4",
      description: "The impact of Letraset sheets on typesetting."
    }
  ];


  const [applications, setApplications] = useState([]);
    const [instructorImage, setInstructorImage] = useState("");
    const [instructorName, setInstructorName] = useState("");
  const { id } = useParams();
  const location = useLocation();
    const { data } = location.state;
    const dCourse = data.find(e => e.id === parseInt(id));
  const fetchApplications = async () => {
    
    console.log(dCourse);
    setCourseName(dCourse.courseName);
    setCourseImage(dCourse.image);
      try {
        const token = localStorage.getItem('UserToken');
        console.log(token);
        if (!token) {
          
                console.error('No authentication token found');
                // You might want to redirect to the login page or handle this case accordingly
                return;
        }
        const Id = {
          id : id
        }
        console.log(id);
        const response = await axios.post("https://localhost:7225/api/Lesson/GetAllLessonAsync", Id ,{
              headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
            });
      
            console.log('Getdata successful', response.data);
            setApplications(response.data);
        } catch (error) {
            console.error('Error during getting data', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const handleSave = async () => {
    
      const newData = {
        id: id,
        courseName: courseName
      }
    try {
      const token = localStorage.getItem('UserToken');
      const response = await axios.put('https://localhost:7225/api/Course/UpdateCourseName', newData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Updated successfully', response.data);
      setCourseName(response.data.courseName);
      alert('Updated successfully');
    } catch (error) {
      console.error('Error saving profile:', error);
      }
  };

  const handleSaveImage = async () => {
    
      const formData = new FormData();
    formData.append("Image", courseImage);
    formData.append("Id", id);
    for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
    try {
      const token = localStorage.getItem('UserToken');
      const response = await axios.put('https://localhost:7225/api/Course/UpdateCourseImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Updated successfully', response.data);
      setCourseImage(response.data.courseImage);
      alert('Updated successfully');
    } catch (error) {
      console.error('Error ', error);
      }
  };

  const [videoLinks, setVideoLinks] = useState(initialVideoLinks);
  const [editableIndex, setEditableIndex] = useState(-1);
  const [courseName, setCourseName] = useState('');
  const [editableCourseName, setEditableCourseName] = useState(false);
  const [courseImage, setCourseImage] = useState(courseImg1);
  const [editableImage, setEditableImage] = useState(false);

  const handleInputChange = (e, index, field) => {
    const newVideoLinks = [...videoLinks];
    newVideoLinks[index][field] = e.target.value;
    setVideoLinks(newVideoLinks);
  };

  const handleEditClick = (index) => {
    setEditableIndex(index);
  };

  const handleSaveClick = () => {
    setEditableIndex(-1);
  };

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleCourseNameEdit = () => {
    setEditableCourseName(true);
  };

  const handleCourseNameSave = () => {
    setEditableCourseName(false);
    handleSave();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCourseImage(e.target.files[0]);
    }
  };

  const handleImageEdit = () => {
    setEditableImage(true);
  };

  const handleImageSave = () => {
    setEditableImage(false);
    handleSaveImage();
  };

  return (
    <div>
      <Navbar name='courses' name2='details' name3="courses details" />
      <div className="container">
        {editableCourseName ? (
          <div>
            <div className="single-form">
            <input type="text" value={courseName} onChange={handleCourseNameChange} />
            </div>
            <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" onClick={handleCourseNameSave}>Save</button>
          </div>
        ) : (
          <div>
            <h2 style={{ paddingTop: '10px' }}>{courseName}</h2>
            <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" onClick={handleCourseNameEdit}>Edit Course Name</button>
          </div>
        )}
        {editableImage ? (
          <div>
                        <div className="single-form">

            <input type="file" onChange={handleImageChange} />
            </div>
            <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" onClick={handleImageSave}>Save</button>
          </div>
        ) : (
          <div>
            {courseImage && <img src={courseImage} alt="Course" style={{ width: '500px' }} />}
            <br></br>
            <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" onClick={handleImageEdit}>Edit Course Image</button>
          </div>
        )}
      </div>
      <div className="section section-padding mt-n10">
        <div className="row col-10" style={{ padding: '20px', margin: 'auto' }}>
          {/* {videoLinks.map((item, index) => (
            <div className="single-student col-5" style={{ margin: '10px' }} key={index}>
              <div className="student-content">
                {editableIndex === index ? (
                  <>
                    <div className="single-form">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleInputChange(e, index, 'title')}
                      />
                    </div>
                    <div className="single-form">
                      <input
                        type="text"
                        value={item.url}
                        onChange={(e) => handleInputChange(e, index, 'url')}
                      />
                    </div>
                    <div className="single-form">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleInputChange(e, index, 'description')}
                      />
                    </div>
                    <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" onClick={handleSaveClick}>Save</button>
                  </>
                ) : (
                  <>
                    <p>{item.title}</p>
                    <a href={item.url}><p className="name">{item.url}</p></a>
                    <span className="date"><i className="icofont-ui-calendar"></i> {item.description}</span>
                    <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" onClick={() => handleEditClick(index)}>Edit</button>
                  </>
                // )}
              </div>
            </div>
          ))} */}
          {applications ? (<></>) : (applications.map((item) => <>
                    <p>{item.title}</p>
            <a href={item.video}><p className="name">{item.video}</p></a>
            <a href={item.lessonMaterial}><p className="name">{item.lessonMaterial}</p></a>
                    <span className="date"><i className="icofont-ui-calendar"></i> {item.topic}</span>
                    <button  style={{marginTop:'7px' , marginBottom:'5px'}} className="btn btn-primary btn-hover-dark" >Edit</button>
                  </>
          ))}
        </div>
        <div className='container '>
        <button  style={{marginTop:'7px' , marginBottom:'5px' , margin:'auto'}} className="btn btn-primary btn-hover-dark" ><a href='/CreateLesson'>Add Lesson</a></button>
        </div>
      </div>
      <Footer />
      <FloatingChatbot />
      <TidioChat />
    </div>
  );
}

export default Coursesdetailsadmain;
