const express=require("express");
const router=express.Router();

//Import ./models/Student.js
const stdmodel = require("../models/Student");

//Import ./controllers/studentcontroller
const{
    postStudent,
    getStudents,
    getStudent,
    putStudent,
    deleteStudent,
    loginStudent,
    getProfile
}=require("../controllers/studentcontroller");

//Import authMiddleware
const authMiddleware=require("../middleware/authMiddleware");

//protect endpoint
router.post("/",postStudent);
router.post("/login",loginStudent);
router.get("/",getStudents);
router.get("/profile",authMiddleware,getProfile);
router.get("/:id",getStudent);
router.put("/:id",putStudent);
router.delete("/:id",deleteStudent);

//Export
module.exports=router;