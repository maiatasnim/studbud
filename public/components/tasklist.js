// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  let task = form.elements.task.value; // could be swapped out for line below
  //let task = taskInput.value;

  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format

  // Call the addTask() function using
  addTask(task, date, "26/03/2021", "Low", ["1", "30"], false);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating, estimatedTime, completionStatus) {
  let task = {
    id: Date.now(),
    taskDescription,
    createdDate,
    dueDate,
    priorityRating,
    estimatedTime,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {

  updateEmpty();

  let item = document.createElement("li");
  item.setAttribute('data-id', task.id);
  // item.innerHTML = "<p>" + task.taskDescription + "</p><br>" + "<p>" + task.dueDate + "</p><br>";

  // Add task details to list item
  let taskTitle = document.createElement("p");
  taskTitle.innerHTML = "<p>" + task.taskTitle + "</p><br>";

  let dueDate = document.createElement("p");
  dueDate.innerHTML = "<p>" + task.dueDate + "</p><br>";

  let taskDescription = document.createElement("p");
  taskDescription.innerHTML = "<p>" + task.taskDescription + "</p><br>";

  let priorityRating = document.createElement("p");
  priorityRating.innerHTML = "<p>" + task.priorityRating + "</p><br>";

  let estimatedTime = document.createElement("p");
  estimatedTime.innerHTML = "<p>" + task.estimatedTime + "</p><br>";

  let completionStatus = document.createElement("p");
  completionStatus.innerHTML = "<p>" + task.completionStatus + "</p><br>";

  tasklist.appendChild(item);
  item.appendChild(taskTitle);
  item.appendChild(dueDate);
  item.appendChild(taskDescription);
  item.appendChild(priorityRating);
  item.appendChild(estimatedTime);
  item.appendChild(completionStatus);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Setup edit button DOM elements

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = tasklistArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(tasklistArray, index);// Removes item from array/tasklist
    updateEmpty();
  
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}

function removeItemFromArray (arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;

}

function updateEmpty() {
  if (tasklistArray.length > 0){
    document.getElementById('emptyList').style.display = 'none';
  }
  else {
  document.getElementById('emptyList').style.display = 'block';
  }
}