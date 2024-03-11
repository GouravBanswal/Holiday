const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")

exports.placeOrder = asyncHandler(async (req, res)=> {
//    const {userId, holidayId} = req.body
   await Order.create(req.body)
    res.json({message:" Order Place Success"})
})
exports.userOrderHistory = asyncHandler(async (req, res)=> {
//    const {userId, holidayId} = req.body
  const result = await Order.find({userId: req.body.userId }).populate("holidayId")
  console.log(result)
    res.json({message:" History Place Success",result})
})