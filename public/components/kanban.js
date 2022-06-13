// nav functionality
const menu_btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.navigation');

menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		nav_menu.classList.toggle('is-active');
});

// open music player from nav
const musicPlayer = document.querySelector('.music_player');

document.querySelector('.music_player_open').addEventListener('click', () => {
  musicPlayer.style.display = 'flex';
});

// close music player 

document.querySelector('.close_music').addEventListener('click', () => {
  musicPlayer.style.display = 'none';
})

// DRAG FUNCTIONALITY
const tasks = document.querySelectorAll(".card");
const allColumns = document.querySelectorAll(".kanban_column");
let draggableCard = null;

// Creating event listeners for when task is dragged between and on to columns
// Drag start first occurs when the task itself is clicked and moved. 
// Drag end occurs when there is no more dragging.
tasks.forEach((card) => {
  card.addEventListener("dragstart", beginDrag);
  card.addEventListener("dragend", dragEnd);
});


// Triggers when user first grabs task
function dragStart() {
  draggableCard = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

// Triggers when user stops dragging task under a column
// draggableCard set to null as dragging should stop when user stops
function dragEnd() {
  draggableCard = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
}

// Creating event listeners for each column so they know where the card is
allColumns.forEach((kanban_column) => {
  kanban_column.addEventListener("dragover", dragOver);
  kanban_column.addEventListener("dragenter", dragEnter);
  kanban_column.addEventListener("dragleave", dragLeave);
  kanban_column.addEventListener("drop", dragDrop);
});

// Triggers when task is over the kanban board, stops user from dropping the task outside the board
function dragOver(e) {
  e.preventDefault();
}

// Removing border styles that trigger when user is dragging card around
function dragEnter() {
  this.style.border = "none";
}

function dragLeave() {
  this.style.border = "none";
}

// Attaches the task to whichever column the user drops it to
function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableCard);
}


// TASK FORM

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

// Creates event listener that opens the task form when new task button is clicked 
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

// Event listener for button that will close the modal and overlay
close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    });
});

// Allows users to click out of the task form if they have nothing to enter
window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// CREATING NEW TASK CARD

const task_submit = document.getElementById("task_submit");
task_submit.addEventListener("click", createTask);

// Creating a function to store the input values of the task form
function createTask() {
  // Creates the div and inputted values
  const card_div = document.createElement("div");
  const input_taskName_val = document.getElementById("taskNameInput").value;
  const input_taskType_val = document.getElementById("taskTypeInput").value;
  const input_priority_val = document.getElementById("priorityInput").value;
  const input_dueDate_val = document.getElementById("dueDateInput").value;
  const input_compTime_val = document.getElementById("completionTimeInput").value;

 // First checks to see user has input all values, if not will create alert in browser
  if (input_taskName_val, input_taskType_val, input_priority_val, input_dueDate_val, input_compTime_val) {
    // Creates the text for the card
    const txt = document.createTextNode(input_taskName_val + ' • ' + input_taskType_val + ' • ' +' due: ' + input_dueDate_val + ' • ' + ' priority: ' + input_priority_val + ' • ' + input_compTime_val + ' ' + 'days to complete');

    // Attatches the text to the card div, adds the drag functionality, and changes cursor
    card_div.appendChild(txt);
    card_div.classList.add("card");
    // div colour will change according to priority
    card_div.id = input_priority_val;
    card_div.setAttribute("draggable", "true");
    card_div.addEventListener("dragstart", dragStart);
    card_div.addEventListener("dragend", dragEnd);
    card_div.style.cursor = "grab";

    // Creates the delete button for each card
    const cardDel = document.createElement("button");
    cardDel.classList.add('delete');
    cardDel.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    cardDel.addEventListener("click", () => {
      cardDel.parentElement.style.display = "none";
    });

    card_div.appendChild(cardDel);

    // Finally adding card to the tasklist
    tasklist.appendChild(card_div);

    // Resetting form after a task is added, and removing the overlay and form from view https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission

    const inputs = document.querySelectorAll(".task_input");
    inputs.forEach(task_input =>  task_input.value = '');

  
    overlay.classList.remove("active");
    document.getElementById("task_form").classList.remove("active");
    
  } else {
    alert("Please input all task details before submitting.");
  }

}

