

// Bonus Assignments: q1
function PrintHeaders() {
  for (let i = 1; i < 7; i++) {
     document.write(`<h${i}> welcome to my page <h${i}>`);
  }
}

PrintHeaders();
// Bonus Assignments: q2


console.log(Myname )
console.log( Age )
console.log( DoB)

const tableData= [Myname,DoB,Age]
const tableHeaders= ["Name","Date of Birth","Age"]

const myTable=document.getElementById("data")

for(let i=0 ;i<3;i++)
{  
    let myTr=document.createElement("tr")
    for(let j=0 ;j<2;j++){
        let mytd=document.createElement("td")
        j==0? mytd.innerText=tableHeaders[i] : mytd.innerText=tableData[i];
        console.log("j is :"+j)
        myTr.appendChild(mytd)
    }  
    myTable.append(myTr)
}
