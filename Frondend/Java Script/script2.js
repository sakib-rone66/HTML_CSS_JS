/*                                          JavaScript Learning Session
CONTAINS: Condition: If, else if, else; Loops: for, while, do...while, Break, Continue; Function: return, arrow,scope

link js in html  <script src= "script.js"></script> before end of body </body>
and run ctrl + shift + J open developer console to view output*/


/* if*/

let number=50;
if(number>=20){
    console.log("Greater");
}

let temparature = 25;
if(temparature<=20){
    console.log("Cold");
}

let mark=39;
if(mark>=40){
    console.log("Pass");
}

/*if....else*/

let age=20;
if(age>=18){
    console.log("Adult");
}else{
    console.log("Minor");
}

let num = 15;
if(num%2===0){
    console.log("Even");
}else{
    console.log("Odd");
}

let pass = 1234;
if(pass===1234){
    console.log("Log in Successful");
}else{
    console.log("FAILED");
}

let a = 15;
let b = 20;
if(a>b){
    console.log("A is Greater");
}else{
    console.log("B is Greater");
}

let username = "admin";
let password = 12345;
if(username === "admin" && password === 12345){
    console.log("log in Successful");
}else{
    console.log("FAILED");
}

/*          else if
Always write condition in order*/

let marks2 = 75;
if(marks2>=80){
    console.log("A+");
}else if(marks2>=70){
    console.log("A");
}else if(marks2>=60){
    console.log("B");
}else if(marks2>=50){
    console.log("C");
}else{
    console.log("FAILED");
}

let isAdmin = false;
if (!isAdmin) {                        /*!false == true; so it run 1st statement*/
    console.log("Access Restricted");
} else {
    console.log("Welcome Admin");
}

/*Homework1 :
let ages = 65;

Print:
"Child" if ages < 13
"Teenager" if ages < 18
"Adult" if ages < 60
"Senior" otherwise
*/
let ages= 65;
if(ages<13){
    console.log("Child");
}else if(ages<18){
    console.log("Teenager");
}else if(ages<60){
    console.log("Adult");
}else{
    console.log("Senior");
}

/*Homework2:
let marks = 92;

Print:
A+ (90–100)
A (80–89)
B (70–79)
C (60–69)
F (below 60)
*/
let marks =92;
if(marks>=90 && marks<=100){
    console.log("A+");
}else if(marks>=80 && marks<=89){
    console.log("A");
}else if(marks>=70 && marks<=79){
    console.log("B");
}else if(marks>=60 && marks<=69){
    console.log("C");
}else{
    console.log("below 60");
}

/*Homework 3
let username = "sakib";
let password = "abcd";

Only print "Login Successful" if:

username is "sakib"
and password is "1234"

Otherwise print "Login Failed".*/
let username2 = "sakib";
let password2 = "abcd";
if(username2==="sakib" && password2==="1234"){
    console.log("Login Successful");
}else{
    console.log("Login Failed");
}

/*HomeWork 4
Can you write a program that prints:

"Excellent" if marks are 90 or above
"Good" if marks are 75–89
"Average" if marks are 50–74
"Fail" if marks are below 50
*/
let mark3 =79;
if(mark3>=90){
    console.log("Excellent");
}else if(mark3>=75){
    console.log("Good");
}else if(mark3>=50){
    console.log("Average");
}else{
    console.log("Fail");
}

/* Loops: for;*/


for(let i=1; i<=10; i++){
    console.log("Loop")
}
for (let i=10; i>=2; i--){
    console.log(i);
}

for (let n = 1; n <= 100; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}
/*Odd Number*/
for(let i=1; i<=20; i+=2){          /* for even number initialize from 2*/
    console.log(i);
}

/*Loops: while;*/
let i=2;
while(i<=10){
    console.log(i);               /* initialization 1st then inside while loop use only condition and update happens in body*/
    i+=3;
}

let o = 10;

while (o >= 1) {
    console.log(o);
    o--;
}

/*                          Loops: do...while;
Same as while but it 1st execute at least once then update then check condition*/

let k=5;
do{
    console.log(k)
    k+=5
}while(k<=40);

/*              Loops: Break;
Stop the loop before entire loop is finished*/

for(let l=2; l<=100; l+=2){
    if(l===50){
        break;
    }
    console.log(l);
}

/*              Loops: Continue;
Doesnot stop the loop just skip current iteration*/
for(let m =3; m<=30; m+=2){
    if(m===21){
        continue;
    }
    console.log(m);
}

/*HomeWork1:
Print numbers from 1 to 20.

But don't print 10.

Expected output:

1
2
3
...
9
11
12
...
20

(Hint: use continue.)
*/
for(let x=1; x<=20; x++){
    if(x===10){
        continue;
    }
    console.log(x);
}



/*HomeWork 2: Print numbers from 1 to 20.

Stop the loop when you reach 12.

Expected output:

1
2
3
...
11

(Hint: use break.)
*/
for(let y=1;y<=20; y++){
    if(y===12){
        break;
    }
    console.log(y);
}


/*Function*/
function showName(){
    console.log("Md. Sakib Al-Hasan");
}
showName();
showName();
showName();

function name(name){                    /* (name)= parameter*/
    console.log("Md. "+name);
}
name("Sakib");                         /*("Sakib") = argument*/
name("Rone"+" Talukder");
name("Rihan"+" Sheikh")

function math(a,b){                     /*multiple parameter*/
    console.log(a+b);
}
math(5,3);                              /*Multiple argument*/
math(10, 20);
math(50,30);

function add(a,b){
    return a+b;               /* return deliver the value whether function is called*/
}
let result = add(5,3);
console.log(result);

/*the power of return with a variables*/
function acmarks(a,b){
    return a+b;                             /*it hold values and deliver it to whether function is called and use multiple time to modify it */
}
let finalResult = acmarks(87, 82);
console.log(finalResult);
console.log(finalResult/2);
console.log(finalResult + 81);

/*arrow funtion*/
 const value=(a,b)=>a-b;                  /*function word out return also.*/
 console.log(value(72, 60));

 /*Scope: 1. Global Scope, 2.Local Scope;*/
 let myname="Sakib";                   /*Global because variables outside the function, used almost everywhere*/
 function SN(){
    console.log(myname);
 }
 SN();

 function local(){
    let calllog = 105;
    console.log(calllog);
 }
 local();                           /*its ok*/
 console.log(calllog);              /*undefined because of local variable "calllog" */