// Creating functionality for delete buttons on tasks
const close_btns = document.querySelectorAll(".delete");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

// COLUMNS

// Making all headers editable https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist
const editColumn = document.querySelectorAll('.edit_column');
const column_txt = document.querySelectorAll('.header_txt'); 

for (let i = 0; i < editColumn.length; i++) {
    // When pen icon is clicked header is editable
    editColumn[i].addEventListener("click", function() {
      column_txt[i].contentEditable = "true";
      alert('Press enter to save changes');
     });

     // When user presses enter their changes are saved
     document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          column_txt[i].contentEditable = "false";
        }
    });
}

// Deleting columns
const deleteColumn = document.querySelectorAll('.delete_column');
const wholeColumn = document.querySelectorAll('.column_container');

for (let i = 0; i < deleteColumn.length; i++) {
  // Making sure the tasklist doesn't get deleted by checking the index of the column container
  if (i >= 0){
    deleteColumn[i].addEventListener("click", function() {
      wholeColumn[i+1].style.display = "none";
     });
  }
}

// Adding columns

const addColumn = document.querySelector('.add_column');
addColumn.addEventListener("click", newColumn);

function newColumn() {
  // Creating the column div
  const container_div = document.createElement('div');
  container_div.classList.add('column_container');

    // Creating the new header
    const new_header = document.createElement('div');
    new_header.classList.add('column_header');

      // New header title
      const new_header_txt = document.createElement('h3');
      new_header_txt.innerHTML = 'new column';
      new_header_txt.classList.add('header_txt');

      // New header buttons
      const new_header_buttons = document.createElement('div');
      new_header_buttons.classList.add('header_buttons');

      const new_header_edit = document.createElement('button');
      new_header_edit.classList.add('edit_column');
      new_header_edit.innerHTML = '<i class="fa-solid fa-pen fa-xs"></i>';

      // Adding edit functionality to new buttons
      new_header_edit.addEventListener("click", function() {
        new_header_txt.contentEditable = "true";
        alert('Press enter to save changes');
      });

      document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          new_header_txt.contentEditable = "false";
        }
      });

      // Adding delete functionality to new buttons
      const new_header_del = document.createElement('button');
      new_header_del.classList.add('delete_column');
      new_header_del.innerHTML = '<i class="fa-solid fa-xmark"></i>';

      new_header_del.addEventListener("click", function() {
        container_div.style.display = "none";
      });

      // Appending header buttons to their div, and then appending the title and buttons
      // to header div
      new_header_buttons.appendChild(new_header_edit);
      new_header_buttons.appendChild(new_header_del);
      new_header.appendChild(new_header_txt);
      new_header.appendChild(new_header_buttons);
    
    // Creating the new column
    const new_col = document.createElement('div');
    new_col.classList.add('kanban_column');

    // Adding event listeners to columns so items can be dropped into them
    new_col.addEventListener("dragover", dragOver);
    new_col.addEventListener("dragenter", dragEnter);
    new_col.addEventListener("dragleave", dragLeave);
    new_col.addEventListener("drop", dragDrop);
  
  // Appending header and column to container
  container_div.appendChild(new_header);
  container_div.appendChild(new_col);

  // Appending container to kanban board container
  document.querySelector('.kanban_board').appendChild(container_div);

}

// POMODORO

// Creating default variables for pomodoro intervals
const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 30,
  longBreakInterval: 4,
  // Keeps track of pomodoro sessions completed
  sessions: 0,
}

let interval;

// Checks to see if start is clicked so the startTimer function can run
// If not, timer will remain stopped
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
  const { action } = mainButton.dataset;
  if (action === 'start') {
    startTimer();
  } else {
    stopTimer();
  }
});


const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

