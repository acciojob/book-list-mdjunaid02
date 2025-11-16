document.getElementById("submit").addEventListener("click",function(e){
	e.presendDefault();
	const title=getElementById("title").value;
	const author=getElmentById("author").value;
	const isbn=getElementById("isbn").vaule;

	if(!author || !title || !isbn) return;

	const tableBody=document.getElementById("book-list");
	const row=document.createElement("tr");

	const titleCell=document.createElement("td");
	titleCell.textContent=title;
	row.appendChild(titleCell);

	const authorCell=document.createElement("td");
	authorCell.textContent=author;
	row.appendChild(authorCell);

	const isbnCell=document.createElement("td");
	isbnCell.textContent=isbn;
	row.appendChild(isbnCell);

	tableBody.appendChild(row);
});

