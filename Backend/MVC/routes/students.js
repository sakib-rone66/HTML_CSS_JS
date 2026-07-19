const express = require("express");
const router = express.Router();

//Import ./model/Student.js
const stdModel = require("../models/Student");

//Import studentController + Object distruction
const {
    postStudent,
    getStudents,
    getStudent,
    putStudent,
    deleteStudent
} = require ("../controller/StudentController"); 

router.post("/", postStudent);
router.get("/", getStudents);
router.get("/:id",getStudent);
router.put("/:id", putStudent);
router.delete("/:id", deleteStudent);

//export ./routes.students.js
module.exports = router;