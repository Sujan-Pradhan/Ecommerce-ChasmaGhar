import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../index";
const AdminSideBar = () => {
  const {
    user: { name, email },
  } = isAuthenticated();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white"
        style={{
          width: "210px",
          height: "84vh",
          background: " #242424 0% 0% no-repeat padding-box",
          boxShadow: "2px 3px 5px #00000091",
          opacity: "1",
          top: "0px",
          left: "-0.734375px",
          margin: "-12px",
        }}
      >
        <div
          class="heading"
          style={{
            padding: "15px 15px 0px 0px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/268965516_1314488088973638_7352152989116679440_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=pYRbaPhvufMAX_Dd1lr&_nc_ht=scontent.fktm3-1.fna&oh=00_AT_2mxd4Rq5pVxefom78LGpimCrdxv444AxUNsPG-5YVHQ&oe=62A4B1CB"
            alt=""
            style={{
              top: "59px",
              left: "116px",
              width: " 97px",
              height: "97px",
              background:
                "transparent url('img/WomanPortrait.png') 0% 0% no-repeat padding-box",
              opacity: 1,
              borderRadius: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div
            class="info"
            style={{
              width: "40%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <ul class="user-info">
              <li
                style={{
                  padding: "5px 10px 0px 10px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <a
                  href="#"
                  style={{
                    textAlign: "center",
                    font: "Bold 20px/27px Nunito Sans",
                    letterSpacing: "0px",
                    color: " #F5F5F5",
                    opacity: 1,
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Sujan
                </a>
                <ul class="user-info-detail" style={{ listStyle: "none" }}>
                  <li>
                    <a
                      href="#"
                      style={{
                        textAlign: "center",
                        font: "Bold 20px/27px Nunito Sans",
                        letterSpacing: "0px",
                        color: "#F5F5F5",
                        opacity: "0.5",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      CEO
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to="/admin/dashboard"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-4"
        >
          <span className="fs-4">Dashboard</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/admin/addcategory"
              className="nav-link text-white"
              aria-current="page"
            >
              <i className="bi bi-speedometer2"></i>Add Category
            </Link>
          </li>
          <li>
            <Link to="/admin/addproduct" className="nav-link text-white">
              <i className="bi bi-clipboard-data"></i>Add Product
            </Link>
          </li>
          <li>
            <Link to="/admin/allorder" className="nav-link text-white">
              <i className="bi bi-bag-check-fill"></i> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/allproduct" className="nav-link text-white">
              <i className="bi bi-columns-gap"></i> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/allcustomer" className="nav-link text-white">
              <i className="bi bi-person-circle"></i> Customers
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/167661344_1147928848962897_6225470600788048232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D_a-4dL0xicAX_d3HB2&_nc_ht=scontent.fktm3-1.fna&oh=00_AT9i2JPb6Z2QOy7Y8VS2xZd8_BDecoEnFNUweJ_vy72Urw&oe=62C43BB7"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{name}</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link className="dropdown-item" to="#">
                {email}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            {/* <li><Link className="dropdown-item" to="#">Sign out</Link></li> */}
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
