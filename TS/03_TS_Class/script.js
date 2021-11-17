var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}()); //class
//creating Object 
var employee = new Employee();
employee.id = 1;
employee.name = "Akshay";
employee.isPresent = false;
employee.salary = 45000;
var employee2 = new Employee();
employee2.id = 2;
employee2.name = "Ajay";
employee2.isPresent = true;
employee2.salary = 55000;
console.log("Employee:" + employee.id + " " + employee.name + " " + employee.isPresent + " " + employee.salary);
console.log("Employee 2:" + employee2.id + " " + employee2.name + " " + employee2.isPresent + " " + employee2.salary);
var Student = /** @class */ (function () {
    function Student() {
    }
    //Creation Function
    Student.prototype.displayStudent = function () {
        this.id = 1;
        this.name = "raja";
        this.age = 17;
        this.marks = 90;
        console.log("\nId:" + this.id + " \nName: " + this.name + " \nAge:" + this.age + " \nMarks: " + this.marks);
    };
    return Student;
}());
var student = new Student();
student.displayStudent();
