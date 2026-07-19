const stdModel = require("../models/Student");

//POST
const postStudent = (async (req, res)=>{
    try{
        const student = await stdModel.create(req.body);
        console.log(req.body);

        res.status(201).json({
            message: "Student created Successfully",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        });
    }
});

//GET All
const getStudents = (async (req,res)=>{
    try{
        const students = await stdModel.find();

        //if no students found
        if(!students){
            return res.status(404).json({
                message:"Students not Found..!"
            });
        }

        res.status(200).json({
            message: "All Students List...",
            total: students.length,
            students
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error: err.message
        });
    }
})

//GET by ID
const getStudent = (async (req, res)=>{
    try{
        const student = await stdModel.findById(req.params.id);

        //if ID student found
        if(!student){
            return res.status(404).json({
                message: "Your searching student is not found"
            });
        }
        
        res.status(200).json({
            message: "Student Found in the DataBase",
            student
        });
    }catch(err){
        res.status(500).json({
            message: "Something Went Wrong",
            error: err.message
        });
    }
});


//PUT:UPDATE
const putStudent = (async (req,res)=>{
    try{
        const student = await stdModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        
        //if ID student found
        if(!student){
            return res.status(404).json({
                message: "Your searching student is not found"
            });
        }

        res.status(200).json({
            message:"Student Updated",
            student
        });
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});

//DELETE
const deleteStudent = (async (req, res)=>{
    try{
        const student = await stdModel.findByIdAndDelete(req.params.id);

        //if ID student found
        if(!student){
            return res.status(404).json({
                message: "Your searching student is not found"
            });
        }

        res.status(200).json({
            message: "Student data wiped/Deleted successfully..!",
            student
        });
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error: err.message
        });
    }
});


//Export studentController all controllers
module.exports={
    postStudent,
    getStudents,
    getStudent,
    putStudent,
    deleteStudent
};