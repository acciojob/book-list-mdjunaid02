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
})

