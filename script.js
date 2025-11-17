document.addEventListener('DOMContentLoaded',()=>{
	documemnt.GelElementById("submit").addEventListener("click", function(e){
		e.preventDefault();
		const title=document.getElementById("title").value;
		const author=document.getElementById("author").value;
		const isbn=document.getElementById("title").value;

		if(!title || !author || !isbn)return;

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

		const deleteCell=document.createElement("td");
		const delBtn=document.createElement("button");
		delBtn.textContent="X"
		delBtn.style.backgroundcolor("red");
		delBtn.style.color("white");
		delBtn.onclick=function(){
			row.remove;
		};
		deleteCell.appendChild(delBtn);
		row.appendChild(deleteCell);

		tableBody.appendChild(row);

		const title=document.getElementById("title").value="";
		const author=document.getElementById("author").value="";
		const isbn=document.getElementById("title").value="";
	});
});
