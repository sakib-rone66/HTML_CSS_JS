const mongoose = require("mongoose");
const { kMaxLength } = require("node:buffer");
const { stringify } = require("node:querystring");

//Schema with validation
const StudentSchema = new mongoose.Schema({
    name:{        
        type: String,
        required: [true, "Student name mendatory"],
        minlength:[3,"Name atleast 3 character..!"],
        maxlength:[30, "Name donot exceed 30 character..!"]
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    age:{
        type: Number,
        min: [18,"Age must be 18 years"],
        max:[60, "Age not exceed 60 Years"]
    },
    dept:{
        type: String,
        enum:{
            values: ["CSE", "EEE", "BBA", "ENGLISH"],
            message: "Dept must me CSE, EEE, BBA and ENGLISH."
        }
    },
    status:{
        type: String,
        default: "active"
    }
});

//Model
const StudentModel = mongoose.model("Student", StudentSchema);

//Export model
module.exports = StudentModel;