import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { isAuthenticated } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { myOrders, clearErrors } from "../actions/orderAction";
import "./user.css";
const UserDashboard = () => {
  const { user } = isAuthenticated();
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch, error]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-5">
          {/* <div className='col-md-4 shadow-lg'>
      <h2>Basic Info</h2>
      <hr/>
      <h5>Name:{user.name}</h5>
      <hr/>
      <p>Email: {user.email}</p>

     </div> */}
          <div className="large-2 large-centered small-4 columns small-centered dashboard-main-content__stat-wrapper dashboard-main-content__stat-wrapper-admin-part">
            <div className="dashboard-main-content__stat-content">
              <div className="dashboard-main-content__stat-headband">
                <i className="icon-user"></i>
                <p className="dashboard-main-content__stat-headband__title">
                  <h5>Name:{user.name}</h5>
                </p>
              </div>
              <div className="dashboard-main-content__stat-description ">
                <p>Email: {user.email}</p>
              </div>
              <div className="dashboard-main-content__stat-underline"></div>
            </div>
          </div>
          <br />
          <br />
          <div className="col-md-12">
            <h2 className="text-center text-muted">My Orders History</h2>

            <div className="d-flex justify-content-center">
              <table className="table table-success table-striped text-center table-bordered">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Number of Items</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order, i) => (
                      <tr key={i}>
                        <td>{order._id}</td>
                        <td>{order.orderItems.length}</td>
                        <td>{`Rs.${order.totalPrice}`}</td>
                        <td>
                          {order.status &&
                          String(order.status).includes("delivered") ? (
                            <p style={{ color: "green" }}>{order.status}</p>
                          ) : (
                            <p style={{ color: "red" }}>{order.status}</p>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
