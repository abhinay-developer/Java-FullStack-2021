//String
var myName = "Raja";
var age = 25;
var isPresent = true;
var value = true;
console.log("My Name:" + myName);
console.log("My Name:" + myName);
console.log("value:" + value);
console.log("Is Present : " + isPresent);
var Greeting = /** @class */ (function () {
    function Greeting(id, name) {
        this.id = id;
        this.name = name;
        console.log("Id: " + id + " Name: " + name);
    }
    return Greeting;
}());
var greeting = new Greeting(1, "Vamshi");
var greeting1 = new Greeting(2, "sameer");
