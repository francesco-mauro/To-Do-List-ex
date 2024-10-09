document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    var taskInput = document.getElementById('task-input');
    var timeInput = document.getElementById('time-input');
    var notesInput = document.getElementById('notes-input');

    var taskText = taskInput.value.trim();
    var taskTime = timeInput.value;
    var taskNotes = notesInput.value.trim();

    if (taskText === '') {
        alert('Per favore, inserisci un\'attività.');
        return;
    }

    var li = document.createElement('li');

    var taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';
    taskDetails.textContent = taskText;
    li.appendChild(taskDetails);

    if (taskTime !== '') {
        var taskTimeElem = document.createElement('div');
        taskTimeElem.className = 'task-time';
        taskTimeElem.textContent = 'Orario: ' + taskTime;
        li.appendChild(taskTimeElem);
    }

    if (taskNotes !== '') {
        var taskNotesElem = document.createElement('div');
        taskNotesElem.className = 'task-notes';
        taskNotesElem.textContent = 'Note: ' + taskNotes;
        li.appendChild(taskNotesElem);
    }

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Elimina';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.parentNode.removeChild(li);
    });

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);

    // Reset dei campi di input
    taskInput.value = '';
    timeInput.value = '';
    notesInput.value = '';
}
