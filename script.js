const textInput = document.querySelector("#toDo");
const btnSubmit = document.querySelector("#btnSubmit");
const submitForm = document.querySelector("form");
const list = document.querySelector("ul");

let toDos = JSON.parse(localStorage.getItem("todos")) || [];

// Function to render a single todo item
function renderToDoItem(todo) {
  const newToDo = document.createElement("li");
  newToDo.innerText = todo.task;
  newToDo.isCompleted = todo.isCompleted;
  if (newToDo.isCompleted) {
    newToDo.style.textDecoration = "line-through";
  }

  const newBtnRemove = createButton("Remove To-Do", "remove");
  const newBtnCross = createButton("Cross To-Do", "cross");

  newToDo.appendChild(newBtnRemove);
  newToDo.appendChild(newBtnCross);

  list.appendChild(newToDo);
}

// Function to create a button
function createButton(text, id) {
  const button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  return button;
}

// Render existing todos
toDos.forEach(renderToDoItem);

// Event listener for form submission
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addToDo();
});

function addToDo() {
  const task = textInput.value.trim();
  if (task) {
    toDos.push({ task, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(toDos));
    renderToDoItem({ task, isCompleted: false });
    textInput.value = "";
  }
}

// Event listener for list item clicks
list.addEventListener("click", function (e) {
  const listItem = e.target.parentElement;

  if (e.target.id === "remove") {
    const taskText = listItem.innerText.split("Remove")[0].trim();
    toDos = toDos.filter((todo) => todo.task !== taskText);
    localStorage.setItem("todos", JSON.stringify(toDos));
    listItem.remove();
  } else if (e.target.id === "cross") {
    listItem.isCompleted = !listItem.isCompleted;
    listItem.style.textDecoration = listItem.isCompleted ? "line-through" : "none";
  }
});
