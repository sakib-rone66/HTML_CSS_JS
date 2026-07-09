console.log("\n");
console.log("Hello Node.js");
console.log("Backend Development start")
console.log("\n");

let name= "Sakib";
let age = 27;
console.log("Name:",name);
console.log("Age:",age);
console.log("Next year:",age+1);
console.log("\n");

console.log("=>Import Own module")
//Import Own module
const {add, multiply,div} = require("./math");    //Import math.js and store in variable "add, mul and div";
console.log(add(5, 3));          // push values in the variable so that it can execute it in math.js functions;
console.log(multiply(4,6));
console.log(div(20,5));
console.log("\n");

console.log("Or another Method ->");

const Beg = require("./math");        //Here Beg is used like a box;
console.log(Beg.add(5, 3));          // push values in the variable so that it can execute it in math.js functions;
console.log(Beg.multiply(6,4));
console.log(Beg.div(20, 5));
console.log("\n");

console.log("=>Build-in Module of Node.js");
console.log("\n");

console.log("**Build-in Module: os");
//Build in Module "os"
const os = require("os");         //no "./"
console.log(os.platform());      //os info
console.log(os.arch());          //cpu architecture
console.log(os.homedir());      //home folder
console.log("\n");

console.log("**Build-in Module: fs");
//Build in Module "fs" Write and read files
const fs=require("fs");
fs.writeFileSync("Hello.txt","**Congratualations Rone!**\nYou successfully Create a file, write into it and Read it.");
const data = fs.readFileSync("Hello.txt", "utf8");
console.log(data);
console.log("\n");

//create a file name "note.text" and put text "I am learning Node.js" into it
fs.writeFileSync("note.txt","I am learning Node.js");
const data2 = fs.readFileSync("note.txt","utf8");
console.log(data2);
console.log("\n");

console.log("**Build-in Module:path");
//Build in Module "path"
const path = require("path");
const mypath=path.join("files","docs", "home.text");
console.log(mypath);
console.log("\n");

console.log("**Build-in Module:http");
//Build in Module "http"
const http=require("http");
const server=http.createServer((req, res)=>{
    res.end("hello Rone!");
});
server.listen(3000);
console.log("Server restarted!");
console.log("Nodemon installed successfully!")