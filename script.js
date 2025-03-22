//Seletores
const todoInputDescription = document.querySelector('#input-description');
const todoInputTag = document.querySelector('#input-tag');
const todoButton = document.querySelector('#add-task-btn');
const todoList = document.querySelector('#todo-list');


//Criadores de elemento
const date = document.createElement('date')

//Appends separados para elementos individuais


//Data de criação de cada elemento da lista
const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const newDate = day + '/' + month + '/' + year;
date.value = 'Criado em ' + newDate;

//Event Listeners

//(CODIGO EXPERIMENTAL)
//document.addEventListener("DOMContentLoaded", getTodos);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', buttonChecked);

//(CODIGO EXPERIMENTAL)
//todoList.addEventListener('click',)

//Funções

// Cria uma nova tarefa
function addTodo(event){
    //Previne de ao dar submit ir pra outra pagina
    event.preventDefault();

    //Div da to do list
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    
    // Cria a lista
    const newTodo = document.createElement('li');
    newTodo.innerHTML=`<div id="todo-info"><textarea readonly name="desc" type="output" class="description">${todoInputDescription.value}</textarea><div  class ="sub-info-container"><p class="tag">${todoInputTag.value}</p><p class="date">${date.value}</p></div></div>`
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
    
    // Salva a nova tarefa no local storage
    saveData()
}

// Botão que altera a classe dos valores criados e apaga tarefas da lista
function buttonChecked(e){
    const item = e.target;
    
    //Deletar o item da lista
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }


    //Botão checado
    if(item.classList[0] === 'complete-btn'){
        
        // Seletores de elementos da lista
        // (objetivo pra outro momento: "achar um codigo mais conciso que esse")
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

    // Salva a execução dos botões no local storage
    saveData()

    //Executa a função do contador de tarefas ao acionar o botão
    taskProgressData()

}

//Contador de tarefas concluidas

function taskProgressData(){
    let tasksProgress

    const tasksProgressDom = document.getElementById('tasks-progress')

    if (tasksProgressDom) tasksProgress = tasksProgressDom;
    else {
        const newTasksProgressDOM = document.createElement('div');
        newTasksProgressDOM.id = 'tasks-progress';
        document.getElementById('todo-footer').appendChild(newTasksProgressDOM);
        tasksProgress = newTasksProgressDOM;
    }
   
    const doneTasks = document.getElementsByClassName('checked').length
    tasksProgress.textContent = `${doneTasks} tarefa(s) concluída(s)`
}

//(CODIGO EXPERIMENTAL)
//const invalidInput = (textinput) => {
//    if(textinput.value === ''){
//        textinput.setCustomValidity('Por favor preencha os dois campos!')
//    }
//    return true;
//}

// Local storage

function saveData(){
  localStorage.setItem('data', todoList.innerHTML)

}

function showData(){
    todoList.innerHTML = localStorage.getItem('data')
}

//Mostra tudo que foi salvo  no local storage
showData()

window.onload = function (){
    taskProgressData()
}

//Codigo pra limpar todos os items criados na lista
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
