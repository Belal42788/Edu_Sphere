import React from 'react'



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


import "../../Styles/Contact.css"
import Navbar from '../Navbar'; 
import Footer from '../Footer'; 
import Advertise from "../advertise"

function Blog() {
    const blogData = [
        {
          id: 1,
          imageSrc: blog2,
          authorImage: author2,
          authorName: "Pamela Foster",
          category: "UX Design",
          title: "Create Amazing Color Schemes for Your UX Design Projects",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
        },
        {
          id: 2,
          imageSrc: blog3,
          authorImage: author3,
          authorName: "Patricia Collins",
          category: "Business",
          title: "Culture & Leadership: Strategies for a Successful Business",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
        },
        {
          id: 3,
          imageSrc: blog4,
          authorImage: author4,
          authorName: "Archie Neal",
          category: "Science",
          title: "Data Science and Machine Learning with Python - Hands On!",
          date: "21 March, 2021",
          likes: "2,568+",
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
        {
          id: 7,
          imageSrc: blog8,
          authorImage: author8,
          authorName: "Ricardo Patrick",
          category: "UX Design",
          title: "Create Amazing Color Schemes for Your UX Design Projects",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
        }
      ];
  return (
    <div>

<Navbar name='Our' name2='Blog' name3='Blog' />
    
        <div class="section section-padding mt-n10">
            <div class="container">

                
                <div class="blog-wrapper">
                    <div class="row">
                    {blogData.map(blog => (
        <div key={blog.id} className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="blog-image">
              <a href={blog.link}><img src={blog.imageSrc} alt="Blog" /></a>
            </div>
            <div className="blog-content">
              <div className="blog-author">
                <div className="author">
                  <div className="author-thumb">
                    <a href="#"><img src={blog.authorImage} alt="Author" /></a>
                  </div>
                  <div className="author-name">
                    <a className="name" href="#">{blog.authorName}</a>
                  </div>
                </div>
                <div className="tag">
                  <a href="#">{blog.category}</a>
                </div>
              </div>

              <h4 className="title"><a href={blog.link}>{blog.title}</a></h4>

              <div className="blog-meta">
                <span> <i className="icofont-calendar"></i> {blog.date}</span>
                <span> <i className="icofont-heart"></i> {blog.likes} </span>
              </div>

              <a href="blogdetails" className="btn btn-secondary btn-hover-primary">Read More</a>
            </div>
          </div>
        </div>
      ))}
                    </div>
                </div>
               
               
             

            </div>
        </div>















        <div><Advertise /></div>
        <div><Footer /></div>














    </div>
  )
}

export default Blog