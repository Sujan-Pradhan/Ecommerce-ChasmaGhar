import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import AdminSideBar from "./AdminSideBar";
import { allorder } from "./apiIndex";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    allorder().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  useEffect(() => {
    loadOrders();
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
            <h2 className="text-muted text-center">
              Total Orders : {orders.length}
            </h2>
            <table className="table table-bordered table-primary">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Country</th>

                  <th>Shipping</th>
                  <th>City</th>
                  <th>phone</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((c, i) => (
                  <tr key={i}>
                    <td>{c._id}</td>
                    <td>{c.country}</td>
                    <td>{c.shippingAddress1}</td>
                    <td>{c.city}</td>
                    <td>{c.phone}</td>
                    <td>{c.totalPrice}</td>
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

export default AllOrder;