const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");  // OR (#todo-form input)
let toDos = [];
const TODOS_KEYS = "todos"

function saveTodos(){
    localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}
function handleSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    
    todoInput.value = "";
    const todoObj = {item : newTodo, id: Date.now()};
    toDos.push(todoObj);
    
    paintTodo(todoObj);
    saveTodos();
}

function handleDeleteItem(event){
    const li = event.target.parentNode;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // these ids are string. update toDo array/
    saveTodos();    // we need to update local storage every time we update the array.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(todoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", handleDeleteItem);
    li.id = todoObj.id;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    span.innerText = todoObj.item;
}
todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEYS); 
if (savedTodos) { // could be null.
    const parsedTodos = JSON.parse(savedTodos);// parse turns string to javascript.
    toDos = parsedTodos;
    parsedTodos.forEach(item => {
        paintTodo(item);
    });
}