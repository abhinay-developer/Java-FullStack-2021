class  Person {

    id:number;
    name:string;
    age:number;
    city:string;
       
}
class Employee extends Person{
   
      empCode:string;
      departName:string;
}
let emp:Employee=new Employee();
    emp.id=1;
    emp.name="raja";
    emp.age=45;
    emp.city="Hyderbad";
    emp.empCode="INFOSYS01";
    emp.departName="IT";
     console.log(emp.departName)