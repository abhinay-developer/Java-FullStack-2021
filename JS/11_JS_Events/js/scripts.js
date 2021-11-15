

function onLogin(){

    alert("Login Success");
}//onLogin()

function onRegister(){

    alert("Register Success");
}//onRegister()

function onService(){

    console.log("Hello")
}

//Using Tag Name
var name=document.getElementsByTagName('div').innerHTML="Ajay";

document.writeln(name);


//Using ID
function onHello(){
    var helloValue=document.getElementById('display-hello').innerHTML="Hello , Welcome To JS World";
   document.writeln(helloValue);
}

function onAdd(){

    var firstNumber=document.getElementById('firstNumber').value;

    var secondNumber=document.getElementById('secondNumber').value;

    var result=Number(firstNumber)+Number(secondNumber);

    console.log("Result:"+result);

    document.getElementById('final-result').innerHTML=result;
    // document.write(lastResult);
}