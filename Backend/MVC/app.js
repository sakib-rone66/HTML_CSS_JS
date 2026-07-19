const express = require("express");
const mongoose = require ("mongoose");
const app = express();

app.use(express.json());

//Middleware
app.use((req, res, next)=>{
    console.log("Middleware is Running..!");
    next();
});
const studentRouter = require("./routes/students");
app.use("/students", studentRouter);

//MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/StudentManagement")
.then(()=>{
    console.log("MongoDb connected Successfully");
}).catch((err)=>{
    console.log("Something went wrong..!");
});

//server creation
app.listen(3000,()=>{
    console.log("\n");
    console.log("Server running Smoothly in (http://localhost.3000)");
});
