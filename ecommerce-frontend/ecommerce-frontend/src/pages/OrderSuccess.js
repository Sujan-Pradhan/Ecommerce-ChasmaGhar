import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const OrderSuccess = () => {
  return (
   <>
   <Navbar/>
   <div className='container mb-5'>
    <div className='row justify-content-center'>
     <div className='col-6 mt-5 text-center'>
      <img src='https://freerangestock.com/sample/50976/tick-success-shows-progress-checkmark-and-correct.jpg' className='img-fluid my-5 d-block mx-auto' alt='Order Success' height="200" width="200"/>
      <h2>Your Order has been placed successfully</h2>
      <Link className='btn btn-warning' to="/user/profile">Go to Orders</Link>
     </div>
    </div>
   </div>
   <Footer/>
   
   </>
  );
};

export default OrderSuccess;
