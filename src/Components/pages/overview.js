import React from "react";
import author7 from "../../assets/images/author/author-07.jpg";
import Image1 from "../../assets/images/logo-icon.png";
import Icon1 from "../../assets/images/menu-icon/icon-1.png";
import Icon2 from "../../assets/images/menu-icon/icon-2.png";
import Icon3 from "../../assets/images/menu-icon/icon-3.png";
import Icon4 from "../../assets/images/menu-icon/icon-4.png";
import Icon5 from "../../assets/images/menu-icon/icon-5.png";
import "../../Styles/plugins/icofont.min.css";
import "../../Styles/plugins/animate.min.css";
import "../../Styles/plugins/swiper-bundle.min.css";
import "../../Styles/plugins/magnific-popup.css";
import "../../Styles/plugins/nice-select.css";
import "../../Styles/plugins/apexcharts.css";
import "../../Styles/plugins/jqvmap.min.css";
import "../../Styles/Contact.css";
import Footer from "../Footer";
import AdminHeader from "../AdminHeader";
function Overview() {
  return (
    <>
      <div><AdminHeader /></div>
      <div className="main-wrapper main-wrapper-02">
        <div className="section overflow-hidden position-relative" id="wrapper">
          <div className="sidebar-wrapper">
            <div className="menu-list">
              <a className="active" href="courses-admin.html">
                <img src={Icon1} alt="Icon" />
              </a>
              <a href="messages.html">
                <img src={Icon2} alt="Icon" />
              </a>
              <a href="overview.html">
                <img src={Icon3} alt="Icon" />
              </a>
              <a href="engagement.html">
                <img src={Icon4} alt="Icon" />
              </a>
              <a href="traffic-conversion.html">
                <img src={Icon5} alt="Icon" />
              </a>
            </div>
          </div>
          <div className="page-content-wrapper py-0">
            <div className="nav flex-column nav-pills admin-tab-menu">
              <a href="overview.html" className="active">
                Overview
              </a>
              <a href="students.html">Student’s</a>
              <a href="reviews.html">Review’s</a>
              <a href="engagement.html">Course Engagement</a>
              <a href="traffic-conversion.html">Traffic & Conversion</a>
            </div>
            <div className="main-content-wrapper">
              <div className="container-fluid">
                <div className="admin-top-bar flex-wrap">
                  <div className="courses-select">
                    <select>
                      <option data-display="All Courses">All Courses</option>
                      <option value="1">option</option>
                      <option value="2">option</option>
                      <option value="3">option</option>
                      <option value="4">Potato</option>
                    </select>
                  </div>
                  <div className="overview-box">
                    <div className="single-box">
                      <h5 className="title">Total Revenue</h5>
                      <div className="count">$568.00</div>
                      <p>
                        <span>$235.00</span> This months
                      </p>
                    </div>
                    <div className="single-box">
                      <h5 className="title">Total Enrollment’s</h5>
                      <div className="count">2,570</div>
                      <p>
                        <span>345</span> This months
                      </p>
                    </div>
                    <div className="single-box">
                      <h5 className="title">Instgructor Rating</h5>
                      <div className="count">
                        4.5
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "90%" }}
                          ></span>
                        </span>
                      </div>
                      <p>
                        <span>58</span> This months
                      </p>
                    </div>
                  </div>
                </div>
                <div className="graph">
                  <div className="graph-title">
                    <h4 className="title">
                      Get top insights about your performance
                    </h4>
                    <div className="months-select">
                      <select>
                        <option data-display="Last 12 months">
                          Last 12 months
                        </option>
                        <option value="1">Last 6 months</option>
                        <option value="1">Last 3 months</option>
                        <option value="1">Last 2 months</option>
                        <option value="1">Last 1 months</option>
                        <option value="1">Last 1 week</option>
                      </select>
                    </div>
                  </div>
                  <div className="graph-content">
                    <div id="uniqueReport"></div>
                  </div>
                  <div className="graph-btn">
                    <a className="btn btn-primary btn-hover-dark" href="#">
                      Revenue Report <i className="icofont-rounded-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
      <script src="assets/js/vendor/jquery-3.5.1.min.js"></script>
      <script src="assets/js/plugins.min.js"></script>
    </>
  );
}
export default Overview;
