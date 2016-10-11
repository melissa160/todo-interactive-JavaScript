//problem: user interaction doesnt work
//solution: add interactive

var taskInput = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompletedTaskHolder = document.getElementById('incomplete-tasks');//incomplete-tasks
var incompletedTaskHolder = document.getElementById('<completed-tasks></completed-tasks>');//completed-taskssks


//Add a new task
var addTask = function(){
	//when the button is pressed
	console.log("adding task");

	//create a new list item with the text from #new-task
		//input (checkbox)
		//label
		//input (text)
		//button.edit
		//button.delete
		//each element need to be modified and appended
}

//edit an existing task
var editTask = function(){
	//when the edit button is pressed
	console.log("editing task");
		//if the class of the parent(li) is .editMode
			//switch from .editMode
			//label text become the input's value
		//else
			//switch to .editMode
			//input value becomes the label's text   

	//toggle edit mode on the parent
}


//delete an existing task
var deleteTask = function(){
	console.log("deleting task")
	//when the delete button is pressed
		//remove from the list items the todo
}

//mark a task as completed
var taskCompleted = function(){
	//when the checbox is checked
	console.log("completing task")
		//append the todo to the #completed-tasks list
}



//mark a task as incompleted
var taskIncompleted = function(){
	//when the checkbox incompletes unchecked
	console.log("incompleting task")
		//append the todo to the #incompleted-tasks list (TODO)
}


//set the click handler to the add button
addButton.onclick = addTask;