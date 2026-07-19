console.log("\n");
console.log("Practice");
console.log("\n");

const express = require("express");
const mongoose = require ("mongoose");
const app = express();

app.use(express.json());

app.use(( req, res, next)=>{                    //middleware
    console.log("Middleware is Running..");
    next();
});

const studentRouter = require ("./routes/students",);      //import
app.use("/students", studentRouter);

mongoose.connect("mongodb://127.0.0.1:27017/StudentManagement")   //DB
.then(()=>{
    console.log("MongoDb connected Successfully...!");
}).catch((err)=>{
    console.log("OH No.! Theres something Wrong..!");
});

app.listen(3000,()=>{
    console.log("Server is Running at (http://localhost:3000)");
})