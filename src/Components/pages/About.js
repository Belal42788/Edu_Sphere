import React from "react";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-22.jpg";
import author4 from "../../assets/images/author/author-23.jpg";
import author5 from "../../assets/images/author/author-04.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-20.jpg";
import author8 from "../../assets/images/author/author-19.jpg";
import author9 from "../../assets/images/author/author-18.jpg";
import author10 from "../../assets/images/author/author-17.jpg";
import about1 from "../../assets/images/about.jpg";
import about2 from "../../assets/images/logo-icon.png";
import shape12 from "../../assets/images/shape/shape-12.png";
import shape13 from "../../assets/images/shape/shape-13.png";
import shape14 from "../../assets/images/shape/shape-14.png";
import shape19 from "../../assets/images/shape/shape-19.png";
import shape20 from "../../assets/images/shape/shape-20.png";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/plugins/icofont.min.css";
import "../../Styles/plugins/animate.min.css";
import "../../Styles/plugins/swiper-bundle.min.css";
import "../../Styles/plugins/magnific-popup.css";
import "../../Styles/plugins/nice-select.css";
import "../../Styles/plugins/apexcharts.css";
import "../../Styles/plugins/jqvmap.min.css";
import "../../Styles/Contact.css";
import Advertise from "../advertise";
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';


