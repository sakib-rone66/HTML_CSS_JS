
console.log("\n");
console.log("CRUD Operation");
console.log("\n");

const express = require("express");        //call express
const mongoose = require("mongoose");     //call mongoose

const app = express();

app.use(express.json());                        //for "req.body"

app.use((req, res, next)=>{                    //Middleware
    console.log("Middleware is Running...!");
    next();
});

const studentRouter = require("./routes/students");                 //import router: "students.js"
app.use("/students", studentRouter);

mongoose.connect("mongodb://127.0.0.1:27017/StudentManagement")    //Connect DB by Mongoose
.then(()=>{
    console.log("Database Connected Successfully..!");
})
.catch((err)=>{
    console.log("err")
})

app.listen(3000, ()=>{                                               //create server
    console.log("Server is Running....in the (http://localhost:3000");
});
