//selectors
const todoInput = document.querySelector('.todo-input');

const todoButton = document.querySelector('.todo-button');

const todoList = document.querySelector('.todo-list');



// event listeners
todoButton.addEventListener('click', addTodo);
todoList


//functions

function addTodo(event){
    event.preventDefault();

    //to do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;


    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECH MARK
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash MARK
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value  = "";
}