

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENTLISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    if (todoInput.value === "") {
        alert("input todo");
    } else {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //checkbutton
        const completedBtn = document.createElement("button");
        completedBtn.innerHTML = '<span class="fa-check">&checkmark;</span>';
        completedBtn.classList.add("complete-btn");
        todoDiv.appendChild(completedBtn);
        //checkbutton
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<span class="fa-trash">&times;</span>';
        trashBtn.classList.add("trash-btn");
        todoDiv.appendChild(trashBtn);
        todoList.appendChild(todoDiv);
        todoInput.value = ""
    }
}
function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


