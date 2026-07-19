const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({    //schema
    "name":String,
    "age":Number,
    "dept": String,
    "dob": String
});
const Student = mongoose.model("Student", studentSchema);  //model

module.exports = Student;           //export
