const asyncHandler = require("express-async-handler")
const Holiday = require("../models/Holiday")
const upload = require("../utils/upload")

exports.adminGetAllHolidays = asyncHandler(async(req,res) => {
    const result = await Holiday.find()
    res.json({message: "Admin holiday Fetch success", result})
})
exports.adminAddAllHolidays = asyncHandler(async(req,res) => {
    upload(req,res, async err => {
        if(err){
            return res.status(400).json({message: err.message || "Upload Error"})
        }
        const hero = []
        if(req.files){
            for(const item of req.files){
                hero.push(item.filename)
            }
        }
        await Holiday.create({...req.body, hero})
        res.json({message: "Admin holiday Add success"})
    })
})
exports.adminUpdateAllHolidays = asyncHandler(async(req,res) => {
    res.json({message: "Admin holiday Update success"})
})
exports.adminDeleteAllHolidays = asyncHandler(async(req,res) => {
    res.json({message: "Admin holiday Delete success"})
})