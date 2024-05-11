import {React , useState} from 'react'
import './login.css'
import Navbar from "../Navbar.js";
import Sectionprimary from "../Sectionprimary.js";
export default function Login() {
  

  const [emaillogin, setemaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");

 
  const onChangeEmaillogin = (e) => {
    const email = e.target.value;
    setemaillogin(email);
  };

  const onChangePasswordlogin = (e) => {
    const password = e.target.value;
    setPasswordlogin(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emails = emaillogin.trim() ===localStorage.getItem("emailregister"); 
    const Passwords = passwordlogin.trim() ===localStorage.getItem("passwordregister"); 
     const fin = (emaillogin && passwordlogin)  
  if(fin) console.log("fin")

  };
  return (
                            <div className='parent_login'>
                            <div className='Navbarlogin col-12'><Navbar/></div>
                            <div className='Sectionprimarylogin  col-12' style={{zIndex:500 , marginTop:'82px'}}><Sectionprimary name = "Sign up" /></div>
                            <div className='formlogin mt-5 justify-content-center'>
                              <div className=' col-xl-4 col-lg-5 formlogin_parent'>
                              <form className='col-12'>
                             
                                <div className="form-floating mb-3 col-12 mt-3">
                                  <input type="email" onChange={onChangeEmaillogin} className="form-control" id="email" placeholder="Enter email" name="email"/>
                                  <label for="email">email</label>
                                </div>
                                <div className="form-floating mt-3 mb-3 col-12">
                                  <input type="password" onChange={onChangePasswordlogin} className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                                  <label for="pwd">password</label>
                                </div>
                               
                                <div classNameName='col-12 '>
                                <button  onClick={handleSubmit } type="button" style={{background:'#EEBD05'}} className="btn mt-3 btn-base w-100">Large button</button>

                                </div>
                                </form>
                              </div>
                            </div>
                          </div>        

  )
}





