
function calc(){
    num1=parseInt(document.getElementById("num1").value);
    console.log(num1)
    num2=parseInt(document.getElementById("num2").value)
    result=num1+num2
    document.getElementById("result").textContent=result
    }

function execute (text=document.getElementById("exp").value) {
    console.log(text)
    u=eval(text)
    document.getElementById("execRes").innerText="you entered " +text +"= " + u
}


 var Myname=prompt("enter name ")

while ( !Myname||!Myname.match(/^[a-z]+$/i)) {
  Myname=prompt("enter name in letters only ")
}

 var DoB=prompt("enter Birth Data <2010 ")
console.log(isNaN(DoB) +DoB)

while (  DoB > 2010 || isNaN(DoB) )
{
  DoB=prompt("enter numbers only and date of birth must befor  2010   ")
}
 var Age=2021-parseInt(DoB)
// document.getElementById("data").innerText=`name is ${Myname} date of birth is ${DoB} age is ${Age}`;

