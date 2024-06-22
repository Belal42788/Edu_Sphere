import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../../Styles/Contact.css'
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';

function Faq() {
  const programmingData = [
    {
      question: "What are the main technologies used in front-end development?",
      answer: "The main technologies are HTML, CSS, and JavaScript. Popular frameworks and libraries include React, Angular, and Vue.js."
    },
    {
      question: "What are the common languages and frameworks used in back-end development?",
      answer: "Common languages include JavaScript (Node.js), Python (Django, Flask), Ruby (Ruby on Rails), PHP (Laravel), and Java (Spring)."
    },
    {
      question: "What does a full-stack developer do?",
      answer: "A full-stack developer handles both front-end and back-end development, meaning they work on the complete technology stack from the user interface to the server and database management."
    },
    {
      question: "What language is primarily used for iOS development?",
      answer: "Swift is the primary language for iOS development, although Objective-C is also used."
    },
    {
      question: "What language is primarily used for Android development?",
      answer: "Java and Kotlin are the primary languages used for Android development."
    },
    {
      question: "What are popular frameworks for cross-platform mobile development?",
      answer: "Popular frameworks include React Native, Flutter, and Xamarin."
    },
    {
      question: "What is a primary key in a database?",
      answer: "A primary key is a unique identifier for a record in a table. It must contain unique values and cannot be null."
    },
    {
      question: "What are the types of NoSQL databases?",
      answer: "The types include document databases (e.g., MongoDB), key-value stores (e.g., Redis), wide-column stores (e.g., Cassandra), and graph databases (e.g., Neo4j)."
    },
    {
      question: "What is the difference between supervised and unsupervised learning?",
      answer: "Supervised learning involves training a model on labeled data, where the outcome is known, whereas unsupervised learning involves training a model on unlabeled data to find hidden patterns or intrinsic structures."
    },
    {
      question: "What are the four main principles of object-oriented programming (OOP)?",
      answer: "The four main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism."
    }
  ];
  return (
    <div>
      <div>      <Navbar name='Frequently Asked' name2='Question' name3='faq' /></div>
      <div className='container'>
        <div className="section section-padding">
          <div className="container">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <div className="faq-wrapper">
                  {programmingData.map((item) => (
                    <div className="single-faq-item">
                      <div className="row align-items-center">
                        <div className="col-lg-5">
                          <div className="faq-title">
                            <h4 className="title">{item.question}</h4>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="faq-text">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Footer /></div>
            <FloatingChatbot />
            <TidioChat />
    </div>
  )
}
export default Faq
