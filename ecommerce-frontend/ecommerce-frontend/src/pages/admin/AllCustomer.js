import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import AdminSideBar from "./AdminSideBar";
import { allcustomer } from "./apiIndex";

const AllCustomer = () => {
  const [customers, setCustomers] = useState([]);

  const loadCustomers = () => {
    allcustomer().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCustomers(data);
      }
    });
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-8 mt-4" style={{ background: "#f1f3f5" }}>
            <h2 className="text-dark text-center">
              Total Customers : {customers.length}
            </h2>
            <table className="table table-striped table-primary">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c, i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.role === 1 ? "Admin" : "Customer"}</td>
                    <td>
                      {c.isVerified === true ? `Verified` : "Not Verified"}
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

export default AllCustomer;
