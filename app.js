const app = document.querySelector('#app');
const taskInput = document.querySelector('#task-input');
const taskBtn = document.querySelector('#task-btn');
const delAllBtn = document.querySelector('#del-all-btn');
let taskList = document.querySelector('#task-list');
const delBtn = document.querySelector('#del-btn');
const upBtn = document.querySelector('#up-btn');
const downBtn = document.querySelector('#down-btn');

taskList.innerHTML = localStorage.getItem('list');

app.addEventListener('click', (e)=>{
    if(e.target.id === 'task-btn'){
        let taskItem = taskList.innerHTML += '<div class="d-flex flex-row justify-content-between align-items-center" id="item"><div class=" overflow w-75" style="margin-right: 10px; padding-top: 8px;"><p>' 
        + taskInput.value 
        + '</p></div>' 
        + '<div class="d-flex flex-row align-items-center"><a href="#" class="btn btn-success btn-sm" id="del-btn"></a>'
        + '<a href="#" class="btn btn-sm" id="up-btn"></a>'
        + '<a href="#" class="btn btn-sm" id="down-btn"></a></div></div>';
        taskInput.value = '';
        localStorage.setItem('list', taskList.innerHTML);
    }

    if(e.target.id === 'del-all-btn'){
        taskList.innerHTML = '';
        localStorage.removeItem('list');
    }

    if(e.target.id === 'del-btn'){
        e.target.parentElement.parentElement.remove();
        localStorage.setItem('list', taskList.innerHTML);
    }

    if(e.target.id === 'up-btn'){
        taskList.insertBefore(e.target.parentElement.parentElement, e.target.parentElement.parentElement.previousSibling);
        localStorage.setItem('list', taskList.innerHTML);
    }

    if(e.target.id === 'down-btn'){
        taskList.insertBefore(e.target.parentElement.parentElement, e.target.parentElement.parentElement.nextSibling.nextSibling);
        localStorage.setItem('list', taskList.innerHTML);
    }
})
