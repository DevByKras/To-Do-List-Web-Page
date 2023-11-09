const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
	if(inputBox.value === ''){
		alert("Поле не может быть пустым!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveTask();
}

listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveTask();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveTask();
	}
}, false);

function saveTask(){
	localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks(){
	listContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();