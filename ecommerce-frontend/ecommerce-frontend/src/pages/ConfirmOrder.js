import React, {Fragment} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { isAuthenticated } from './index';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
 const navigate = useNavigate()
 const {cartItems, shippingInfo} = useSelector(state=>state.cart)
 const {user} = isAuthenticated()
 const totalPrice = cartItems.reduce((acc, item)=>(acc+item.quantity*item.price),0)

 const processToPayment =()=>{
   const data = {
     totalPrice
   }
   sessionStorage.setItem('orderInfo',JSON.stringify(data))
   navigate('/payment')
 }
   
  return (
   <>
   <Navbar/>
   <div className='container'>
    <div className='row d-flex justify-content-evenly mb-3'>
     <div className='col-md-8 shadow'>
      <h2 className='text-center'>Shipping Info</h2>
      <div className='col-md-6 offset-md-3'>
       <div><b>Name</b>: <span className='text-muted'>
        {user.name}
        </span>
        </div>
        <div><b>Email</b>: <span className='text-muted'>
        {user.email}
        </span>
        </div>
        <div><b>City</b>: <span className='text-muted'>
        {shippingInfo.city}
        </span>
        </div>
        <div><b>Phone Number</b>: <span className='text-muted'>
        {shippingInfo.phone}
        </span>
        </div>
        <div><b>Country</b>: <span className='text-muted'>
        {shippingInfo.country}
        </span>
        </div>
        <div><b>Shipping Address</b>: <span className='text-muted'>
        {shippingInfo.shippingAddress1}, 
        {shippingInfo.shippingAddress2}
        </span>
        </div>
      </div>
      <hr/>
      <h2 className='text-center'>Your Cart Items</h2>
      {cartItems.map((item,i)=>(
       <Fragment key={i}>
        <hr/>
        <div className='row align-items-center'>
         <div className='col-md-3'>
          <img src = {`http://localhost:5000/${item.image}`} alt={item.name} width="100"/>
         </div>
         <div className='col-md-3'>
         <p className='text-muted'>{item.name}</p>
         </div>
         <div className='col-md-2'>
          <p className='text-warning'>Rs.{item.price}x{item.quantity}=<b>Rs.{item.price*item.quantity}</b></p>
         </div>
        </div>
        <hr/>

       </Fragment>
      ))}
     </div>
     <div className='col-md-3'>
      <div className='shadow p-3'>
       <h4> Order Summary</h4>
       <hr/>
       <p>SubTotal: <span>{cartItems.reduce((acc, items)=>(acc+Number(items.quantity)),0)} (Units)</span></p>
       <p>Total Price: Rs.<span>{totalPrice}</span></p>
       <hr/>
       <button className='btn btn-warning'
       onClick={processToPayment}
       >
        Proceed To Payment
       </button>
      </div>
     </div>
    </div>
   </div>

   <Footer/>
   
   </>


  );
};

export default ConfirmOrder;
