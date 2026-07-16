
const express = require("express");
const router = express.Router();

const Student = require ("../models/Student");         //import "/models/Student"

//CREATE Docs
router.post("/", async (req, res)=>{              //for "http://localhost:3000/students"
    try{
    const student = await Student.create(req.body);   //By using "Student model" "create a doc" in MDB using "req.body" that contains Json data send by thunder client and "Await means pause this until the task is finished" 
    console.log(req.body);                            // for console output
    res.status(201).json({                            // for thunder client output
        message: "Student Added Successfully.!",
        student: student
    });
    }catch(err){
        res.status(500).json({
            message: "Failed to add student",
            student: err.message
        });
    }
});

//READ (All) Docs
router.get("/", async(req, res)=>{
    try{
        const students = await Student.find();
        console.log("Read All");

        res.status(200).json({
            message: "All Students",
            total: students.total,
            students: students
        });
    }catch(err){
        res.status(500).json({
            message: "Failed to fetch students",
            students: err.message
        });
    }
});

//READ (One)
router.get("/:id", async(req, res)=>{
    try{
        const student = await Student.findById(req.params.id);
        console.log("Read one");

        if (!student) {
            return res.status(404).json({
                message: "Student not found xoxo"
            });
        }
        res.status(200).json({
            message: "Found It..!",
            student: student
        });
    }catch(err){
        res.status(500).json({
            message: "Student Not Found..>!",
            student: err.message
        });
    }
});

//UPDATE
router.put("/:id",async(req, res)=>{
    try{
        const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    console.log("UPDATE");

    if (!student){
        return res.status(404).json({
            message:"Student not found xoxo"
        });
    }
    res.status(200).json({
        message: "Updated..!",
        student: student
    });
    }catch(err){
        res.status(500).json({
         message: "Error..>!",
            student: err.message
        });
    }
});

//DELETE
router.delete("/:id", async (req, res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        console.log("DELETE");

        if (!student){
            return res.status(400).json({
                message: "Not Found"
            });
        }

        res.status(200).json({
            message:"Student DELETE Successfully..!",
            student: student
        });
    }catch(err){
        res.status(500).json({
            message:"There is an Error",
            student: err.message
        });
    }
});

module.exports = router;        //export router


