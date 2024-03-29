const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const orderSchema = new mongoose.Schema({
 orderItems:[
  {
   type:ObjectId,
   ref:'OrderItem',
   required:true
  }
 ],
 shippingAddress1:{
  type:String,
  required:true
 },
 shippingAddress2:{
  type:String,
 },
 city:{
  type:String,
  required:true
 },
 postalCode:{
  type:Number,
  required: true
 },
 country:{
  type:String,
  required:true
 },
 phone:{
  type:Number,
  required:true
 },
 status:{
  type:String,
  default: 'pending',
  required:true
 },
 totalPrice:{
  type:Number,
  required:true
 },
 user:{
  type:ObjectId,
  ref:'User',
  required:true
 },
 dateOrdered:{
  type:Date,
  default: Date.now()
 }
},{timestamps:true})


module.exports = mongoose.model('Order', orderSchema)