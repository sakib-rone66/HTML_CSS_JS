const express = require("express");
const app = express();

app.use((req, res, next)=>{
    console.log("Middleware id Running");
    next();
});

const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);

const employeeRoutes = require("./routes/employees");
app.use("/employees", employeeRoutes);

const assetsInfo = require("./routes/assets");
app.use("/assets", assetsInfo);

const doctorRoutes = require("./routes/doctors");
app.use("/doctors", doctorRoutes);

const nurseRoutes = require("./routes/nurses");
app.use("/nurses", nurseRoutes);

app.listen(3000, () => {
    console.log("Server Running ...");
});
