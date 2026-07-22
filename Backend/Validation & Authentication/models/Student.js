const mongoose=require("mongoose");

//Schema with validation
const StudentSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Student must have email address:"],
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Student must have password:"],
        minlength:[8,"Password must be at least 8 character"]
    },
    name:{
        type:String,
        required:[true,"Student must have name:"],
        minlength:[3,"Name must be atleast 3 character:"],
        maxlength:[30,"Name must not be excced 30 character:"]
    },
    age:{
        type: Number,
        min: [18,"Age must be 18 years"],
        max:[60, "Age not exceed 60 Years"]
    },
    dept:{
        type:String,
        enum:{
            values:["CSE","EEE","BBA"],
            message:"Dept must be CSE,EEE or BBA"
        }
    },
    status:{
        type:String,
        default:"Active"
    }
});

//model
const StudentModel=mongoose.model("Student", StudentSchema);

//Export
module.exports=StudentModel;