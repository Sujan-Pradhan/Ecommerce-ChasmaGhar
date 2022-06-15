import React, { useState } from "react";
import { isAuthenticated } from "../index";
import AdminSideBar from "./AdminSideBar";
import { addcategory } from "./apiIndex";
import Navbar from "../../components/Navbar";
const AddCategory = () => {
  const [category_name, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  //destructure token
  const { token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setCategory(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    //make request to add category
    addcategory(token, { category_name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
        setCategory("");
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
      New category added
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-6 mt-4">
            {/* <form className="p-3">
              <h2 className="text-muted">Add Category</h2>
              {showError()}
              {showSuccess()}
              <div className="mb-3">
                <input
                  type="text"
                  id="category"
                  placeholder="Category"
                  className=""
                  onChange={handleChange}
                  value={category_name}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Add
                </button>
              </div>
            </form> */}
            <div class="container">
              <form id="contact" action="" method="post">
                {showError()}
                {showSuccess()}
                <h3>Add Category</h3>

                <fieldset>
                  <input
                    id="category"
                    onChange={handleChange}
                    value={category_name}
                    placeholder="Category"
                    type="text"
                    tabindex="1"
                    required
                    autofocus
                  />
                </fieldset>

                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                    onClick={handleSubmit}
                  >
                    Add
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

export default AddCategory;
