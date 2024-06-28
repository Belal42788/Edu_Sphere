import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Contact.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VisaCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const hundelChange = async (e) => { 
  const token = localStorage.getItem('UserToken');
  if (!token) {
    alert('User is not logged in');
    return;
  }

  const Id = { id: id }; // replace with your actual course ID

  try {
    const response = await axios.post('https://localhost:7225/api/Student/JoinCourse', Id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response.data);
    alert('Join successful');
    navigate('/Afterenroll', { state: { data: response.data } });
  } catch (error) {
    console.error('Error joining course', error);
    if (error.response && error.response.status === 401) {
      alert('Unauthorized. Please log in again.');
      // Redirect to login or show login modal
      navigate('/login'); // adjust this to your login route
    } else {
      alert('An error occurred. Please try again later.');
    }
  }
}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <>

<div className="container" style={{ position: 'relative',marginTop:'14%' }} >
      <div className="box justify-content-center align-items-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 20%)' }}>
        <div className="formDiv row">
          <div className="creditCard mb-3 col-6">
            <Cards
              cvc={cardInfo.cvc}
              expiry={cardInfo.expiry}
              focused={cardInfo.focus}
              name={cardInfo.name}
              number={cardInfo.number}
            />
          </div>
          <div className="col-6">
          <form>
            <div className="mb-3">
              <input
                type="tel"
                id="cardNumber"
                name="number"
                className="form-control"
                placeholder="Card Number"
                value={cardInfo.number}
                onChange={handleInputChange}
                onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
              />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <input
                    type="text"
                    id="cardName"
                    name="name"
                    className="form-control"
                    placeholder="Cardholder Name"
                    value={cardInfo.name}
                    onChange={handleInputChange}
                    onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <input
                    type="tel"
                    id="cardExpiration"
                    name="expiry"
                    className="form-control"
                    placeholder="Expiration Date"
                    value={cardInfo.expiry}
                    onChange={handleInputChange}
                    onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <input
                    type="tel"
                    id="cardSecurityCode"
                    name="cvc"
                    className="form-control"
                    placeholder="Security Code"
                    value={cardInfo.cvc}
                    onChange={handleInputChange}
                    onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
                  />
                </div>
              </div>
            </div>
          </form>
          </div>
          <div className="single-form col-6 " style={{margin:'auto'}}>
              <button type="submit" onClick={hundelChange} className="btn btn-primary btn-hover-dark w-100">Join</button>
                                            </div>
        </div>
      </div>
   

    </div>
    </>
  );
}

export default VisaCard;
