import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
// import logo from "./images/logo.png";
const Footer = () => {
  return (
    <>
      {/* <div className="container-fluid">
        <footer>
          <div className="footer">
            <div>
              <h2>Information</h2>
              <ul className="footer-links">
                <li footer-item>
                  <Link className="footer-link" to="">
                    Help
                  </Link>
                </li>
                <li footer-item>
                  <Link className="footer-link" to="">
                    Terms & Conditions
                  </Link>
                </li>
                <li footer-item>
                  <Link className="footer-link" to="">
                    Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Services</h2>
              <ul className="footer-links">
                <li footer-item>
                  <Link className="footer-link" to="">
                    Delivery
                  </Link>
                </li>
                <li footer-item>
                  <Link className="footer-link" to="">
                    Avaliable any time
                  </Link>
                </li>
                <li footer-item>
                  <Link className="footer-link" to="">
                    Different offere avaliable{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Contact Us</h2>
              <ul className="footer-links">
                <li footer-item>
                  <Link className="footer-link" to="">
                    About Us
                  </Link>
                </li>
                <li footer-item>
                  <Link className="footer-link" to="">
                    Terms & Conditions
                  </Link>
                </li>
                <li footer-item>
                  <Link className="footer-link" to="">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div classNameName="social-icons">
            <div>
              <Link to="">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
            </div>
            <div>
              <Link to="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </div>
            <div>
              <Link to="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <img src={logo} />
            </div>
            <div>
              <p className="text-center">
                Copyright &copy; Karuna all Rights Reserved. Developed and
                Maintain By Karuna Shrestha
              </p>
            </div>
          </div>
        </footer>
      </div> */}

      {/* Another footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>32, Koteshwor Kathmandu Nepal</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9840384342</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@chasmaghar.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link className="navbar-brand text-white" to="/">
                      <img
                        src="https://cdn.imgbin.com/4/9/18/imgbin-sunglasses-logo-physician-scientist-icon-sunglass-transparent-pair-of-black-sunglasses-lens-mJy7FA7hpnL9xPf8ZdBTicqEJ.jpg"
                        alt="Chasmaghar"
                        height="20px"
                      />
                      <span>Chasmaghar</span>
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      Welcome to Chasma Ghar, your number one source for all
                      kinds of goggles. We're dedicated to giving you the very
                      best of goggles, customer service and uniqueness.Founded
                      in 2022 by Mr. Sujan Pradhan.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <Link to="#">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Shop</Link>
                    </li>

                    <li>
                      <Link to="#">Contact</Link>
                    </li>
                    <li>
                      <Link to="#">About us</Link>
                    </li>
                    <li>
                      <Link to="#">Our Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2022, All Right Reserved{" "}
                    <a href="https://www.facebook.com/ekraj.shrestha.71/">
                      Sujan
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Terms</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy</Link>
                    </li>
                    <li>
                      <Link to="#">Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
