//load bcrypt
const bcrypt=require("bcrypt");
//load jsonwebtoken
const jwt=require("jsonwebtoken");

const StudentModel = require("../models/Student");

//CRUD operation
//POST or Create
const postStudent=(async(req, res)=>{
    try{
        //from req.body.password take user input and hashed it in 10 saltround and save it to hashedPassword
        const hashedPassword=await bcrypt.hash(req.body.password, 10)
        const student=await StudentModel.create({
            email:req.body.email,
            password:hashedPassword,          //apply hashedPassword
            name:req.body.name,
            age:req.body.age,
            dept:req.body.dept
        });
        console.log(req.body);
        res.status(201).json({
            message:"Student is created...",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong..",
            error:err.message
        });
    }
});

//READ or GET ALL
const getStudents=(async(req, res)=>{
    try{
        const students=await StudentModel.find();
        console.log("Read All");
        if(!students){
            return res.status(404).json({
                message:"Students not found...",
            });
        }
        res.status(200).json({
            message: "FOUND..! All Students are...",
            total:students.length,
            students
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        });
    }
});

//READ or GET by ID
const getStudent=(async(req,res)=>{
    try{
        const student=await StudentModel.findById(req.params.id);
        console.log("READ by ID");

        if(!student){
            return res.status(404).json({
                message:"Student not Found"
            });
        }
        res.status(200).json({
            message:"Student FOUND..",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong..!",
            error:err.message
        });
    }
});

//UPDATE or PUT
const putStudent=(async(req,res)=>{
    try{
        //hashed pass if update
        if(req.body.password){
            req.body.password=await bcrypt.hash(req.body.password,10);
        }
        const student=await StudentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!student){
            return res.status(404).json({
                message:"Student not Found"
            });
        }
        res.status(200).json({
            message:"Student Updated..",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        });
    }
});

//DELETE
const deleteStudent=(async(req,res)=>{
    try{
        const student=await StudentModel.findByIdAndDelete(req.params.id);
        console.log("DELETE operation.");

        if(!student){
            return res.status(404).json({
                message:"Student not Found"
            });
        }
        res.status(200).json({
            message:"Student DELETED..!",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        });
    }
});

//Login Authentication
const loginStudent=(async(req,res)=>{
    try{
        //find student
        const student=await StudentModel.findOne({
            email:req.body.email
        });
        if(!student){
            return res.status(404).json({
                message:"Student not Found"
            });
        }

        // Compare password
        const isMatch=await bcrypt.compare(
            req.body.password,
            student.password
        );

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Password"
            });
        }

        //create token
        const token=jwt.sign(
            {
                id:student._id,
                email:student.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        );
        res.status(200).json({
            message:"Login Successfull..!",
            token
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong..!",
            error:err.message
        });
    }
});

//GET profile
const getProfile=(async(req,res)=>{
    try{
        const student=await StudentModel.findById(req.user.id);
        console.log("Profile request operation with token");
        if(!student){
            return res.status(404).json({
                message:"Student not found"
            });
        }
        res.status(200).json({
            message:"Profile FOUND",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        });
    }
});

//Export 
module.exports={
    postStudent,
    getStudents,
    getStudent,
    putStudent,
    deleteStudent,
    loginStudent,
    getProfile
};