import React from "react";
import Image1 from "../../assets/images/logo-icon.png";
import author3 from "../../assets/images/author/author-03.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import { useState } from "react";
import Advertise from "../advertise";
import "../../Styles/plugins/icofont.min.css";
import "../../Styles/plugins/animate.min.css";
import "../../Styles/plugins/swiper-bundle.min.css";
import "../../Styles/plugins/magnific-popup.css";
import "../../Styles/plugins/nice-select.css";
import "../../Styles/plugins/apexcharts.css";
import "../../Styles/plugins/jqvmap.min.css";
import "../../Styles/Contact.css";
import AdminHeader from "../AdminHeader";

function Afterenroll() {
    const videoLinks = [
        {
            title: "01. Introduction to Personal Finance",
            url: "https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119",
            duration: "08 minutes"
        },
        {
            title: "02. Understanding Your Income and Expenses",
            url: "https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119",
            duration: "08 minutes"
        },
        {
            title: "03. Setting Financial Goals",
            url: "https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119",
            duration: "08 minutes"
        },
        {
            title: "04. Creating a Budget That Works",
            url: "https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119",
            duration: "08 minutes"
        },
        {
            title: "05. Saving Strategies for Financial Security",
            url: "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4",
            duration: "08 minutes"
        },
        {
            title: "06. Managing Debt Effectively",
            url: "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4",
            duration: "08 minutes"
        },
        {
            title: "07. Introduction to Investments",
            url: "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4",
            duration: "08 minutes"
        },
        {
            title: "08. Calculating and Tracking Your Net Worth",
            url: "http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4",
            duration: "08 minutes"
        }
    ];

    const coursesinf = [
        {
            id: 1,
            title: 'Data Science and Machine Learning with Python - Hands On!',
            instructor: 'John Doe',
            lecture: '29',
            price: '428',
            Language: 'English',
            Certificate: 'Yes'
        }
    ];

    const teamInfo = [
        {
            id: 1,
            name: 'bill James',
            designation: 'MSC, Instructor',
            rating: 4.9,
            ImageUrl: author1
        },
        {
            id: 2,
            name: 'mario Colon',
            designation: 'BBA, Instructor',
            rating: 4.9,
            ImageUrl: author2
        },
        {
            id: 3,
            name: 'Son Gordon',
            designation: 'MBA, Instructor',
            rating: 4.9,
            ImageUrl: author3
        },
    ];

    const [currentVideo, setCurrentVideo] = useState(videoLinks[0].url);

    const handleVideoChange = (url) => {
        setCurrentVideo(url);
        const videoElement = document.getElementById('myvid');
        videoElement.load();
        videoElement.play();
    };

    return (
        <>
            <div>
                <AdminHeader />
            </div>
            {/* Courses Enroll Start */}
            <div className="section">
                {/* Courses Enroll Wrapper Start */}
                <div className="courses-enroll-wrapper">
                    {/* Courses Video Player Start */}
                    <div className="courses-video-player">
                        {/* Courses Video Container Start */}
                        <div className="vidcontainer">
                            <video id="myvid" controls autoPlay>
                                <source src={currentVideo} type="video/mp4" />
                                <source src={currentVideo} type="video/ogg" />

                                Your browser does not support the video tag.
                            </video>

                        </div>
                        <div className="courses-enroll-content">
                            <div className="courses-enroll-title">
                                <h2 className="title">Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.</h2>
                            </div>
                            <div className="courses-enroll-tab">
                                <div className="enroll-tab-menu">
                                    <ul className="nav">
                                        <li><button className="active" data-bs-toggle="tab" data-bs-target="#tab1">Overview</button></li>
                                        <li><button data-bs-toggle="tab" data-bs-target="#tab2">Description</button></li>
                                    </ul>
                                </div>
                                <div className="enroll-share">
                                    <a href="#"><i className="icofont-share-alt"></i> Share</a>
                                </div>
                            </div>

                            <div class="courses-enroll-tab-content">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="tab1">
                                        <div class="overview">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="enroll-tab-title">
                                                        <h3 class="title">Course Details</h3>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="enroll-tab-content">
                                                        <p>This comprehensive course is designed to help you master the essentials of budgeting and net worth calculation. You will learn practical strategies for managing your finances, setting financial goals, and making informed investment decisions. Our expert instructors provide clear, step-by-step guidance to ensure you understand and apply key concepts effectively. By the end of the course, you will have the tools and knowledge needed to take control of your financial future.</p>
                                                        <table class="table">
                                                            {coursesinf.map((item) => (
                                                                <tbody>

                                                                    <tr>
                                                                        <th>Instructor <span>:</span></th>
                                                                        <td>{item.instructor}</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <th>Lectures <span>:</span></th>
                                                                        <td>{item.lecture}</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <th>Language <span>:</span></th>
                                                                        <td>{item.Language}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Caption’s <span>:</span></th>
                                                                        <td>{item.Certificate}</td>
                                                                    </tr>
                                                                </tbody>
                                                            ))}
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade" id="tab2">
                                        <div class="description">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="enroll-tab-title">
                                                        <h3 class="title">Description</h3>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="enroll-tab-content">
                                                        <p>Our Finance & Investment Series offers a deep dive into the world of budgeting and personal finance. This course is crafted to equip you with the skills and knowledge needed to manage your finances effectively and calculate your net worth accurately. Learn from industry experts who will guide you through practical exercises and real-world scenarios to ensure you gain a thorough understanding of financial principles.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab3">
                                        <div class="certificates">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="enroll-tab-title">
                                                        <h3 class="title">EduSphere Certificates</h3>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="enroll-tab-content">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been industry's standard dummy text
                                                            ever since the 1500s when andom unknown printer took a galley of
                                                            type scrambled it to make a type specimen book. It has survived
                                                            not’s only and five centuries, but also the lea into electronic
                                                            typesetting, remaining priting essentially unchanged. It was
                                                            popularsed in the 1960 with containing Lorem Ipsum passages
                                                            desktop publishing software.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="courses-video-playlist">
                        <div class="playlist-title">
                            <h3 class="title">Course Content</h3>
                            <span>{ }</span>
                        </div>
                        {/* <!-- Video Playlist Start  --> */}
                        <div class="video-playlist">
                            <div class="accordion" id="videoPlaylist">
                                {/* <!-- Accordion Items Start  --> */}
                                <div class="accordion-item">
                                    <div id="collapseOne"
                                        data-bs-parent="#videoPlaylist">
                                        <nav class="vids">
                                            {videoLinks.map((item) => (
                                                <a class="link active"
                                                    href="#"
                                                    onClick={() => handleVideoChange(item.url)}
                                                >
                                                    <p>{item.title}</p>
                                                    <span class="total-duration"> {item.duration}</span>
                                                </a>
                                            ))}

                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Advertise />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
export default Afterenroll;
