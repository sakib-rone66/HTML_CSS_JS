require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();

//json Middleware
app.use(express.json());

//Middleware
app.use((req, res, next)=>{
    console.log("Middleware is Running..");
    next();
});

//Import ./routes/students
const studentsRouter=require("./routes/students");
app.use("/students", studentsRouter);

//DataBase: MongoDB
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("MongoDB connected.!");
    console.log("\n");
}).catch((err)=>{
    console.error("MongoDB connection FAILED", err);
})

//Server
app.listen(process.env.PORT,()=>{
    console.log("\n");
    console.log(`Server is Running in PORT:${process.env.PORT}`);
});