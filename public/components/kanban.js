const kCard = document.querySelectorAll(".kanban_card");
const kColumn = document.querySelectorAll(".kanban_column");
const kSwim = document.querySelectorAll(".kanban_swimlane");
let draggableCard = null;

// drag functions
kCard.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableCard = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableCard = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

kColumn.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", dragDrop);
});

kSwim.forEach((swim) => {
  swim.addEventListener("dragover", dragOver);
  swim.addEventListener("dragenter", dragEnter);
  swim.addEventListener("dragleave", dragLeave);
  swim.addEventListener("drop", dragDrop);
});
function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "none";
}

function dragLeave() {
  this.style.border = "none";
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableCard);
}

// form pop-up
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close_modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// add task functionality

const task_submit = document.getElementById("task_submit");

task_submit.addEventListener("click", createTask);

function createTask() {
  const task_div = document.createElement("div");
  const input_val = document.getElementById("taskNameInput").value;
  const txt = document.createTextNode(input_val);

  task_div.appendChild(txt);
  task_div.classList.add("kanban_card");
  task_div.setAttribute("draggable", "true");

  // creating delete button
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("delete");
  span.appendChild(span_txt);

  task_div.appendChild(span);

  tasklist.appendChild(task_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });

  task_div.addEventListener("dragstart", dragStart);
  task_div.addEventListener("dragend", dragEnd);

  document.getElementById("task_input").value = "";
  task_form.classList.remove("active");
  overlay.classList.remove("active");
}