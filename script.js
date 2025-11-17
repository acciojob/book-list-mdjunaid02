document.getElementById("submit").addEventListener("click", function(e){
	e.preventDefault();
	const title=document.getElementById("title").value;
	const author=document.getElementById("author").value;
	const isbn=document.getElementById("isbn").value;

	if(!author || !title || !isbn)return;

	const tableBody=document.getElementById("book-list");
	const row=document.createElement("tr");

	const titleCell=document.createElement("td");
	titleCell.textContent=title;
	row.appendChild(titleCell);

	const authorCell=document.createElement("td");
	authorCell.textContent=author;
	row.appendChild(authorCell);

	const isbnCell=document.createElement("td");
	authorCell.textContent=isbn;
	row.appendChild(isbnCell);

	const deleteCell=document.createElement("td");
	const delBtn=document.createElement("button");
	delBtn.textContent="X";
	delBtn.className="delete";
	delBtn.style.backgroundColor="red";
	delBtn.style.color="white";
	delBtn.onclick=function(){
		row.remove();
	};
	deleteCell.appendChild(delBtn);
	row.appendChild(deleteCell);

	tableBody.appendChild(row);

	const title=document.getElementById("title").value="";
	const author=document.getElementById("author").value="";
	const isbn=document.getElementById("isbn").value="";
})

