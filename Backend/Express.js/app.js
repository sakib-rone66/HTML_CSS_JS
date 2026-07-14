//Using Express create a server: GET
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/contact", (req, res) => {
    res.send("Contact");
});

app.get("/login", (req, res) => {
    res.send("Login");
});
app.get("/hello", (req, res) => {
    res.send(`
        <h1>Hello Page</h1>
        <p>Hello Rone! 👋</p>
    `);
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});

//Using Express create a server: POST
app.post("/hello",(req, res)=> {             //cannot see output in browser
    res.send("create successfully");
})
app.get("/hell", (req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.send("Hello Rone!");
});

//middleware
app.use((req, res, next) => {
    console.log("A request arrived!");
    next();
});

//req.method and req.url: localhost:4000/profile
app.get("/profile",(req, res)=>{
    console.log(req.method);
    console.log(req.url);
    res.send("Welcome to Profile");
});

//req.params Parameters:localhost:4000/assets/25
app.get("/assets/:id", (req, res) => {
    console.log(req.params.id);

    res.send("Asset ID: " + req.params.id);
});

//query parameter: localhost:4000/profile2?name=Rone
app.get("/profile2", (req, res)=>{
    console.log(req.query.name);
    res.send("Profile Loaded");
});

//Example: localhost:4000/assets2?status=active&location=Dhaka
app.get("/assets2", (req, res)=>{
    console.log(req.query.status);
    console.log(req.query.location);
    res.send("Active assests in Dhaka");
});

//res.json: here communication is start in standard form: localhost:4000/info
app.get("/info",(req, res)=>{
    console.log("Show info");
    res.json({
        name: "Rone",
        age: 27,
        city: "Dhaka"
    })
})

//multiple data
app.get("/assets3", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Freezer A"
        },
        {
            id: 2,
            name: "Freezer B"
        }
    ]);
});


//localhost:4000/students
app.get("/students",(req, res)=>{
    console.log("Students info");
    res.json([{
    name: "Rone",
    department: "CSE",
    age: 27
    },
    {
        name:"Rihan",
        department: "Children",
        age:4
    }
]);
});
