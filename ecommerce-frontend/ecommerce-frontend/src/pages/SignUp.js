import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { signup } from "./index";
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    //signup function
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          success: true,
        });
      }
    });
  };
  //show error msg
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  //to show success msg
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Account is created, verify your email first to continue.......
    </div>
  );
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4 mb-3 p-3">
            <div class="container">
              <form id="contact" action="" method="post">
                {showError()}
                {showSuccess()}
                <h3>Sign Up Form</h3>

                <fieldset>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="form-control"
                    onChange={handleChange("name")}
                    value={name}
                    placeholder="Your name"
                    tabindex="1"
                    required
                    autofocus
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange("email")}
                    value={email}
                    placeholder="Your Email Address"
                    tabindex="2"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="password"
                    name="pass"
                    id="password"
                    placeholder="***********"
                    className="form-control"
                    onChange={handleChange("password")}
                    value={password}
                    tabindex="3"
                    required
                  />
                </fieldset>

                <fieldset>
                  <button
                    className="btn btn-primary form-control"
                    onClick={handleSubmit}
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                  >
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
