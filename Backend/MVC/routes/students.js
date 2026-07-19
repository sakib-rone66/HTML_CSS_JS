const express = require ("express");
const router = express.Router();

//step2: Object destructuring
const Student = require("../models/Student");    //import model
const {
    postStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../controller/studentController");


//step3: Define Routes
router.post("/", postStudent);
router.get("/", getStudents);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;   //export