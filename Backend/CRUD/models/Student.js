const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({    //Schema: Structure
    name: String,
    age: Number,
    dept: String,
    dob: String
});

const Student = mongoose.model("Student", studentSchema);  //create model for CRUD

module.exports = Student;          //export the model