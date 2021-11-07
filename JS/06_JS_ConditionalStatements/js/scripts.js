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