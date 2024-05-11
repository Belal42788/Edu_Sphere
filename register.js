import {React , useState} from 'react'
import '../pages/register.css'
import Navbar from "../Navbar.js";
import Sectionprimary from "../Sectionprimary.js";

export default function Register() {
  const [Nameregister, setNameregister] = useState("");
 

  const [emailregister, setemailregister] = useState("");
  const [passwordregister, setPasswordregister] = useState("");
  const [confirmpasswordregister, setconfirmPasswordregister] = useState("");

  const handleChangeName = (e) => {
    const username = e.target.value;
    setNameregister(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setemailregister(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPasswordregister(password);
  };
  const onChangeconfirmPassword = (e) => {
    const confirmpassword = e.target.value;
    setconfirmPasswordregister(confirmpassword);
  };
 
 
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Nameregister" , Nameregister)
  
    localStorage.setItem("emailregister" , emailregister)
    localStorage.setItem("passwordregister" , passwordregister)
    localStorage.setItem("confirmpasswordregister" , confirmpasswordregister)

  };
  return (
                            <div className='parent_register'>
                              <div className='Navbarregister col-12'><Navbar/></div>
                              <div className='Sectionprimaryregister  col-12'  style={{zIndex:500 , marginTop:'82px'}}><Sectionprimary name = "Sign In" /></div>
                              <div className='formregister mt-5 justify-content-center'>
                                <div className='col-xl-4 col-lg-5 formregister_parent'>
                                <form className='col-12'>
                                <div className="form-floating mb-3 col-12 mt-3">
                                    <input type="text"  onChange={handleChangeName} className="form-control col-6" id="Name" placeholder="Enter Name" name="Name"/>
                                    <label for="Name">name</label>
                                  </div>
                                  <div className="form-floating mb-3 col-12 mt-3">
                                    <input type="email" onChange={onChangeEmail} className="form-control" id="email" placeholder="Enter email" name="email"/>
                                    <label for="email">email</label>
                                  </div>
                                  <div className="form-floating mt-3 mb-3 col-12">
                                    <input type="password" onChange={onChangePassword} className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                                    <label for="pwd">password</label>
                                  </div>
                                  <div className="form-floating mt-3 mb-3 col-12">
                                    <input type="password" onChange={onChangeconfirmPassword} className="form-control" id="conifpswd" placeholder="Enter Confirm password" name="conpswd"/>
                                    <label for="conifpswd">confirm password</label>
                                  </div>
                                  <div classNameName='col-12 mt-3'>
                                  <button  onClick={handleSubmit } type="button" style={{background:'#EEBD05'}} className="btn mt-3  btn-base w-100">Large button</button>

                                  </div>
                                  </form>
                                </div>
                              </div>
                            </div>                
 
  )
}

/*
 <div className="parent">
                            <div className="card mb-3" style={{width: '50rem', minHeight: '15rem'}}>
                              <div className="row g-0">
                                <div className="col-md-4 imgreg ">
                                <img src={piucture_lap}  className="img-fluid  rounded-start" alt="piucture_lap" />   
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                  <form onSubmit={handleSubmit}>
                                  <div className="row col-md-12 colect1">
                              
                                  <div className="col-md-5">
                                  <label for="staticEmail" className="col-sm-6 col-form-label">Name</label>
                                  </div>
                            <div className="col-sm-4">
                              <input type="text" className="form-control" name='First_Name' placeholder="First_Name" onChange={handleChangeFirst_Name} aria-label="First_Name" />
                            </div>
                           
                            <div className="col-sm-3">
                              <input type="text" className="form-control" name='Last_Name'  placeholder="Last_Name" onChange={handleChangeLast_Name} aria-label="Last_Name" />
                            </div>

                            <div className="col-md-5">
                                  <label for="staticEmail" className="col-sm-6 col-form-label mt-4">Email</label>
                                  </div>
                                  <div className="col-md-7 mt-4">

                              <input type="email" className="form-control"  name='Email' onChange={onChangeEmail} placeholder="Email" aria-label="Email" />
                                  </div>
                            <div className="col-md-5">
                                  <label for="staticEmail"  className="col-sm-6 pass col-form-label mt-4">Password</label>
                                  </div>
                                  <div className="col-md-7  mt-4">

                              <input type="password" className="form-control"  name='Password'  onChange={onChangePassword} placeholder="Password" aria-label="Password" />
                            </div>
                         
                            <div className="col-md-12 mt-1">

<div className="row ">
<div className="col-md-12" style={{display:'flex' , justifyContent:'space-evenly'}}>
<a href='#' style={{textDecoration:'none' , textTransform:'capitalize' , fontSize:'2rem'}}> Login</a>
<button type="submit" onSubmit={handleSubmit } className="col-md-4 btn btn-primary btn-lg btn-block">Google</button>

</div>
</div>


</div> 





                                      
                                    

                                                <div className="col-md-6 mt-5" style={{margin:'auto'}}>
              
                                  <a href='#' style={{textDecoration:'none' , textTransform:'capitalize'}}>already register</a>
                                  </div>
                            </div>

                            </form> 
                                  </div>
                                </div>
                              </div>
                            </div>
                  </div>

  // <div className="parent">
                              {/* <div className="card mb-3" style={{width: '55rem', minHeight: '5rem'}}>
                          <div className="row g-0">
                            <div className="col-md-4 img">
                            <img src={piucture_lap} style={{height:'45vh' , objectFit: 'cover'}} className="img-fluid rounded-start" alt="piucture_lap" />   
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                              <form onSubmit={handleSubmit}>
                              <div className="row row-md-12 colect1">
                          
                            
                      

                        <div className="col-md-3">
                              <label for="staticEmail" className="col-sm-6 col-form-label mt-4">Email</label>
                              </div>
                              <div className="col-md-9 mt-4">

                              <input type="email" className="form-control"  name='Email' onChange={onChangeEmail} placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="col-md-3">
                              <label for="staticEmail"  className=" col-form-label mt-4">Password</label>
                              </div>
                              <div className="col-md-9 pass mt-4">

                              <input type="password" className="form-control"  name='Password'  onChange={onChangePassword} placeholder="Password" aria-label="Password" />
                        </div>
                                          

                      
                                
                                  <div className="col-md-12 mt-1">

                                  <div className="row mt-5">
                                  <div className="col-md-12" style={{display:'flex' , justifyContent:'space-evenly'}}>
                                  <a href='#' style={{textDecoration:'none' , textTransform:'capitalize' , fontSize:'2rem'}}> register</a>
                                  <button type="submit" onSubmit={handleSubmit } className="col-md-4 btn btn-primary btn-lg btn-block">Login</button>

                                  </div>
                                  </div>
                          
                              
                              </div>    
                          
                        </div>
                        </form> 
                      
                            
                            </div>
                          </div>
                        </div>
              </div>
              </div> */






