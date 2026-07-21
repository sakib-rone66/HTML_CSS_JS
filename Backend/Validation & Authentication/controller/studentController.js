//Import ./models/Student.js
const StudentModel = require("../models/Student");
//load authentication: bcrypt
const bcrypt = require("bcrypt");      
//load JWT
const jwt = require("jsonwebtoken");

//CRUD operation
//CREATE or POST:
const postStudent = (async (req, res)=>{
    try{

        //from req.body.password take user input and hashed it in 10 saltround and save it to hashedPassword
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        //same but instead of req.body use hashedPassword
        const student = await StudentModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,    //save hashed pass into db
            age: req.body.age,
            dept: req.body.dept
        });
        console.log(req.body);

        res.status(201).json({
            message:"Student created successfully..!",
            student
        });
    }catch(err){
        res.status(505).json({
            message: "Internal Server error..!",
            error: err.message
        });
    }
});

//GET or READ All:
const getStudents= (async (req, res)=>{
    try{
        const students = await StudentModel.find();

        //If no students found
        if(!students){
            return res.status(404).json({
                message: " No Students Found..!"
            });
        }

        res.status(200).json({
            message:"All student list...",
            total: students.length,
            students
        });
    }catch(err){
        res.status(505).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});

//GET by ID
const getStudent = (async (req, res)=>{
    try{
        const student = await StudentModel.findById(req.params.id);
        
        if(!student){
            return res.status(404).json({
                message: "Student not Found..!"
            });
        }

        res.status(200).json({
            message: "Student Found...!",
            student
        });
    }catch(err){
        res.status(505).json({
            message: "Something went wrong",
            error: err.message
        });
    }
})

//UPDATE or PUT:
const putStudent = (async (req, res)=>{
    try{
        // If password is being updated
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password,10);
        }
        //then normal PUT operation
        const student = await StudentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!student){
            return res.status(404).json({
                message: "Student not found..!"
            });
        }

        res.status(200).json({
            message: "Student updated successfully..!",
            student
        });
    }catch(err){
        res.status(505).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});

//DELETE:
const deleteStudent = (async (req, res)=>{
    try{
        const student = await StudentModel.findByIdAndDelete(req.params.id);

        if(!student){
            return res.status(404).json({
                message:"Student not Found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully..!",
            student
        });
    }catch(err){
        res.status(505).json({
            message:"Something went wrong",
            error: err.message
        });
    }
});


//Login Authentication:
const loginStudent = async (req, res) => {
    try {

        // Find student by email
        const student = await StudentModel.findOne({
            email: req.body.email
        });

        // Student not found
        if (!student) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            req.body.password,
            student.password
        );

        // Password doesn't match
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Create JWT
        const token = jwt.sign(
            {
                id: student._id,
                email: student.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        // Login successful
        res.status(200).json({
            message: "Login successful!",
            token
        });

    } catch (err) {
        res.status(500).json({
            message: "Something went wrong!",
            error: err.message
        });
    }
};


// GET PROFILE
const getProfile = async (req, res) => {
    try {

        // req.user came from authMiddleware
        const student = await StudentModel.findById(req.user.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Profile found",
            student
        });

    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
};

module.exports={
    postStudent,
    getStudents,
    getStudent,
    putStudent,
    deleteStudent,
    loginStudent,
    getProfile
};