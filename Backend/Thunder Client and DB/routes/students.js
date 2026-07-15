const express = require ("express");
const router = express.Router();

router.post("/", (req, res)=>{
    console.log(req.body);
    res.json({
        message: "Student added successfully!",
        student1: req.body
    })
})
module.exports = router;