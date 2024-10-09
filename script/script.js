document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Per favore, inserisci un\'attività.');
        return;
    }

    var li = document.createElement('li');
    li.textContent = taskText;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Elimina';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.parentNode.removeChild(li);
    });

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';
}
