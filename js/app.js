//problem: user	 interaction doesnt work
//solution: add interactive

var taskInput = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompletedTaskHolder = document.getElementById('incomplete-tasks');//incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks');//completed-taskssks


//New task list item
var createNewTaskElement = function(taskString){

	//create new list item
	var listItem = document.createElement("li");
	
	//input (checkbox)
	var checkbox = document.createElement("input"); //checkbox
	
	//label
	var label = document.createElement("label");

	//input (text)
	var editInput = document.createElement("input"); //text
	
	//button.edit
	var editButton = document.createElement("button");

	//button.delete
	var deleteButton = document.createElement("button");
	
	//each element needs modifiying
	checkbox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;



	//each element needs appending
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);




	return listItem;
}

//Add a new task
var addTask = function(){
	console.log("adding task");

	//create a new list item with the text from #new-task
	var listItem = createNewTaskElement(taskInput.value);

	//apppend the listItem to the incompletedTaskHolder
	incompletedTaskHolder.appendChild(listItem);

	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";

}

//edit an existing task
var editTask = function(){
	//when the edit button is pressed
	console.log("editing task");
	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	var buttone = listItem.querySelector("button");

	var containsClass = listItem.classList.contains("editMode");
		//if the class of the parent(li) is .editMode
		if (containsClass){
			//switch from .editMode
			//label text become the input's value
			buttone.innerText = "Edit";
			label.innerText = editInput.value;

		} else {
		//else
			//switch to .editMode
			//input value becomes the label's text
			buttone.innerText = "Save";
			editInput.value = label.innerText;
		}
	//toggle edit mode on the list-item
	listItem.classList.toggle("editMode");

}


//delete an existing task
var deleteTask = function(){
	console.log("deleting task")
	//when the delete button is pressed
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//remove from the list items the todo
	ul.removeChild(listItem);
}

//mark a task as completed
var taskCompleted = function(){
	console.log("completing task")
	//append the todo to the #completed-tasks list
	var listItem = this.parentNode;//this es el checkbox, este tiene un parent node
	completedTaskHolder.appendChild(listItem);//adiciona en la lista de tareas completas el li que es el padre del checkbox marcado

	bindTaskEvents(listItem, taskIncompleted);
}



//mark a task as incompleted
var taskIncompleted = function(){
	//when the checkbox incompletes unchecked
	console.log("incompleting task")
	//append the todo to the #incompleted-tasks list (TODO)
	var listItem = this.parentNode;
	incompletedTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("en bindTaskEvents")
	//select taskListItem's children
	var checkbox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton =  taskListItem.querySelector('button.delete');
		
	//bind editTask to edit button
	editButton.addEventListener('click', editTask);
	
	//bind deleteTask to delete button
	deleteButton.onclick =  deleteTask;
	
	//bind checkBoxEventHandler to the checkbox -- it used .onchange method because the event could be with a keyboard or with a mouse so in this case is better than .onclick
	checkbox.onchange = checkBoxEventHandler;

}

//set the click handler to the add button, mejor forma que .onclick
addButton.addEventListener('click', addTask);

//cycle over todo or incomplete list 
for (var i = 0; i < incompletedTaskHolder.children.length; i++){
	//for each list item
		//bind events to list item's children (taskComplete)
		bindTaskEvents(incompletedTaskHolder.children[i], taskCompleted);
}


//cycle over completed list
	//for each list item
for (var i = 0; i < completedTaskHolder.children.length; i++ ){
		//bind events to list item's children (taskIncompleted)
		bindTaskEvents(completedTaskHolder.children[i], taskIncompleted);
}