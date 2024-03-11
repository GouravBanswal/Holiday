const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config({path: "./.env"})
const app = express()


// middlewares
app.use(express.json())
app.use(express.static("uploads"))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
//route
app.use("/api/admin", require("./router/adminRoute"))
app.use("/api/public", require("./router/publicRoute"))
app.use("/api/auth", require("./router/authRoute"))
app.use("/api/order", require("./router/orderRoute"))
//404
app.use("*", (req,res)=> {
    res.status(404).json({message: "Resource Not Found"})
})
// error handler
app.use((err, req,res,next) => {
    console.log(err)
res.status(500).json({message: err.message || "Somthing Went Wrong"})
})  

// db
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})