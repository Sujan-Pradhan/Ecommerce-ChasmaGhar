import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import AdminSideBar from "./AdminSideBar";
import { orderdetails } from "./apiIndex";

import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const [order_details, setOrderDetails] = useState({});
  const params = useParams();

  const loadOrderDetails = (orderId) => {
    orderdetails(orderId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrderDetails(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    const orderId = params.orderId;
    loadOrderDetails(orderId);
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
            <h2 className="text-dark">Order Details</h2>
            {Object.keys(order_details).length > 0 && (
              <>
                <table className="table table-bordered table-primary">
                  <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Product Image</th>
                  </tr>
                  <tr>
                    <td>{order_details?.orderItems[0].product.product_name}</td>
                    <td>
                      {order_details?.orderItems[0].product.product_description}
                    </td>
                    <td> {order_details?.orderItems[0].quantity}</td>
                    <td>
                      {" "}
                      <img
                        height={"100px"}
                        width={"100px"}
                        src={`http://localhost:5000/${order_details?.orderItems[0].product.product_image}`}
                      />
                    </td>
                  </tr>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
