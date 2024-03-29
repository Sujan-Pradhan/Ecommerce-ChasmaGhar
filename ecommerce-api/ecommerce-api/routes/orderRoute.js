const express = require('express')
const { postOrder, orderList, orderDetails, deleteOrder, userOrders, updateStatus } = require('../controllers/orderController')
const router = express.Router()

router.post('/postorder', postOrder)
router.get('/orderlist', orderList)
router.get('/orderdetails/:id', orderDetails)
router.put('/updatestatus/:id', updateStatus)
router.delete('/deleteorder/:id', deleteOrder)
router.get('/userorders/:userid', userOrders)

module.exports = router