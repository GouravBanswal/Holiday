const { adminGetAllHolidays, adminAddAllHolidays, adminUpdateAllHolidays, adminDeleteAllHolidays } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/holidays",adminGetAllHolidays)
    .post("/add-holidays",adminAddAllHolidays)
    .put("/update-holidays/:id",adminUpdateAllHolidays)
    .delete("/delete-holidays/:id",adminDeleteAllHolidays)

    module.exports = router