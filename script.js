//Seletores
const todoInputDescription = document.querySelector('#input-description');
const todoInputTag = document.querySelector('#input-tag');
const todoButton = document.querySelector('#add-task-btn');
const todoList = document.querySelector('#todo-list');
const listContainer = document.getElementById('todo-list');

//Criadores de elemento
const date = document.createElement('date')

//Data de criação
const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const newDate = day + '/' + month + '/' + year;
date.value = 'Criado ' + newDate;

//Event Listeners
//document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', buttonChecked);

//Funções
function addTodo(event){
    //Previne a form de de dar submit
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // Cria a lista
    const newTodo = document.createElement('li');
    newTodo.innerHTML=`<div style="flex-direction:column;"><p class="description">${todoInputDescription.value}</p><p class="tag">${todoInputTag.value}</p><p class="date">${date.value}</p></div>`
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    // Adiciona ao local storage
    //saveLocalTodos(todoInputDescription.value)
    //saveLocalTodos(todoInputTag.value)
    //saveLocalTodos(date.value)
    //Cria o botão de checado
    const completedButton = document.createElement('button')
    completedButton.innerText = 'Concluir';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //Append a div para lista
    todoList.appendChild(todoDiv);
    //Faz os inputs ficarem vazios após o submit
    todoInputDescription.value = [];
    todoInputTag.value = [];
    saveData()
}

// Função do botão que altera a classe dos valores criados
function buttonChecked(e){
    const item = e.target;
    if(item.classList[0] === 'complete-btn'){
        const todoDescription = item.parentElement.children[0].children[0].children[0];
        const todoTag =  item.parentElement.children[0].children[0].children[1];
        const todoDate =  item.parentElement.children[0].children[0].children[2];
        todoDescription.classList.toggle('completed-line');
        todoTag.classList.toggle('completed-check');
        todoDate.classList.toggle('completed-check');

        
    }
    saveData()

}

// Local storage

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML)

}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showData()

//function saveLocalTodos(todo){
//    let todos;
//    //CHECA -- Tenho algo ai dentro?
//    if(localStorage.getItem('todos') === null){
//        todos = [];
//    } else {
//        todos = JSON.parse(localStorage.getItem("todos"));
//    }
//
//    todos.push(todo)
//    localStorage.setItem("todos", JSON.stringify(todos));
//}
//
////Pega a lista
//
//function getTodos() {
//    let todos;
//    //CHECA -- Tenho algo ai dentro?
//    if(localStorage.getItem('todos') === null){
//        todos = [];
//    } else {
//        todos = JSON.parse(localStorage.getItem("todos"));
//    }
//
//    todos.forEach(function(todo){
//    //Todo Div
//    const todoDiv = document.createElement('div')
//    todoDiv.classList.add('todo')
//    // Cria a lista
//    const newTodo = document.createElement('li');
//    newTodo.innerHTML= todo;
//    newTodo.classList.add('todo-item')
//    todoDiv.appendChild(newTodo);
//    //Cria o botão de checado
//    const completedButton = document.createElement('button')
//    completedButton.innerText = 'Concluir';
//    completedButton.classList.add('complete-btn')
//    todoDiv.appendChild(completedButton)
//    //Append a div para lista
//    todoList.appendChild(todoDiv);
//    });
//
//}
//
//
