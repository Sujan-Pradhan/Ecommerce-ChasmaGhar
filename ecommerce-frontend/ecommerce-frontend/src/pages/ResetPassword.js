import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { API } from "../config";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const params = useParams();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
  });

  const { email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    const token = params.token;
    //reset password
    fetch(`${API}/resetpassword/${token}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            error: "",
            email: "",
            password: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log(err));
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
      Password has been reset succesfully.
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginBottom: "50px" }}>
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
            {/* <form>
              <h4>Reset Your Password</h4>
              {showError()}
              {showSuccess()}
              <div className="col-12 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="form-control"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="**********"
                  className="form-control"
                  onChange={handleChange("password")}
                  value={password}
                />
              </div>

              <div className="col-4 mb-3">
                <button
                  className="btn btn-primary form-control"
                  onClick={handleSubmit}
                >
                  Change Password
                </button>
              </div>
            </form> */}
            <div class="container">
              <form id="contact" action="" method="post">
                <h3>Reset Password Form</h3>
                {showError()}
                {showSuccess()}
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
                    placeholder="**********"
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
                    id="contact-submit"
                    data-submit="...Sending"
                  >
                    Reset
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

export default ResetPassword;
