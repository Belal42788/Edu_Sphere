import "../../Styles/Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import image from "../../assets/images/shape/shape-26.png";
import image2 from "../../assets/images/register-login.png";
import React, { useRef, useState, useEffect } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Advertise from "../advertise";
import axios from 'axios';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,16}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,24}$/;


export default function Register() {
    const userRef = useRef();
    const errRef = useRef();


    const [FirstName, setFirstName] = useState("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [LASTName, setLASTName] = useState("");
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [emailregister, setemailregister] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [passwordregister, setPasswordregister] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [confirmpasswordregister, setconfirmPasswordregister] = useState("");
    const [validConPwd, setValidConPwd] = useState(false);
    const [conPwdFocus, setConPwdFocus] = useState(false);

    const [gender, setGender] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = emailRegex.test(emailregister);
        setValidEmail(result);
    }, [emailregister])

    useEffect(() => {
        const result = usernameRegex.test(FirstName);
        setValidFirstName(result);
    }, [FirstName])

    useEffect(() => {
        const result = usernameRegex.test(LASTName);
        setValidLastName(result);
    }, [LASTName])

    useEffect(() => {
        const result = passwordRegex.test(passwordregister);
        console.log(result);
        setValidPwd(result);
        const match = passwordregister === confirmpasswordregister;
        setValidConPwd(match);
    }, [passwordregister, confirmpasswordregister])

    useEffect(() => {
        setErrMsg("");
    }, [FirstName, LASTName, emailregister, passwordregister, confirmpasswordregister])

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleChangeLASTName = (e) => {
        setLASTName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setemailregister(e.target.value);
    };

    const onChangePassword = (e) => {
        setPasswordregister(e.target.value);
    };

    const onChangeconfirmPassword = (e) => {
        setconfirmPasswordregister(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleImageUpload = (e) => {
        setImageFile(e.target.files[0]);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     localStorage.setItem("FirstName", FirstName);
    //     localStorage.setItem("LASTName", LASTName);
    //     localStorage.setItem("emailregister", emailregister);
    //     localStorage.setItem("passwordregister", passwordregister);
    //     localStorage.setItem("confirmpasswordregister", confirmpasswordregister);
    //     localStorage.setItem("gender", gender);

    //     // Handle image file upload
    //     if (imageFile) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             localStorage.setItem("imageFile", reader.result);
    //         };
    //         reader.readAsDataURL(imageFile);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("FirstName", FirstName);
        formData.append("LastName", LASTName);
        formData.append("Email", emailregister);
        formData.append("Password", passwordregister);
        formData.append("confirmPassword", confirmpasswordregister);
        formData.append("Gender", gender);
        formData.append("Image", imageFile);



        try {
            const response = await axios.post('https://localhost:7225/api/User/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Registration successful', response.data);
            // Handle successful registration, e.g., redirect to login or home page
        } catch (error) {
            console.error('Error during registration', error);
            // Handle registration error
        }
    };

    return (
        <div>
            <Navbar name='Register' name2='form' name3='Register' />
            <div className="section section-padding">
                <div className="container">
                    <div className="register-login-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="register-login-images">
                                    <div className="shape-1">
                                        <img src={image} alt="Shape" />
                                    </div>
                                    <div className="images">
                                        <img src={image2} alt="Register Login" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="register-login-form">
                                    <h3 className="title">Registration <span>Now</span></h3>
                                    <div className="form-wrapper">
                                        <form onSubmit={handleSubmit}>
                                            <div className="single-form">
                                                <input type="text" onChange={handleChangeFirstName}
                                                    placeholder="First Name"
                                                    ref={userRef}
                                                    autoComplete="off"
                                                    required
                                                    aria-invalid={validFirstName ? "false" : "true"}
                                                    aria-describedby="uidnote"
                                                    onFocus={() => setFirstNameFocus(true)}
                                                    onBlur={() => setFirstNameFocus(false)} />
                                                <p id="uidnote" className={firstNameFocus && FirstName && !validFirstName ? "instructions" : "offscreen"}>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                    3 to 16 characters.<br />
                                                    Must begin with a letter.<br />
                                                </p>
                                            </div>

                                            <div className="single-form">
                                                <input type="text" onChange={handleChangeLASTName} placeholder="Last Name"
                                                    ref={userRef}
                                                    autoComplete="off"
                                                    required
                                                    aria-invalid={validLastName ? "false" : "true"}
                                                    aria-describedby="uidnote"
                                                    onFocus={() => setLastNameFocus(true)}
                                                    onBlur={() => setLastNameFocus(false)} />
                                                <p id="uidnote" className={lastNameFocus && LASTName && !validLastName ? "instructions" : "offscreen"}>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                    3 to 16 characters.<br />
                                                    Must begin with a letter.<br />
                                                </p>
                                            </div>
                                            <div className='single-form d-flex' >
                                                <label>Gender:</label>
                                                <div style={{ paddingLeft: '10px' }}>
                                                    <input type="radio" name="gender" value="Male" onChange={handleGenderChange} defaultChecked />
                                                    <label style={{ paddingRight: '15px' }}>Male</label>
                                                    <input type="radio" name="gender" value="Female" onChange={handleGenderChange} />
                                                    <label>Female</label>
                                                </div>
                                            </div>
                                            <div className="single-form">
                                                <input type="email" onChange={onChangeEmail} placeholder="Email"
                                                    ref={userRef}
                                                    autoComplete="off"
                                                    required
                                                    aria-invalid={validEmail ? "false" : "true"}
                                                    aria-describedby="uidnote"
                                                    onFocus={() => setEmailFocus(true)}
                                                    onBlur={() => setEmailFocus(false)} />
                                                <p id="uidnote" className={emailFocus && emailregister && !validEmail ? "instructions" : "offscreen"}>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                    Invalid Email.<br />
                                                </p>
                                            </div>
                                            <div className="single-form">
                                                <input type="password" onChange={onChangePassword} placeholder="Password"
                                                    ref={userRef}
                                                    required
                                                    aria-invalid={validPwd ? "false" : "true"}
                                                    aria-describedby="pwdnote"
                                                    onFocus={() => setPwdFocus(true)}
                                                    onBlur={() => setPwdFocus(false)} />
                                                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                    8 to 24 characters.<br />
                                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                                </p>
                                            </div>
                                            <div className="single-form">
                                                <input type="password" onChange={onChangeconfirmPassword} placeholder="Confirm Password"
                                                    ref={userRef}
                                                    required
                                                    aria-invalid={validConPwd ? "false" : "true"}
                                                    aria-describedby="confirmnote"
                                                    onFocus={() => setConPwdFocus(true)}
                                                    onBlur={() => setConPwdFocus(false)}
                                                />
                                                <p id="confirmnote" className={conPwdFocus && !validConPwd ? "instructions" : "offscreen"}>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                    Must match the password input field.
                                                </p>
                                            </div>
                                            <div className="single-form">
                                                <input type="file" onChange={handleImageUpload} />
                                            </div>
                                            <div className="single-form">
                                                <button className="btn btn-primary btn-hover-dark w-100" type="submit"
                                                    disabled={!validFirstName || !validLastName || !validPwd || !validEmail || !validConPwd ? true : false}
                                                >Create an account
                                                </button>
                                                <a className="btn btn-secondary btn-outline w-100" href="#">Sign up with Google</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </div>
    );
}
