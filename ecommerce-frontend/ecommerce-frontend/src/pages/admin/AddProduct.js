import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../index";
import AdminSideBar from "./AdminSideBar";
import { allcategory, addproduct } from "./apiIndex";
import Navbar from "../../components/Navbar";
const AddProduct = () => {
  const { token } = isAuthenticated();
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

    addproduct(token, formData).then((data) => {
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
      New product added
    </div>
  );
  // categories.map((c,i)=>{
  //  console.log(c._id)
  //  console.log(`${i}:${c.category_name}`)
  // })
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-6 mt-4">
            {/* <form className='shadow-lg p-3'>
       <h2 className='text-muted'>Add Products</h2>
       {showError()}
       {showSuccess()}
       <div className='mb-3'>
        <label htmlFor='productName'>Product Name</label>
        <input type='text' id='productName' className='form-control'
         onChange={handleChange('product_name')} value={product_name} />
       </div>
       <div className='mb-3'>
        <label htmlFor='productPrice'>Product Price</label>
        <input type='number' id='productPrice' className='form-control'
         onChange={handleChange('product_price')} value={product_price} />
       </div>
       <div className='mb-3'>
        <label htmlFor='productQty'>Stock Quantity</label>
        <input type='number' id='productQty' className='form-control'
         onChange={handleChange('countInStock')} value={countInStock} />
       </div>
       <div className='mb-3'>
        <label htmlFor='productDesc'>Product Description</label>
        <textarea id='productDesc' className='form-control'
         onChange={handleChange('product_description')} value={product_description}></textarea>
       </div>
       <div className='mb-3'>
        <label htmlFor='productImg'>Product Image</label>
        <input type='file' id='productImg' className='form-control' accept='image/*'
         onChange={handleChange('product_image')} />
       </div>
       <div className='mb-3'>
        <label htmlFor='category'>Category</label>
        <select className='form-control' onChange={handleChange('category')}>
         <option></option>
         {
          categories.map((c,i)=>(
           <option key={i} value={c._id}>{c.category_name}</option>
          ))
         }
        </select>
       </div>
       <div className='mb-3'>
        <button className='btn btn-primary' onClick={handleSubmit}>
         Add New Product
        </button>
       </div>
      </form> */}

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

export default AddProduct;
