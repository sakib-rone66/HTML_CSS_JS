//.env load
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

//ThunderClient post json middleware
app.use(express.json());

//Middleware
app.use((req, res, next)=>{
    console.log("Middleware is running..!");
    next();
});

//Import ./routes/students.js
const studentsRouter = require("./routes/students");
app.use("/students", studentsRouter);

//MongoDB connection using .env
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("MongoDB connected Successfully");
}).catch((err) => {
    console.error("MongoDB Connection Failed:", err);
});

//server creation using .env
app.listen(process.env.PORT, ()=>{
    console.log("\n");
    console.log(`Server running on port ${process.env.PORT}`);
});