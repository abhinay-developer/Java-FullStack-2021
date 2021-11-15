console.log("Conditional Statements");

//if Condition



/***
 * 
 *  if(<condition>){
 * 
 * //statements
 *  }
 * 
 * 
 * 
 */

/** If Condition  **/
var a=18;

if(a>=18){
    console.log(" Iam Eligible for Voting");
}//if


/** If-else Condition **/
 var marks=85;
if(marks>=35){
    console.log("Pass")
}//if
else{
    console.log("Fail");
}//else

/** if elseif else Condition  **/
/***
 *  
 *  below   35 FAIL
 *  35-59   SECOUND CLASS
 *  60-69   FIRST CLASS  
 *  70-100  DISTINCTION 
 */
  
 var mar=60;
   
   if(mar>=0&&mar<=35){
       console.log("FAIL");
   }
   else if(mar>=35 && mar<=59){
       console.log("SECOUND CLASS")
   }
   else if(mar>=60 && mar<=69){
       console.log("FIRST CLASS")
   } 
   else if(mar>=70 && mar<=100){
        console.log("DISTINCTION")
   }
   else{
        console.log("Invalid Marks");
   }


   // Nested -IF

   var score=100;
      
     if(score>=90){
         console.log("First IF")
        if(score>=80){
            console.log("Secound  IF")

            if(score>=70){
                console.log("Third IF")

                console.log("ROHIT SCORED 70 Runs")
            }//if
        }//if
     }//if


     /***
      * 
      * LADDER IF
      */

    var number=18;

     if(number>=0&&number<=10){
        console.log("Number Lies in Between 0-10");
     }//if
     if(number>=11&&number<=20){
        console.log("Number Lies in Between 11-20");
     }//if
     if(number>=21&&number<=30){
        console.log("Number Lies in Between 21-30");
     }//if