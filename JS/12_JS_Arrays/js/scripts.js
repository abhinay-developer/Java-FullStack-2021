console.log("JS Arrays");

var fruits=["Banana","apple","Mango","Grapes"];

// console.log("Fruits:"+fruits);

// console.log(`Fruits:${fruits}`);

//Traditional For
for(let i=0;i<=fruits.length;i++){

    console.log(fruits[i]);
}

//For Each
fruits.forEach(element => console.log(element)
);


var num=[1,2,3,4,5,6,7,8,9,10,50,67,90,110,100,70,3000];
var n=0;
for(let i=0;i<=num.length;i++){

    
    if(n<num[i]){
        n=num[i];
    }
}
console.log(n);




num.forEach(element=>{

    // if(element%2!==0){
    //     console.log(element-20);
    // }
    // else{
    //     console.log(element);
    // }
//    if(element%2==0){
//        console.log(element+10);
//    }
//    else{
//     console.log(element)

//    }

    // console.log(element+10)
});


var  ages=[45,78,98,43,56,89,25,90];

    //  ages.push(100); adding element in Last
   // ages.unshift(25); adding element in the front

   //ages.shift();// removes first element

   //ages.pop(); //removes last element

    //  ages.forEach(element=>console.log(element))
   
     console.log(ages.filter((element)=>element%2==0))

     console.log(ages.map((element)=>element+100))

    //  console.log()



    var employee=[
        {
            id:1,
            name:"karan",
            salary:78000,
            designation:"Software Developer"
        },
        {
            id:2,
            name:"sai",
            salary:85000,
            designation:"Angular Developer"
        },
        {
            id:3,
            name:"ajay",
            salary:50000,
            designation:"Python Developer"
        }
    ]
    var value={
        salary:0
    };
    
employee.filter((element)=>{
    
    if(value.salary<element.salary){

        value=element;
    }
});
console.log(value)
