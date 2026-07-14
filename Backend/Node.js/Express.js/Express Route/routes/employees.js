const express = require("express");
const router = express.Router();

router.get("/profile", (req, res)=>{
    res.send("Employees profiles are Here...!");
});
module.exports= router;
