/*              ****Express.js Day=>2****
         Contains: Status Code; MiddleWare*/

//status code:
console.log("Status code:");
const express = require("express");
const app = express();

//MiddleWare
app.use((req, res, next)=>{
    console.log("Middleware is Running..!");
    console.log("\n");
    next();
})

//200 Success
app.get("/home", (req,res)=>{
    res.status(200).json({
        status: 200,
        message: "Request successfull"
    });  
});

// 201 Created
app.get("/created", (req, res) => {
    res.status(201).json({
        status: 201,
        message: "New Resource Created"
    });
});


//400 Bad Request /wrong data
app.get("/badReq",(req, res)=>{
    res.status(400).json({
        status: 400,
        message: "Required correct Data"
    });
});

//401 Unauthorized
app.get("/authorized",(req, res)=>{
    res.status(401).json({
        status: 401,
        message:"Need authentication"
    });
});

//403 Fobidden
app.get("/forbidden",(req,res)=>{
    res.status(403).json({
        status: 403,
        message:"Access Forbidden"
    });
});

//404 Not Found
app.get("/notfound",(req, res)=>{
    res.status(404).json({
        status: 404,
        message: "Not Found"
    });
});

//505 Internal Server Error
app.get("/error",(req, res)=>{
    res.status(505).json({
        status:505,
        message:"OH NO, Error!"
    });
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
    console.log("Status Code Done");
});



