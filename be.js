
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


var myname=prompt("enter name ")

while ( !myname||!myname.match(/^[a-z]+$/i)) {
  myname=prompt("enter name in letters only ")
}

var age=prompt("enter Birth Data <2010 ")
console.log(isNaN(age) +age)

while (  age > 2010 || isNaN(age) )
{
  age=prompt("enter numbers only and date of birth must befor  2010   ")
}
hisAge=2021-parseInt(age)
document.getElementById("data").innerText=`name is ${myname} date of birth is ${age} age is ${hisAge}`