const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  console.log(toDoInput.value);
  toDoInput.value = "";
  console.log(newToDo, toDoInput.value); // toDoInput.value 는 빈값이다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);
