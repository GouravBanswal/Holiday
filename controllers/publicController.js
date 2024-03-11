const asyncHandler = require("express-async-handler")
const Holiday = require("../models/Holiday")
exports.getTours = asyncHandler(async (req,res) => {
    const result = await Holiday.find()
    res.json({message: "Tour Fetch Success", result})
})
exports.getTourDetails = asyncHandler(async (req,res) => {
    const {id} = req.params 
    const result = await Holiday.findById(id)
    res.json({message: "Tour Fetch Details Success", result})
})
// exports.addTours = asyncHandler(async (req,res) => {
//     const result = await Holiday.findById()
//     res.json({message: "Tour add Success", result})
// })
// exports.updateTours = asyncHandler(async (req,res) => {
//     const result = await Holiday.findByIdAndUpdate()
//     res.json({message: "Tour Update Success", result})
// })
// exports.deleteTours = asyncHandler(async (req,res) => {
//     const result = await Holiday.findByIdAndDelete()
//     res.json({message: "Tour Delete Success", result})
// })