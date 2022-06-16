import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../index";
import AdminSideBar from "./AdminSideBar";
import { allcategory, updateproduct } from "./apiIndex";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  const params = useParams();
  const productId = params.productId;
  const [values, setValues] = useState({
    product_name: "",
    product_price: "",
    countInStock: "",
    product_description: "",
    categories: [],
    category: "",
    product_image: "",
    error: "",
    success: false,
    formData: "",
  });
  const {
    product_name,
    product_price,
    countInStock,
    product_description,
    categories,
    category,
    error,
    success,
    formData,
  } = values;

  //load categories and set form data
  const init = () => {
    allcategory().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value =
      name === "product_image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "" });
    //add product function

    updateproduct(productId, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          product_name: "",
          product_price: "",
          countInStock: "",
          product_description: "",
          product_image: "",
          success: true,
          error: "",
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
      Product updated!!!
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
            <div class="container">
              <form id="contact" action="" method="post">
                {showError()}
                {showSuccess()}
                <h3>Add Product</h3>

                <fieldset>
                  <input
                    type="text"
                    id="productName"
                    className="form-control"
                    onChange={handleChange("product_name")}
                    value={product_name}
                    placeholder="Product Name"
                    tabindex="1"
                    required
                    autofocus
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="number"
                    id="productPrice"
                    className="form-control"
                    onChange={handleChange("product_price")}
                    value={product_price}
                    placeholder="Price"
                    tabindex="2"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="number"
                    id="productQty"
                    className="form-control"
                    onChange={handleChange("countInStock")}
                    value={countInStock}
                    placeholder="Stock Quantity"
                    tabindex="3"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="file"
                    id="productImg"
                    className="form-control"
                    accept="image/*"
                    onChange={handleChange("product_image")}
                    tabindex="4"
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    id="productDesc"
                    className="form-control"
                    onChange={handleChange("product_description")}
                    value={product_description}
                    placeholder="Product Description"
                    tabindex="5"
                    required
                  ></textarea>
                </fieldset>
                <fieldset>
                  <label htmlFor="category">Category</label>
                  <select
                    placeholder="category"
                    className="form-control"
                    onChange={handleChange("category")}
                  >
                    <option></option>
                    {categories.map((c, i) => (
                      <option key={i} value={c._id}>
                        {c.category_name}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                    onClick={handleSubmit}
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

export default UpdateProduct;
