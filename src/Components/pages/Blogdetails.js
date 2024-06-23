import React from "react";
import author1 from "../../assets/images/author/author-01.jpg";
import author2 from "../../assets/images/author/author-02.jpg";
import author3 from "../../assets/images/author/author-17.jpg";
import author4 from "../../assets/images/author/author-04.jpg";
import author5 from "../../assets/images/author/author-20.jpg";
import author6 from "../../assets/images/author/author-19.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import author8 from "../../assets/images/author/author-06.jpg";
import author9 from "../../assets/images/author/author-01.jpg";
import blog1 from "../../assets/images/blog/blog-01.jpg"
import blog2 from "../../assets/images/blog/blog-02.jpg"
import blog3 from "../../assets/images/blog/blog-03.jpg"
import blog4 from "../../assets/images/blog/blog-04.jpg"
import blog5 from "../../assets/images/blog/blog-05.jpg"
import blog6 from "../../assets/images/blog/blog-06.jpg"
import blog7 from "../../assets/images/blog/blog-07.jpg"
import blog8 from "../../assets/images/blog/blog-08.jpg"
import blog9 from "../../assets/images/blog/blog-09.jpg"


import details1 from "../../assets/images/blog/blog-details.jpg";
import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise";
import { useParams } from 'react-router-dom';

const blogData = [
        {
          id: 1,
          imageSrc: blog2,
          authorImage: author2,
          authorName: "Pamela Foster",
          category: "UX Design",
          title: "Create Amazing Color Schemes for Your UX Design Projects",
          date: "21 October, 2022",
          likes: "2,220+",
          link: "blog-details-left-sidebar.html",
        },
        {
          id: 2,
          imageSrc: blog3,
          authorImage: author3,
          authorName: "Patricia Collins",
          category: "Business",
          title: "Culture & Leadership: Strategies for a Successful Business",
          date: "17 Septmber, 2020",
          likes: "2,120+",
          link: "blog-details-left-sidebar.html",
        },
        {
          id: 3,
          imageSrc: blog4,
          authorImage: author4,
          authorName: "Archie Neal",
          category: "Science",
          title: "Data Science and Machine Learning with Python - Hands On!",
          date: "24 April, 2023",
          likes: "3,487+",
          link: "blog-details-left-sidebar.html",
        
        },
        {
          id: 4,
          imageSrc: blog5,
          authorImage: author5,
          authorName: "Randal Ramsey",
          category: "UX Design",
          title: "Create Amazing Color Schemes for Your UX Design Projects",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
        },
        {
          id: 5,
          imageSrc: blog6,
          authorImage: author6,
          authorName: "Rochelle Thomas",
          category: "Business",
          title: "Culture & Leadership: Strategies for a Successful Business",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
        },
        {
          id: 6,
          imageSrc: blog7,
          authorImage: author7,
          authorName: "Della Salazar",
          category: "Science",
          title: "Data Science and Machine Learning with Python - Hands On!",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
        },

      ];

function Blogdetails() {

  const { id } = useParams();
  const blog = blogData.find(c => c.id === parseInt(id));

  return (
    <div>
      <Navbar
        name="Our"
        name2={blog.title}
        name3="Blogdetails"
      />

      <div class="section section-padding mt-n10">
        <div class="container">
          <div class="row flex-row-reverse gx-10">
            <div class="col-lg-13">
              <div class="blog-details-wrapper">
                <div class="blog-details-admin-meta">
                  <div class="author">
                    <div class="author-thumb">
                      <a href="#">
                        <img src={blog.authorImage} alt="Author" />
                      </a>
                    </div>
                    <div class="author-name">
                      <a class="name" href="#">
                        {blog.authorName}
                      </a>
                    </div>
                  </div>
                  <div class="blog-meta">
                    <span>
                      {" "}
                      <i class="icofont-calendar"></i> {blog.date}
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-heart"></i> {blog.likes}{" "}
                    </span>
                    <span class="tag">
                      <a href="#">{blog.category}</a>
                    </span>
                  </div>
                </div>

                <h2 class="title">
                  {blog.title }
                </h2>

                <div class="blog-details-description">
                  <p>
                 
                  </p>

                  <p>
                  Understanding these principles is crucial as they have been developed through extensive research and practice within the industry. They have stood the test of time and technological advancements, remaining relevant and integral to design practices. Popularized through educational resources and professional discourse, these principles form the foundation of good design.
                  </p>

                 

                  <h3>Intrinsic Cognitive Load</h3>

                  <p>
                  Intrinsic cognitive load refers to the inherent difficulty associated with a specific instructional topic. It is crucial for designers to manage this load to ensure that users are not overwhelmed by the complexity of information presented to them.
                  </p>

                  <p>
                  By simplifying content and breaking it down into manageable parts, designers can help users process information more efficiently. This approach not only enhances comprehension but also improves the overall user experience by reducing frustration and cognitive fatigue.
                  </p>

                  <h3>
                    A very nice example of Hick’s Law that applies to user
                    experience design are lists:
                  </h3>

                  <p>
                  Hick's Law states that the time it takes to make a decision increases with the number of choices available. In UI/UX design, this principle is applied to create more intuitive and user-friendly interfaces by limiting options and simplifying decision-making processes for users.
                  </p>

                  <h3>Law of Proximity</h3>

                  <p>
                  The Law of Proximity states that objects that are close to each other are perceived as being related. In UI/UX design, this principle is used to organize information and interface elements in a way that groups related items together, making the interface more intuitive and easier to navigate.
                  </p>

                  <blockquote class="blockquote">
                    <span class="quote">“</span>
                    <p>
                    Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs
                    </p>
                  </blockquote>

                  <p>
                  Good design is not only about aesthetics but also about functionality and usability. By applying the principles of UI/UX design, designers can create products that are not only visually appealing but also highly functional and user-friendly.
                  </p>
                </div>

                <div class="blog-details-label">
                  <h4 class="label">Tags:</h4>
                  <ul class="tag-list">
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Education</a>
                    </li>
                  </ul>
                </div>

                <div class="blog-details-label">
                  <h4 class="label">Share:</h4>
                  <ul class="social">
                    <li>
                      <a href="#">
                        <i class="flaticon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>
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
    </div>
  );
}

export default Blogdetails;
