const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOLIST = "ToDo-list";

function savedToDoList() {
  localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function deleteToDo(a) {
  const parent = a.target.parentElement;
  parent.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(parent.id));
  savedToDoList();
}

function paintTodo(event) {
  const li = document.createElement("li");
  li.id = event.id;
  const span = document.createElement("span");
  span.innerText = event.text;
  const button = document.createElement("button");
  button.innerText = `❌`;
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}

function handleTodo(event) {
  event.preventDefault();
  const eventValue = toDoInput.value;
  toDoInput.value = "";
  const ID = {
    text: eventValue,
    id: Date.now(),
  };
  toDos.push(ID);
  savedToDoList();
  paintTodo(ID);
}

toDoForm.addEventListener("submit", handleTodo);

const savedTODOLIST = localStorage.getItem(TODOLIST);

if (savedTODOLIST !== null) {
  const parseTodo = JSON.parse(savedTODOLIST);
  toDos = savedTODOLIST;
  parseTodo.forEach(paintTodo);
}
