import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Contact.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function VisaCard() {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <>

<div className="container" style={{ position: 'relative' }} >
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
        </div>
      </div>
    </div>
    </>
  );
}

export default VisaCard;
