import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AdminSideBar from "./AdminSideBar";
import { allproduct } from "./apiIndex";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const loadProducts = () => {
    allproduct().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  function deleteProduct(id) {
    fetch(`${url}/deleteproduct/${id}`, {
      method: "DELETE",
    }).then(window.location.reload(false));
  }
  function updateProduct(id) {
    fetch(`${url}/updateproduct/${[id]}`, {
      method: "PUT",
    }).then(window.location.reload(false));
  }

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center text-muted">
              Here are total {products.length} products
            </h2>
            <table className="table table-bordered table-primary">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Stock Avaible</th>
                  <th>Description</th>
                  <th>Product image</th>
                  <th colSpan={2} style={{ textAlign: "center" }}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody style={{ background: "black" }}>
                {products.map((p, i) => (
                  <tr key={i}>
                    <td>{p.product_name}</td>
                    <td>{p.product_price}</td>
                    <td>{p.countInStock}</td>
                    <td>{p.product_description}</td>
                    <td>
                      <img
                        src={`http://localhost:5000/${p.product_image}`}
                        alt={p.product_name}
                        className="img-fluid"
                        width="150"
                      />
                    </td>
                    <td>
                      <Link
                        to="#"
                        className="btn btn-danger"
                        onClick={() => deleteProduct(p._id)}
                      >
                        Delete
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        onClick={() => updateProduct(p._id)}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
