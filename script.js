let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        tasks.push({
            id: Date.now(),
            text: taskInput.value.trim(),
            completed: false
        });
        displayTasks();
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function toggleTaskStatus(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    displayTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.className = task.completed ? 'completed' : '';
        span.textContent = task.text;
        span.onclick = () => toggleTaskStatus(task.id);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => deleteTask(task.id);
        
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.onclick = () => toggleTaskStatus(task.id);
        
        li.appendChild(span);
        li.appendChild(removeButton);
        li.appendChild(doneButton);
        
        taskList.appendChild(li);
    });
}
