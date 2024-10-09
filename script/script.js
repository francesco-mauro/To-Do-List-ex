document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let timeInput = document.getElementById('time-input');
    let notesInput = document.getElementById('notes-input');

    let taskText = taskInput.value.trim();
    let taskTime = timeInput.value;
    let taskNotes = notesInput.value.trim();

    if (taskText === '') {
        alert('Per favore, inserisci un\'attività.');
        return;

    }

    let li = document.createElement('li');

    let taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';
    taskDetails.textContent = taskText;
    li.appendChild(taskDetails);

    if (taskTime !== '') {
        let taskTimeElem = document.createElement('div');
        taskTimeElem.className = 'task-time';
        taskTimeElem.textContent = 'Orario: ' + taskTime;
        li.appendChild(taskTimeElem);
    }

    if (taskNotes !== '') {
        let taskNotesElem = document.createElement('div');
        taskNotesElem.className = 'task-notes';
        taskNotesElem.textContent = 'Note: ' + taskNotes;
        li.appendChild(taskNotesElem);
    }

    let deleteBtn = document.createElement('button');
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
