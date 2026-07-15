//                ***Thunder Client tools to MongoDB***

console.log("Hello! Todays Lesson is Thunder Client and MongoDB");
console.log("\n");

const express = require("express");
const mongoose = require ("mongoose");    //Mongoose enable

const studentSchema = new mongoose.Schema({      //Schema=> Structure
    Name: String,
    Age: Number,
    Dept: String,
});

const Student = mongoose.model("Student", studentSchema);   //Model

const app = express();

app.use(express.json());         //for req.body must use it before all

app.use((req, res, next)=>{
    console.log("Middlewere is Running!");      //Middleware
    next();
});

const studentRoutes = require ("./routes/students");    //Import student route
app.use("/students", studentRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/StudentManagement").then(()=>{  //DB connection
    console.log("DataBase Connected Successfully..!");
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{             //server creation
    console.log("Server is Running on (http://localhost:3000)");
})