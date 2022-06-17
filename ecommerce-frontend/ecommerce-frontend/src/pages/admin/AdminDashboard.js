import React from "react";
import Navbar from "../../components/Navbar";
import AdminSideBar from "./AdminSideBar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-6 mt-5">
            <h1>Hello, your in admin dashboard</h1>
            <h6 className="text-dark">
              Here you can add category, add product, manage orders, prodcuts as
              well customer
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
