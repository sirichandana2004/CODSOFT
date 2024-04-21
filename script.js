
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.innerHTML += `<button onclick="editTask(${index})">Edit</button>
                         <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}


function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
    }
}


function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}


function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}


displayTasks();
