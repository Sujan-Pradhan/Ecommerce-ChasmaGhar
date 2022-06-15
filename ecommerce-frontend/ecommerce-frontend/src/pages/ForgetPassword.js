import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { forgetPassword } from "./index";
const ForgetPassword = () => {
  const [values, setValues] = useState({
    email: "",
    error: "",
    success: "",
  });

  const { email, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    forgetPassword({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", success: true });
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
      Password reset link has been sent to your email.
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
        <label htmlFor='email'>Email</label>
        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handleChange('email')} value={email}/>
        </div>
        <div className="col-4 mb-3">
         <button className="btn btn-primary form-control" onClick={handleSubmit}>Send Password Reset Link</button>
        </div>
       
      </form> */}
            <div class="container">
              <form id="contact" action="" method="post">
                {showError()}
                {showSuccess()}
                <h3>Forget Password</h3>

                <fieldset>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="form-control"
                    onChange={handleChange("email")}
                    value={email}
                    tabindex="2"
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
    </>
  );
};

export default ForgetPassword;
