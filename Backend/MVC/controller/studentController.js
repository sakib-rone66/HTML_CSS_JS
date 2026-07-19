const Student = require("../models/Student")

//POST
const postStudent = (async (req, res)=>{
    try{
        const student = await Student.create(req.body);
        console.log(req.body);

        res.status(201).json({
            message:" Student added Successfully..!",
            student: student
        });
    }catch(err){
        res.status(500).json({
            message: "Something Wrong..!",
            error: err.message
        });
    }
});

//GET ALL
const getStudents = (async (req, res)=>{
    try{
        const students = await Student.find();
        res.status(200).json({
            message: "All Students List",
            total: students.length,
            students
        });
    }catch(err){
        res.status(500).json({
            message: "Something went wrong..!",
            error: err.message
        });
    }
});


//GET by ID:
const getStudent = (async (req, res)=>{
    try{
        const student = await Student.findById(req.params.id)
        if (!student){
            return res.status(404).json({
                message:"Student not Found..!"
            });
        }

        res.status(200).json({
            message: "Student Found..!",
            student
        });
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error:err.message
        })
    }
})

//Update
const updateStudent = ( async (req, res)=>{
    try{
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if(!student){
            return res.status(404).json({
                message: "Student not Found.!"
            });
        }

        console.log("Update Operation");
        res.status(200).json({
            message: "Student Updated Successfully",
            student: student
        });
    } catch(err){
        res.status(500).json({
            message: " Something went wrong..!",
            error: err.message
        });
    }
});

//DELETE
const deleteStudent = (async(req, res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).json({
                message: "Student not Found"
            });
        }
        
        console.log("Delete Operation");
            res.status(200).json({
                message: "Student deleted Successfully..!",
                student: student
            });
        } catch(err){
            res.status(500).json({
                message: "Something went wrong",
                error: err.message
            });
        }
});

//step1: exports 
module.exports = {
    postStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
};