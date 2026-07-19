const mongoose = require ("mongoose");

//Schema
const studentSchema = new mongoose.Schema({
    "name": String,
    "age": Number,
    "dept": String
});

//model
const stdModel = mongoose.model("Student", studentSchema);

//export
module.exports= stdModel;