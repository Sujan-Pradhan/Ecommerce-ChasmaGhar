import React from "react";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Deals from "./pages/Deals";
import RegisterLanding from "./pages/RegisterLanding";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./pages/PrivateRoute";
import AdminRoute from "./pages/AdminRoute";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddCategory from "./pages/admin/AddCategory";
import AddProduct from "./pages/admin/AddProduct";
import AllProduct from "./pages/admin/AllProduct";
import ProductDetail from "./pages/ProductDetail";
import Shipping from "./pages/Shipping";
import ConfirmOrder from "./pages/ConfirmOrder";
import PaymentElement from "./pages/PaymentElement";
import OrderSuccess from "./pages/OrderSuccess";
import AllCustomer from "./pages/admin/AllCustomer";
import AllOrder from "./pages/admin/AllOrder";
import AboutUs from "./pages/AboutUs";
import OrderDetails from "./pages/admin/OrderDetails";
import UpdateProduct from "./pages/admin/UpdateProduct";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/productdetails/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deals" element={<Deals />} />
        <Route
          path="/email/confirmation/:token"
          element={<RegisterLanding />}
        />
        <Route path="/forget/password" element={<ForgetPassword />} />
        <Route path="/reset/password/:token" element={<ResetPassword />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/user/profile" element={<UserDashboard />} />
          <Route path="/signin/shipping" element={<Shipping />} />
          <Route path="/confirm" element={<ConfirmOrder />} />
          <Route path="/payment" element={<PaymentElement />} />
          <Route path="/success" element={<OrderSuccess />} />
        </Route>
        {/* admin */}
        <Route path="/" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/addcategory" element={<AddCategory />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/admin/allproduct" element={<AllProduct />} />
          <Route path="/admin/allcustomer" element={<AllCustomer />} />
          <Route path="/admin/allorder" element={<AllOrder />} />
          <Route path="/orderdetails/:orderId" element={<OrderDetails />} />
          <Route path="/updateproduct/:productId" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
