const OrderItem = require('../models/order-item')
const Order = require('../models/orderModel')

exports.postOrder = async(req, res) =>{
 const orderItemIds = Promise.all(req.body.orderItems.map(async(orderItem)=>{
  let newOrderItem = new OrderItem({
   quantity:orderItem.quantity,
   product:orderItem.product
  })
  newOrderItem = await newOrderItem.save()
  return newOrderItem._id
 }))
 const orderItemsIdsResolved = await orderItemIds

 const totalPrices = await Promise.all(orderItemsIdsResolved.map(async(orderItemId)=>{
  const orderItem = await OrderItem.findById(orderItemId).populate('product','product_price')
  const total = orderItem.quantity * orderItem.product.product_price
  return total
 }))
 
 const finalPrice = totalPrices.reduce((prev, cur) => prev + cur, 0)
 
 let order = new Order({
  orderItems:orderItemsIdsResolved,
  shippingAddress1:req.body.shippingAddress1,
  shippingAddress2:req.body.shippingAddress2,
  city:req.body.city,
  postalCode:req.body.postalCode,
  country:req.body.country,
  phone:req.body.phone,
  status:req.body.status,
  totalPrice: finalPrice,
  user:req.body.user
 })
 order = await order.save()
 if(!order){
  return res.status(400).json({error:'Something Went Wrong'})
 }
 res.send(order)
}

exports.orderList = async(req, res)=> {
 const order = await Order.find().populate('user','name').sort({dateOrdered:-1})
 if(!order){
  return res.status(400).json({error:'Something Went Wrong'})
 }
 res.send(order)

}

exports.orderDetails = async(req, res)=>{
 const order = await Order.findById(req.params.id).populate('user', 'name').populate({
  path:'orderItems', populate:'product'
 })
 if(!order){
  return res.status(400).json({error:'Something Went Wrong'})
 }
 res.send(order)
}
//update status
exports.updateStatus = async(req, res)=>{
 const order = await Order.findByIdAndUpdate(
  req.params.id,
  {
   status:req.body.status
  },
  {new:true}
 )
 if(!order){
  return res.status(400).json({error:'Something Went Wrong'})
 }
 res.send(order)
}

//delete order
exports.deleteOrder = (req, res)=>{
 Order.findByIdAndRemove(req.params.id).then(async(order)=>{
  if(order){
   await order.orderItems.map(async orderItem =>{
    await OrderItem.findByIdAndRemove(orderItem)
   })
   return res.json({message:'The order has been deleted'})
  }
  else{
   return res.status(400).json({error:'Order not found'})
  }
 }).catch(err =>{
  return res.status(400).json({error:err})
 })
}
//user Order
exports.userOrders = async(req,res)=>{
 const userOrderList = await Order.find({user:req.params.userid}).populate({
  path:'orderItems', populate:{
   path:'product', populate:'category'
  }
 }).sort({dateOrdered:-1})
 if(!userOrderList){
  res.status(500).join({error:'Something went wrong'})
 }
 res.send(userOrderList)
}