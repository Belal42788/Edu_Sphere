import React, { useState } from 'react';
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';
import Footer from "../Footer";
import Navbar from "../Navbar";
import courseImg1 from "../../assets/images/courses/courses-01.jpg";

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

  const [videoLinks, setVideoLinks] = useState(initialVideoLinks);
  const [editableIndex, setEditableIndex] = useState(-1);
  const [courseName, setCourseName] = useState('Data Science and Machine Learning with Python - Hands On!');
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
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCourseImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageEdit = () => {
    setEditableImage(true);
  };

  const handleImageSave = () => {
    setEditableImage(false);
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
          {videoLinks.map((item, index) => (
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
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='container '>
        <button  style={{marginTop:'7px' , marginBottom:'5px' , margin:'auto'}} className="btn btn-primary btn-hover-dark" ><a href='CreateLesson'>Add Lesson</a></button>
        </div>
      </div>
      <Footer />
      <FloatingChatbot />
      <TidioChat />
    </div>
  );
}

export default Coursesdetailsadmain;
