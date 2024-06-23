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
          blogtitle1:"Understanding these principles is crucial as they have been developed through extensive research and practice within the industry. They have stood the test of time and technological advancements, remaining relevant and integral to design practices. Popularized through educational resources and professional discourse, these principles form the foundation of good design.",
          blogtitle2:"Intrinsic cognitive load refers to the inherent difficulty associated with a specific instructional topic. It is crucial for designers to manage this load to ensure that users are not overwhelmed by the complexity of information presented to them.",  
          blogtitle3:"By simplifying content and breaking it down into manageable parts, designers can help users process information more efficiently. This approach not only enhances comprehension but also improves the overall user experience by reducing frustration and cognitive fatigue.",
          blogtitle4:"Hick's Law states that the time it takes to make a decision increases with the number of choices available. In UI/UX design, this principle is applied to create more intuitive and user-friendly interfaces by limiting options and simplifying decision-making processes for users."  ,
          blogtitle5:"The Law of Proximity states that objects that are close to each other are perceived as being related. In UI/UX design, this principle is used to organize information and interface elements in a way that groups related items together, making the interface more intuitive and easier to navigate.",
          blogtitle6:"Good design is not only about aesthetics but also about functionality and usability. By applying the principles of UI/UX design, designers can create products that are not only visually appealing but also highly functional and user-friendly.",
          blogtitle7:"Intrinsic Cognitive Load",
          blogtitle8:"A very nice example of Hicks Law that applies to user experience design are lists:",
          blogtitle9:"Law of Proximity",
          blogtitle10:"Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
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
            blogtitle1:"In the rapidly evolving business landscape, the fusion of a strong organizational culture with effective leadership is paramount to achieving long-term success. Culture shapes the way employees interact, make decisions, and perceive their roles within the company, while leadership provides direction, motivation, and support. Here, we explore the strategies that integrate culture and leadership to foster a thriving business environment.",
            blogtitle2:"Organizational culture is the collective values, beliefs, and behaviors that shape how work gets done within a company. It encompasses: Values and Beliefs: Core principles that guide the organization's actions.Norms and Behaviors: Expected standards and practices within the workplace.Symbols and Rituals: Traditions and symbols that represent the companys identity.",  
            blogtitle3:"Stories and Myths: Narratives that convey the organization’s history and values.A strong culture aligns with the company’s mission and vision, creating a sense of unity and purpose among employees.",
            blogtitle4:"Leadership plays a critical role in cultivating and sustaining organizational culture. Effective leaders:Model Desired Behaviors: Leaders must embody the values and behaviors they wish to see in their teams.Communicate Vision and Values: Clear communication of the company’s mission, vision, and values ensures that all employees are aligned and motivated.Empower Employees: Encouraging autonomy and innovation fosters a culture of trust and engagement."  ,
            blogtitle5:"Several companies have successfully integrated culture and leadership to drive success:",
            blogtitle6:"To create a harmonious and productive business environment",
            blogtitle7:"Understanding Organizational Culture",
            blogtitle8:"The Role of Leadership in Shaping Culture",
            blogtitle9:"Case Studies of Successful Integration",
            blogtitle10:"Strategies for Aligning Culture and Leadership",
           
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
          blogtitle1:"In today’s data-driven world, the ability to harness data and derive actionable insights is a crucial skill. Data Science and Machine Learning (DSML) with Python offers powerful tools and techniques to analyze data, build predictive models, and automate decision-making processes. This hands-on approach to learning ensures that participants not only understand theoretical concepts but also apply them to real-world problems.",
            blogtitle2:"Python has become the go-to language for DSML due to its simplicity, readability, and extensive libraries. Key reasons include:Ease of Learning and Use: Python’s straightforward syntax makes it accessible for beginners while powerful enough for experts.Rich Ecosystem: Libraries such as NumPy, Pandas, Matplotlib, Scikit-learn, and TensorFlow provide robust tools for data manipulation, visualization, and machine learning.Community Support: A large and active community contributes to continuous improvement, documentation, and support for Python.",  
            blogtitle3:"Our Data Science and Machine Learning with Python - Hands On!course is designed to equip participants with practical skills and knowledge. The course is structured into several modules, each focusing on different aspects of DSML",
            blogtitle4:"Data Science and Machine Learning are among the most in-demand skills in the job market. Professionals equipped with hands-on experience in these areas can pursue careers as:Data ScientistsMachine Learning EngineersData AnalystsBusiness Intelligence Analysts AI Specialists"  ,
            blogtitle5:"Our course emphasizes practical learning through:Interactive Coding Sessions: Participants engage in live coding exercises to reinforce learning.Real-World Datasets: Working with actual datasets to solve problems similar to those faced in industry settings.Project-Based Learning: Each module includes projects that encourage participants to apply concepts and techniques to real-world scenarios.Peer Collaboration: Opportunities for collaboration and knowledge-sharing among participants to enhance learning outcomes.",
            blogtitle6:"Enhanced Understanding: Applying theoretical concepts to practical problems deepens comprehension.Skill Development: Hands-on projects help in developing practical skills that are directly applicable in the workplace.Confidence Building: Real-world problem-solving builds confidence in using Python for DSML tasks.Portfolio Creation: Completed projects can be showcased in a portfolio to demonstrate expertise to potential employers.",
          
            blogtitle7:"Why Python for Data Science and Machine Learning?",
            blogtitle8:"Career Prospects",
            blogtitle9:"Hands-On Learning Approach",
            blogtitle10:"Benefits of Hands-On Learning",
        
        },
        {
          id: 4,
          imageSrc: blog5,
          authorImage: author5,
          authorName: "Randal Ramsey",
          category: "UI Design",
          title: "Create Amazing Color Schemes for Your UI Design Projects",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
          blogtitle1:"Understanding these principles is crucial as they have been developed through extensive research and practice within the industry. They have stood the test of time and technological advancements, remaining relevant and integral to design practices. Popularized through educational resources and professional discourse, these principles form the foundation of good design.",
          blogtitle2:"Intrinsic cognitive load refers to the inherent difficulty associated with a specific instructional topic. It is crucial for designers to manage this load to ensure that users are not overwhelmed by the complexity of information presented to them.",  
          blogtitle3:"By simplifying content and breaking it down into manageable parts, designers can help users process information more efficiently. This approach not only enhances comprehension but also improves the overall user experience by reducing frustration and cognitive fatigue.",
          blogtitle4:"Hick's Law states that the time it takes to make a decision increases with the number of choices available. In UI/UX design, this principle is applied to create more intuitive and user-friendly interfaces by limiting options and simplifying decision-making processes for users."  ,
          blogtitle5:"The Law of Proximity states that objects that are close to each other are perceived as being related. In UI/UX design, this principle is used to organize information and interface elements in a way that groups related items together, making the interface more intuitive and easier to navigate.",
          blogtitle6:"Good design is not only about aesthetics but also about functionality and usability. By applying the principles of UI/UX design, designers can create products that are not only visually appealing but also highly functional and user-friendly.",
          blogtitle7:"Intrinsic Cognitive Load",
          blogtitle8:"A very nice example of Hicks Law that applies to user experience design are lists:",
          blogtitle9:"Law of Proximity",
          blogtitle10:"Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
        },
        {
          id: 5,
          imageSrc: blog6,
          authorImage: author6,
          authorName: "Rochelle Thomas",
          category: "Business",
          title: "Build Brand Into Marketing: Tackling the New Marketing Landscape",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
          blogtitle1:"In the rapidly evolving business landscape, the fusion of a strong organizational culture with effective leadership is paramount to achieving long-term success. Culture shapes the way employees interact, make decisions, and perceive their roles within the company, while leadership provides direction, motivation, and support. Here, we explore the strategies that integrate culture and leadership to foster a thriving business environment.",
            blogtitle2:"Organizational culture is the collective values, beliefs, and behaviors that shape how work gets done within a company. It encompasses: Values and Beliefs: Core principles that guide the organization's actions.Norms and Behaviors: Expected standards and practices within the workplace.Symbols and Rituals: Traditions and symbols that represent the companys identity.",  
            blogtitle3:"Stories and Myths: Narratives that convey the organization’s history and values.A strong culture aligns with the company’s mission and vision, creating a sense of unity and purpose among employees.",
            blogtitle4:"Leadership plays a critical role in cultivating and sustaining organizational culture. Effective leaders:Model Desired Behaviors: Leaders must embody the values and behaviors they wish to see in their teams.Communicate Vision and Values: Clear communication of the company’s mission, vision, and values ensures that all employees are aligned and motivated.Empower Employees: Encouraging autonomy and innovation fosters a culture of trust and engagement."  ,
            blogtitle5:"Several companies have successfully integrated culture and leadership to drive success:",
            blogtitle6:"To create a harmonious and productive business environment",
            blogtitle7:"Understanding Organizational Culture",
            blogtitle8:"The Role of Leadership in Shaping Culture",
            blogtitle9:"Case Studies of Successful Integration",
            blogtitle10:"Strategies for Aligning Culture and Leadership",
        },
        {
          id: 6,
          imageSrc: blog7,
          authorImage: author7,
          authorName: "Della Salazar",
          category: "Science",
          title: "Finance Series: Learn to Budget and Calculate your Net Worth.",
          date: "21 March, 2021",
          likes: "2,568+",
          link: "blog-details-left-sidebar.html",
          blogtitle1:"In the rapidly evolving business landscape, the fusion of a strong organizational culture with effective leadership is paramount to achieving long-term success. Culture shapes the way employees interact, make decisions, and perceive their roles within the company, while leadership provides direction, motivation, and support. Here, we explore the strategies that integrate culture and leadership to foster a thriving business environment.",
            blogtitle2:"Intrinsic cognitive load refers to the inherent difficulty associated with a specific instructional topic. It is crucial for designers to manage this load to ensure that users are not overwhelmed by the complexity of information presented to them.",  
            blogtitle3:"Stories and Myths: Narratives that convey the organization’s history and values.A strong culture aligns with the company’s mission and vision, creating a sense of unity and purpose among employees.",
            blogtitle4:"Leadership plays a critical role in cultivating and sustaining organizational culture. Effective leaders:Model Desired Behaviors: Leaders must embody the values and behaviors they wish to see in their teams.Communicate Vision and Values: Clear communication of the company’s mission, vision, and values ensures that all employees are aligned and motivated.Empower Employees: Encouraging autonomy and innovation fosters a culture of trust and engagement."  ,
            blogtitle5:"Several companies have successfully integrated culture and leadership to drive success:",
            blogtitle6:"To create a harmonious and productive business environment",
            blogtitle7:"Intrinsic Cognitive Load",
            blogtitle8:"A very nice example of Hicks Law that applies to user experience design are lists:",
            blogtitle9:"Law of Proximity",
            blogtitle10:"Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
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
                 
                  {blog.blogtitle1}
                  </p>
                  {blog.blogtitle1}
                  <p>

                 </p>

                 

                  <h3>  {blog.blogtitle7}</h3>

                  <p>
                  {blog.blogtitle2}                  </p>

                  <p>
                  {blog.blogtitle3}   
                  </p>

                  <h3>
                  {blog.blogtitle8}

                  </h3>

                  <p>
                  {blog.blogtitle4} 
                  </p>

                  <h3>  {blog.blogtitle9}</h3>

                  <p>
                    {blog.blogtitle5}
                    </p>

                  <blockquote class="blockquote">
                    <span class="quote">“</span>
                    <p>
                  {blog.blogtitle10}

                    </p>
                  </blockquote>

                  <p>

                  { blog.blogtitle6}               
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