function getRemainingTime(endTime) {
  // Finds difference between current time and future end time of
  // curent timer mode to determine and store total number of seconds left
  const currentTime = Date.parse(new Date());
  const difference = endTime - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  const seconds = Number.parseInt(total % 60, 10);
  
  return {
    total,
    minutes,
    seconds,
  };
}

function startTimer() {
  // Calculates when the timer will end
  let { total } = timer.remainingTime;
  const endTime = Date.parse(new Date()) + total * 1000;

  // Adds increments to sessions value at the start of each pomodoro
  if (timer.mode === 'pomodoro') timer.sessions++;

  // Changing button to pause button when timer is running
  mainButton.dataset.action = 'stop';
  mainButton.textContent = 'stop';
  mainButton.classList.add('active');

  // Exceutes updateClock every second to update countdown to latest value
  interval = setInterval(function() {
    timer.remainingTime = getRemainingTime(endTime);
    updateClock();

    // Checks to see if total remaining time is equal to zero
    // if yes will clear timer
    total = timer.remainingTime.total;
    if (total <= 0) {
      clearInterval(interval);

      // Automatically switches modes when one mode is completed
      switch (timer.mode) {
        case 'pomodoro':
          // Checks to see if number of sessions is divisible by a long break
          // interval to determine whether it should switch to a short break or
          // long break
          if (timer.sessions % timer.longBreakInterval === 0) {
            switchMode('longBreak');
          } else {
            switchMode('shortBreak');
          }
          break;
        // Starts pomodoro when break ends
        default:
          switchMode('pomodoro');
      }

      startTimer();
    }
  }, 1000);
}

// Clearing the interval causes setInterval method above to be triggered, 
// which pauses the timer, and changes button back to start
function stopTimer() {
  clearInterval(interval);
  
  mainButton.dataset.action = 'start';
  mainButton.textContent = 'start';
  mainButton.classList.remove('active');
}

function updateClock() {
  // Takes the remaining time and "pads" it with zeros so numbers always have
  // two digits (08 instead of 8)
  const { remainingTime } = timer;
  const minutes = `${remainingTime.minutes}`.padStart(2, '0');
  const seconds = `${remainingTime.seconds}`.padStart(2, '0');

  const min = document.getElementById('js-minutes');
  const sec = document.getElementById('js-seconds');
  min.textContent = minutes;
  sec.textContent = seconds;

}

function switchMode(mode) {
  // Sets mode property and remaining mode property to current mode
  timer.mode = mode;
  timer.remainingTime = {
    // Seconds remaining for current mode
    total: timer[mode] * 60,
    // Initial minutes and seconds for target mode
    minutes: timer[mode],
    seconds: 0,
  };

  // Removing the active class from current mode and sets to the mode that
  // user has clicked
  document
    .querySelectorAll('button[data-mode]')
    .forEach(e => e.classList.remove('active'));
  document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

  updateClock();
}

// Function that responds to user switching the mode of the timer
function handleMode(event) {
  // Value of data mode retrieved from target button
  const { mode } = event.target.dataset;

  if (!mode) return;

  switchMode(mode);
  // Clears timer when mode is switched
  stopTimer();
}

// Button to reset timer
const resetButton = document.querySelector(".reset_button");
resetButton.addEventListener("click", reset);

function reset(mode){
  
  stopTimer();
  switchMode(timer.mode);
}


// Ensures mode and remainingTime properties are set on timer object when the 
// page loads, by executing switchMode to set default timer mode to pomodoro
document.addEventListener('DOMContentLoaded', () => {
  switchMode('pomodoro');
});

const session_start = document.querySelector('#start_sesh');
const pomo_modal = document.querySelector('.pomodoro_modal');
// Show pomodoro modal and activate session layout
if (session_start) {
  session_start.addEventListener('click', () => {
    pomo_modal.style.display = 'block';
    document.body.style.backgroundColor = "#ECFFF5";
  })
} 
// Close pomodoro modal functionality
const close_pomo_modal = document.querySelector('.close_pomo');

close_pomo_modal.addEventListener('click', () => {
  pomo_modal.style.display = 'none';
})
