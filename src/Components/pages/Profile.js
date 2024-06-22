import Navbar from "../Navbar";
import Footer from "../Footer";
import Advertise from "../advertise";
import React, { useState, useEffect } from "react";
import profilePicture from "../../assets/images/author/author-07.jpg"; // Updated profile picture path
import { useNavigate } from 'react-router-dom';
import AdminHeader from "../AdminHeader";
import FloatingChatbot from './floatingChatbot';
import TidioChat from './Tidiochat';
export default function Profile() {
  const coursesinf = [
    {
      id: 1, instructor: 'John Doe',  Email: 'ahmedre126@gmail.com', password: '1662002', courseName: 'Effective Communication Skills for Managers',
      Certificate: 'Yes'
    }]

  return (
    <>
     <div><Navbar name='my' name2='profile' name3='profile' /></div>
    <div className="section section-padding mt-n10">
    <div className="container">
      <div className="row gx-10">
        {/* <div className="col-lg-2">
        <img style={{borderRadius:'50%'}} src={profilePicture} alt="Shape" />

        </div> */}
        {coursesinf.map((item) => (

<div class="col-lg-12">
  <div class="sidebar">
    <div class="sidebar-widget widget-information">


      <div class="info-price">
      <img style={{borderRadius:'50%'}} src={profilePicture} alt="Shape" />
      </div>
      <div class="info-list">
        <ul>
          <li>
            <strong>Name</strong> <span>{item.instructor}</span>
          </li>

          <li>
            <strong>Email</strong> <span>{item.Email}</span>
          </li>

          <li>
            <strong>password</strong> <span>{item.password}</span>
          </li>
          <li>
            <strong>courseName</strong> <span>{item.courseName}</span>
          </li>
        </ul>
      </div>


     
    </div>
   
    
  </div>
</div>

))}
        </div>

          </div>
        </div>
        <div><Advertise /></div>
        <div><Footer /></div>
            <FloatingChatbot />
            <TidioChat />
        </>
  );
 }

{/* // import "../../Styles/";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import Advertise from "../advertise";
// import React, { useState, useEffect } from "react";
// import profilePicture from "../../assets/images/author/author-07.jpg"; // Updated profile picture path
// import { useNavigate } from 'react-router-dom';
// import AdminHeader from "../AdminHeader";
// import FloatingChatbot from './floatingChatbot';
// import TidioChat from './Tidiochat';


// export default function Profile() { */}/* //   const [userName, setUserName] = useState("");
//   const [emailLogin, setEmailLogin] = useState("");
//   const [imageFile, setImageFile] = useState(null);

//   useEffect(() => { 
//     const username = localStorage.getItem('UserName');
//     const email = localStorage.getItem('Email');
//     const image = localStorage.getItem('Image');
//       setUserName(!username ? "Username" :username);
//       setEmailLogin(!email ? "user@example.com" : email );
//       setImageFile(!image ? profilePicture : image );
//   }, []);

//   return (
//     <div>
//       <AdminHeader />
//       <div className="section section-padding">
//         <div className="container">
//           <div className="profile-wrapper">
//             <div className="profile-header">
//               <div className="profile-picture">
//                 <img src={imageFile} alt="User Profile" />
//               </div>
//               <div className="profile-details">
//                 <p className="username">
//                   <span className="label">Username:</span>
//                   <span className="value">{userName}</span>
//                 </p>
//                 <p className="email">
//                   <span className="label">Email:</span>
//                   <span className="value">{emailLogin}</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//             <FloatingChatbot />
//             <TidioChat />
//     </div>
//   );
// }
*/