//Seletores
const todoInputDescription = document.querySelector('#input-description');
const todoInputTag = document.querySelector('#input-tag');
const todoButton = document.querySelector('#add-task-btn');
const todoList = document.querySelector('#todo-list');

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
    newTodo.innerHTML=`<div style="flex-direction:column;"><p class="description">${todoInputDescription.value}</p><p class="tag">${todoInputTag.value}</p><p>${date.value}</p></div>`
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    
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
}

function buttonChecked(e){
    const item = e.target;
    //Botão de checado

    if(item.classList[0] === 'complete-btn'){
        const todoDescription = document.querySelector('.description');
        const todoTag = document.querySelector('.tag')
        todoDescription.classList.toggle('completed')
        todoTag.classList.toggle('completed-tag')
    }
    console.log(item)

}