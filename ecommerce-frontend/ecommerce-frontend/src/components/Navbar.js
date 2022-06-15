import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../pages";
import { useSelector } from "react-redux";

// import logo from "./images/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="container-fluid top-bg">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <i style={{ fontSize: "16px" }} className="fa fa-envelope"></i>
            mail@chasmaghar.com
          </div>
          <div className="col-md-3">
            <i style={{ fontSize: "16px" }} className="fa fa-phone"></i>
            +977-9840384342
          </div>

          <div
            className="col-md-3"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div>
              <i
                style={{ fontSize: "16px" }}
                className="
          fa fa-facebook"
              ></i>
            </div>
            <div>
              <i
                style={{ fontSize: "16px" }}
                className="
          fa fa-instagram"
              ></i>
            </div>
            <div>
              <i
                style={{ fontSize: "16px" }}
                className="
          fa fa-twitter"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row custom-header align-items-center">
          <div className="col-lg-3">
            <Link className="navbar-brand text-white" to="/">
              <img
                src="https://cdn.imgbin.com/4/9/18/imgbin-sunglasses-logo-physician-scientist-icon-sunglass-transparent-pair-of-black-sunglasses-lens-mJy7FA7hpnL9xPf8ZdBTicqEJ.jpg"
                alt="Chasmaghar"
                height="20px"
              />
              <span>Chasmaghar</span>
            </Link>
          </div>
          <div className="col-lg-6"></div>
          <div className="col-lg-3">
            <ul className="d-flex justify-content-evenly">
              {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="list-unstyled mt-2">
                  <Link
                    to="/admin/dashboard"
                    className="text-decoration-none text-white fs-5"
                  >
                    Admin
                  </Link>
                </li>
              )}
              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="list-unstyled mt-2">
                  <Link
                    to="/user/profile"
                    className="text-decoration-none text-white fs-5"
                  >
                    Profile
                  </Link>
                </li>
              )}
              {!isAuthenticated() && (
                <>
                  <li className="list-unstyled">
                    <Link
                      to="/signin"
                      className="text-decoration-none text-white fs-5"
                    >
                      Signin
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link
                      to="/signup"
                      className="text-decoration-none text-white fs-5"
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && (
                <button
                  className="btn btn-outline-warning mt-2"
                  onClick={() =>
                    signout(() => {
                      navigate("/");
                    })
                  }
                >
                  SignOut
                </button>
              )}

              <li className="list-unstyled">
                <Link
                  to="/cart"
                  className="text-decoration-none text-white fs-5"
                >
                  <i className="bi bi-cart-plus-fill fs-3 position-relative">
                    <span
                      className="position-absolute bottom-0 start-100 bg-warning badge rounded-pill translate-middle text-dark"
                      style={{ fontSize: "12px" }}
                    >
                      <span>{cartItems.length}</span>
                    </span>
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg custom-bg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "20px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/deals"
                  style={{ fontSize: "20px" }}
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/about-us"
                  style={{ fontSize: "20px" }}
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
