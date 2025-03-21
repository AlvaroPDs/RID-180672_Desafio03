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
date.value = 'Criado em ' + newDate;

//Event Listeners
//CODIGO EXPERIMENTAL
//document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', buttonChecked);
//todoList.addEventListener('click',)

//Funções
function addTodo(event){
    //Previne de ao dar submit ir pra outra pagina
    event.preventDefault();

    //Div da to do list
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // Cria a lista
    const newTodo = document.createElement('li');
    newTodo.innerHTML=`<div id="todo-info"><textarea readonly type="output" class="description">${todoInputDescription.value}</textarea><div  class ="sub-info-container"><p class="tag">${todoInputTag.value}</p><p class="date">${date.value}</p></div></div>`
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    //(CODIGO EXPERIMENTAL)
    //saveLocalTodos(todoInputDescription.value)
    //saveLocalTodos(todoInputTag.value)
    //saveLocalTodos(date.value)
    //Cria o botão de checado
    const completedButton = document.createElement('button')
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //Cria o botão de apagar task
    const deleteTaskButton = document.createElement('button')
    deleteTaskButton.classList.add('trash-btn')
    deleteTaskButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteTaskButton)
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
    //Deletar o item da lista
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }


    //Botão checado
    if(item.classList[0] === 'complete-btn'){
        // Esse codigo é experimental(não é o método mais simples mas funciona)
        const todoDescription = item.parentElement.children[0].children[0].children[0];
        const todoTag =  item.parentElement.children[0].children[0].children[1];
        const todoDate =  item.parentElement.children[0].children[0].children[1].children[1];
        const todoButtonCheck = item.parentElement.children[1];
        // Trocas de classes
        todoDescription.classList.toggle('completed-line');
        todoTag.classList.toggle('completed-check');
        todoDate.classList.toggle('completed-check');
        todoButtonCheck.classList.toggle('checked')
      
        
    }

    // Salva tudo no local storage
    saveData()

}
//const invalidInput = (textinput) => {
//    if(textinput.value === ''){
//        textinput.setCustomValidity('Por favor preencha os dois campos!')
//    }
//    return true;
//}

// Local storage

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML)

}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data')
}
// Mostra tudo que foi salvo  no local storage
showData()

//localStorage.clear()
//(CODIGO EXPERIMENTAL)
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
