/*                     Java Script;
Contains: Object; Arrays*/

let name = "Sakib";
let age = 27;
let city = "Dhaka";
console.log(name);
console.log(age);
console.log(city);

/*Instead we use like this*/
const student ={
    name: "Sakib",
    age: 27,
    city: "Dhaka",
    sayhello: function(){              /*add sayhello function into object;*/
        console.log("Hello");
    }
};
student.sayhello();                   /*print the function*/
console.log (student.name);
console.log (student.age);
console.log (student.city);
console.log(student);

student.age=25;                        /*Update value*/
console.log(student);

student.position= "Intern";
student.task="learning JS";            /*Add value*/
console.log(student);

delete student.task;                   /*Delete value*/
console.log(student);


/*Java Script Arrays */

const fruits= ["Apple", "Banana","Orange" ]    /*Array= list*/
console.log(fruits);
console.log(fruits.length);                 
console.log(fruits[2]);
fruits[2]="Papaya";                            /*Update value*/
console.log(fruits);
fruits.push("Orange");                         /*push= add value last in the arrays*/
console.log(fruits);
fruits.pop();                                 /*pop= delete value last in the arrays*/
console.log(fruits);

const numbers=[10,20,30,40,50];
let total=0;
for(let i=0; i<numbers.length; i++){          /*loops in the arrays; i=0 means start in index 0; i<numbers.length means i<total length so that it cannot go to invalid index*/
    total += numbers[i];
}
console.log(total);
const title = document.getElementById("title");
