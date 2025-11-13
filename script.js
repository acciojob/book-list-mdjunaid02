//your JS code here. If required.
const title=document.getElementById("title").value;
const Author=document.getElementById("author").value;
const ISBN=document.getElementById("isbn").value;

let table=document.getElementById("table-striped");

if(document.getElementById("submit").onclick){
	let newRow=table.insertRow();
	let cell1=newRow.insertCell(title);
	let cell2=newRow.insertCell(Author);
	let cell3=newRow.insertCell(ISBN);
}