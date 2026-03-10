let total = 0
let present = 0
let absent = 0

function markAttendance(){

let name = document.getElementById("name").value
let status = document.getElementById("status").value

if(name==""){
alert("Enter student name")
return
}

let table = document.getElementById("table")

let row = table.insertRow()

row.insertCell(0).innerHTML = name
row.insertCell(1).innerHTML = status

total++

if(status=="Present"){
present++
}
else{
absent++
}

document.getElementById("total").innerText = total
document.getElementById("present").innerText = present
document.getElementById("absent").innerText = absent

let percentage = (present/total)*100
document.getElementById("percentage").innerText = percentage.toFixed(2) + "%"

document.getElementById("name").value=""
}
