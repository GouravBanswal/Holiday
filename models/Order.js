const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: {
        type: {type: mongoose.Types.ObjectId, ref: "user", require: true}
    },
    holidayId: {
        type: {type: mongoose.Types.ObjectId, ref: "holiday", require: true}
    }

}, {timestamps: true})


module.exports = mongoose.model("order", orderSchema)