function About() {
  const teamMembers = [
    {
      imgSrc: author1,
      altText: "Author",
      rating: 4.9,
      name: "bill James",
      designation: "MSC, Instructor"
    },
    {
      imgSrc: author2,
      altText: "Author",
      rating: 4.9,
      name: "mario Colon",
      designation: "BBA, Instructor"
    },
    {
      imgSrc: author3,
      altText: "Author",
      rating: 4.9,
      name: "Son Gordon",
      designation: "MBA, Instructor"
    },
    {
      imgSrc: author4,
      altText: "Author",
      rating: 4.9,
      name: "Archie Neal",
      designation: "BBS, Instructor"
    },
    {
      imgSrc: author5,
      altText: "Author",
      rating: 4.9,
      name: "Randal Ramsey",
      designation: "MBBS, Instructor"
    },
    {
      imgSrc: author6,
      altText: "Author",
      rating: 4.9,
      name: "Rochelle Thomas",
      designation: "MSC, Instructor"
    },
    {
      imgSrc: author7,
      altText: "Author",
      rating: 4.9,
      name: "Dell Salazar",
      designation: "BBA, Instructor"
    },
    {
      imgSrc: author8,
      altText: "Author",
      rating: 4.9,
      name: "Ricardo Patrick",
      designation: "MBA, Instructor"
    },
    {
      imgSrc: author9,
      altText: "Author",
      rating: 4.9,
      name: "Kurt Stewart",
      designation: "BBS, Instructor"
    },
    {
      imgSrc: author10,
      altText: "Author",
      rating: 4.9,
      name: "Rodney Terry",
      designation: "MBBS, Instructor"
    }
  ];
  const feedback = [
    {
      imagefeed: author7,
      Namefeed: 'Mohammed Ali',

      Nationfeed: 'POR',
      comment: 'EduSpherehas been an incredible resource for my personal and professional growth. The variety of courses available is impressive, and the quality of instruction is top-notch. The platform is user-friendly and allows me to learn at my own pace, which is perfect for my busy schedule. I have gained valuable skills that have already made a difference in my career'
    },

    {
      imagefeed: author7,
      Namefeed: 'Messi Roberts',
      Nationfeed: 'USA',
      comment: 'EduSphereoffers a seamless learning experience with its well-structured courses and intuitive interface. The ability to access course materials from anywhere makes it convenient for me to study on the go. The support team is also very responsive and helpful. I highly recommend EduSphereto anyone looking to invest in their education.'
    },

  ]
  return (
    <>
      <Navbar name="About" name2="US" name3="About" />
      <div className="section">
        <div className="section-padding-02 mt-n10">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-images">
                  <div className="images">
                    <img src={about1} alt="About" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h5 className="sub-title">Welcome to EduSp.</h5>
                  <h2 className="main-title">
                    You can join with Edusphere and upgrade your skill for your{" "}
                    <span>bright future.</span>
                  </h2>
                  <p>
                    EduSphere offers a wide range of courses designed to enhance your knowledge and expertise in various fields. Our experienced instructors and comprehensive curriculum ensure that you receive the best education possible. Whether you want to advance in your current career or explore new opportunities, EduSphere is here to support your journey to success.


                  </p>
                  <a href="#" className="btn btn-primary btn-hover-dark">
                    Start A Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-padding-02 mt-n6">
          <div className="container">
            <div className="about-items-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-tutor"></i>
                      </div>
                      <div className="item-title">
                        <h3 className="title">Top Instructors</h3>
                      </div>
                    </div>
                    <p>
                      Our instructors are industry experts with years of experience and a passion for teaching. They bring real-world knowledge and insights to the classroom, ensuring that you gain practical skills and understanding. Each instructor is dedicated to helping you achieve your educational and career goals.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-coding"></i>
                      </div>
                      <div className="item-title">
                        <h3 className="title">Portable Program</h3>
                      </div>
                    </div>
                    <p>
                      Portable Program
                      Our Portable Program is designed for flexibility and convenience, allowing you to learn anytime, anywhere. Whether you're at home, on the go, or traveling, you can access our courses and materials seamlessly. Stay connected and continue your education without any interruptions, ensuring that you make the most of your learning experience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-increase"></i>
                      </div>
                      <div className="item-title">
                        <h3 className="title">Improve Quickly</h3>
                      </div>
                    </div>
                    <p>
                      Our targeted and efficient learning programs are designed to help you make rapid progress. With focused content, practical exercises, and expert guidance, you'll be able to enhance your skills and knowledge in a short amount of time. Achieve your goals faster and see real results with our proven approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-padding-02">
        <div className="container">
          <div className="call-to-action-wrapper">
            <img
              className="cat-shape-01 animation-round"
              src={shape12}
              alt="Shape"
            />
            <img className="cat-shape-02" src={shape13} alt="Shape" />
            <img
              className="cat-shape-03 animation-round"
              src={shape12}
              alt="Shape"
            />
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="section-title shape-02">
                  <h5 className="sub-title">Become An Instructor</h5>
                  <h2 className="main-title">
                    You can join with Edusphere as <span>an instructor?</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="call-to-action-btn">
                  <a className="btn btn-primary btn-hover-dark" href="TeacherRegisteration">
                    Drop Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-padding mt-n1">
        <div className="container">
          <div className="section-title shape-03 text-center">
            <h5 className="sub-title">Team Member’s</h5>
            <h2 className="main-title">
              Edusphere Skilled <span>Instructor</span>
            </h2>
          </div>
          <div className="team-wrapper ">
            <div class="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
              {teamMembers.map((item) => (
                <div className="col-1" >
                  <div className="single-team">
                    <div className="team-thumb">
                      <img src={item.imgSrc} alt={item.altText} />
                    </div>
                    <div className="team-content">
                      <div className="rating">
                        <span className="count">{item.rating}</span>
                        <i className="icofont-star"></i>
                        <span className="text">(rating)</span>
                      </div>
                      <h4 className="name">{item.name}</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section section-padding-02 mt-n1">
        <div className="container">
          <div className="section-title shape-03 text-center">
            <h5 className="sub-title">Student Testimonial</h5>
            <h2 className="main-title">
              Feedback From <span>Student</span>
            </h2>
          </div>
          <div className="testimonial-wrapper testimonial-active">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {feedback.map((item) => (
                  <div className="single-testimonial  col-lg-6">

                    <div className="testimonial-author">

                      <div className="author-thumb">
                        <img src={item.imagefeed} alt="Author" />
                        <i className="icofont-quote-left"></i>
                      </div>
                      <span className="rating-star">
                        <span className="rating-bar"></span>
                      </span>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        {item.comment}
                      </p>
                      <h4 className="name"> {item.Namefeed}</h4>
                      <span className="designation">Product Designer,  {item.Nationfeed}</span>
                    </div>
                  </div>
                ))};
              </div>

            </div>
          </div>
        </div>
      </div>
      <Advertise />
      <Footer />
            <FloatingChatbot />
            <TidioChat />
    </>
  );
}

export default About;
