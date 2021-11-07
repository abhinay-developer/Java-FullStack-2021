//String 

var firstName="Raja";

var lastName="Rani";

// console.log("FirstName and LastName "+ firstName+lastName);

//ES6
console.log(`FirstName and LastName ${firstName}${lastName}`);


//Numbers

var  salary=45000.01
   
console.log("Salary:"+salary);

//Boolean  

var isQualified=false;

console.log("Is Qualified:"+isQualified)


// null 

var myName=null;

console.log("My Name:"+myName);

myName="Naresh";

console.log("My Name:"+myName);


// undefined

var fee;

console.log("Fee :"+fee);

// 1. Array   2. Object

//Arrays

var fruits=["Mango","Banana","Apple","Grapes","Guava"];

console.log("Fruits:"+fruits)

//We can Access Mango

console.log(fruits[0]);

//Access Guava

console.log(fruits[4])

//Access banana and Grapes

console.log(fruits[1]+fruits[3]);


//Object 
            //array of Object
var student=[
    {
        id:1,
        name:"naresh",
        age:23,
        desigination:"Python Developer",
        salary:120000
    },
    {
        id:2,
        name:"Ajay",
        age:23,
        desigination:"Angular Developer",
        salary:50000
    },
    {
        id:3,
        name:"Arun",
        age:23,
        desigination:"React Js Developer",
        salary:90000
    }

]

console.log(student[2]);





