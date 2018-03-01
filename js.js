let buttonAdd = document.getElementById('add');
let inputTask = document.getElementById('new-task');
let unfinishedTasks = document.getElementById('unfinishedTasks');
let finishedTasks = document.getElementById('finishedTasks');
function createNewElement (task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.innerHTML= 'Check';
    let input = document.createElement('input');
    input.type = 'text';
    input.disabled = true;
    input.value=task;
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.className = 'editButton';
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'deleteBtn';

    listItem.appendChild(checkbox);
    listItem.appendChild(input);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteBtn);

    return listItem
}


buttonAdd.addEventListener('click', addTask);

function addTask(){
    if(inputTask.value){
        let listItem = createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        inputTask.value = '';
        bindTaskEvents(listItem, unfinishTask);
    }
}

function bindTaskEvents(listItem) {
    let checkbox = listItem.querySelector('.checkbox');
    let editButton = listItem.querySelector('.editButton');
    let deleteButton = listItem.querySelector('.deleteBtn');
    checkbox.addEventListener('click', checkboxEvent);
    editButton.addEventListener('click', editTask);
    deleteButton.addEventListener('click', deleteTask);
}

function deleteTask() {
    console.log('2');
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function editTask() {
    console.log('1');
    let editButton = this;
    let listItem = this.parentNode;
    let input = listItem.querySelector('input[type=text]');

    let containsClass = listItem.classList.contains('editMode');

    if (containsClass){
        input.innerText = input.value;
        editButton.innerText = 'edit';
        input.disabled = true;
    } else {
        input.disabled = false;
        editButton.innerText = 'save';
    }
    listItem.classList.toggle('editMode');
}


function checkboxEvent() {
let listItem = this.parentNode;
    finishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishedTasks);
}

function unfinishTask() {
    
}

