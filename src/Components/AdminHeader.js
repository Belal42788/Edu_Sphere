import React from "react";
import author7 from "../assets/images/author/author-07.jpg";
import Image1 from "../assets/images/logo-icon.png";
import Icon1 from "../assets/images/menu-icon/icon-1.png";
import Icon2 from "../assets/images/menu-icon/icon-2.png";
import Icon3 from "../assets/images/menu-icon/icon-3.png";
import Icon4 from "../assets/images/menu-icon/icon-4.png";
import Icon5 from "../assets/images/menu-icon/icon-5.png";
import "../Styles/plugins/icofont.min.css";
import "../Styles/plugins/animate.min.css";
import "../Styles/plugins/swiper-bundle.min.css";
import "../Styles/plugins/magnific-popup.css";
import "../Styles/plugins/nice-select.css";
import "../Styles/plugins/apexcharts.css";
import "../Styles/plugins/jqvmap.min.css";
import "../Styles/Contact.css";
function AdminHeader() {
  return (
    <>
      <div className="section login-header">
        <div className="login-header-wrapper navbar navbar-expand">
          <div className="login-header-logo">
            <a href="/">
              <img src={Image1} alt="Logo" />
            </a>
          </div>
          <div className="login-header-search dropdown">
            <button className="search-toggle" data-bs-toggle="dropdown">
              <i className="flaticon-loupe"></i>
            </button>
            <div className="search-input dropdown-menu">
              <form action="#">
                <input type="text" placeholder="Search here" />
              </form>
            </div>
          </div>
          <div className="login-header-action ml-auto">
            
            <a className="action author" href="profile">
              <img src={author7} alt="Author" />
            </a>
            <div className="dropdown">
              <button className="action more" data-bs-toggle="dropdown">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="" href="profile">
                    <i className="icofont-user"></i> Profile
                  </a>
                </li>
                <li>
                  <a className="" href="login">
                    <i className="icofont-logout"></i> Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminHeader;
