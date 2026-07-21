const express = require("express");
const router = express.Router();

//Import ./models/Student.js
const stdmodel = require("../models/Student");

//Import authMiddleware
const authMiddleware=require("../middleware/authMiddleware");

//Import ./controller/studentController.js and data distruction as well as authMiddleware getProfile
const{
    postStudent,
    getStudents,
    getStudent,
    putStudent,
    deleteStudent,
    loginStudent,
    getProfile

} = require("../controller/studentController");

//Initialize nodes/ protect routes
router.post("/", postStudent);
router.post("/login", loginStudent)
router.get("/", getStudents);
//protect the route -> must place before "/:id,getStudent"
router.get("/profile", authMiddleware, getProfile);
router.get("/:id", getStudent);
router.put("/:id", putStudent);
router.delete("/:id", deleteStudent);

//Export ./routes/students.js
module.exports = router;