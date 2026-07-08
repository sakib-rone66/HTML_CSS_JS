/*                     JavaScript Learning Session
CONTAINS: Console.log, Variables-let & const, Data Types, Operators

link js in html  <script src= "script.js"></script> before end of body </body>
and run ctrl + shift + J open developer console to view output*/


/* console.log()*/

console.log("Hello!");
console.log("I am learning Javascript.");
console.log("2026");
console.log("false");
console.log(20+30);

/* "let" Create Variables*/
let name="Sakib";
let age=27;
let country="Bangladesh";

console.log(name);
console.log(age);
console.log(country);

let studentName="Rone";
let studentAge=27;
let isPassed= true;
let city="Dhaka";
console.log("Student Name is "+studentName);
console.log("Age: "+studentAge);
console.log("Passed "+isPassed);
console.log("Lives in "+city);

/*Update Variables*/
let numb=30;
numb=25;
console.log(numb);

let temperature =35;
console.log(temperature);
temperature = 29;
console.log(temperature);


/*const to create Variables*/
const pi=3.1416;
const daysInWeek= 7;
const companyName ="AML";

console.log(pi);
console.log(daysInWeek);
console.log(companyName);

/* Data Types*/
let o=10;
let p= "10";
let q="Rone";
let r = true;
console.log(typeof o);
console.log(typeof p);
console.log(typeof q);
console.log(typeof r);
console.log(typeof Number("55"));
let items;
console.log(typeof items);  /*undefined*/
console.log(typeof null);  /*always null typeof shows object*/


/*Operator Learning*/
let x=10;
x *=2;
console.log(x);
let y=x;
console.log(y);
x=50;
y=x;
x=x+5;
console.log(x);
console.log(y);
console.log(x>y);
console.log(x==="55");
console.log(x%=4);

let m=50;
n=m+10;
console.log(m,n);
console.log(10>8 && 5>2); /* AND -> both must true*/
console.log(10>8 && 1>2);
console.log(5>30 || 500<510);/* OR -> At least 1 must true*/
console.log(5>30 || 550<510);
console.log(!true); /* OR -> Reverse*/
console.log(!false);


/*Home Work: Today
let a = 12;
let b = 5;

// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponent

// Comparison
console.log(a > b);
console.log(a === b);

// Logical
console.log(a > b && b < 10);
console.log(a < b || b === 5);
*/

let a=12;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a>b);
console.log(a===b);
console.log(a>b && b<10);
console.log(a<b || b===5);
console.log(!(a>b));
