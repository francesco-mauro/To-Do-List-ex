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

    let taskTimeElem = null;
    if (taskTime !== '') {
        taskTimeElem = document.createElement('div');
        taskTimeElem.className = 'task-time';
        taskTimeElem.textContent = 'Orario: ' + taskTime;
        li.appendChild(taskTimeElem);
    }

    let taskNotesElem = null;
    if (taskNotes !== '') {
        taskNotesElem = document.createElement('div');
        taskNotesElem.className = 'task-notes';
        taskNotesElem.textContent = 'Note: ' + taskNotes;
        li.appendChild(taskNotesElem);
    }

    // Pulsante Modifica
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Modifica';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function() {
        editTask(li, taskDetails, taskTimeElem, taskNotesElem);
    });
    li.appendChild(editBtn);

    // Pulsante Elimina
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Elimina';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.parentNode.removeChild(li);
    });
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';
    timeInput.value = '';
    notesInput.value = '';
}

function editTask(li, taskDetails, taskTimeElem, taskNotesElem) {
    let taskInput = document.getElementById('task-input');
    let timeInput = document.getElementById('time-input');
    let notesInput = document.getElementById('notes-input');

    taskInput.value = taskDetails.textContent;
    timeInput.value = taskTimeElem ? taskTimeElem.textContent.replace('Orario: ', '') : '';
    notesInput.value = taskNotesElem ? taskNotesElem.textContent.replace('Note: ', '') : '';

    li.parentNode.removeChild(li);

    let addTaskBtn = document.getElementById('add-task-btn');
    addTaskBtn.textContent = 'Aggiorna';

    addTaskBtn.removeEventListener('click', addTask);
    addTaskBtn.addEventListener('click', updateTask);

    function updateTask() {
        let updatedTaskText = taskInput.value.trim();
        let updatedTaskTime = timeInput.value;
        let updatedTaskNotes = notesInput.value.trim();

        if (updatedTaskText === '') {
            alert('Per favore, inserisci un\'attività.');
            return;
        }

        
        taskDetails.textContent = updatedTaskText;

        if (updatedTaskTime !== '') {
            if (taskTimeElem) {
                taskTimeElem.textContent = 'Orario: ' + updatedTaskTime;
            } else {
                taskTimeElem = document.createElement('div');
                taskTimeElem.className = 'task-time';
                taskTimeElem.textContent = 'Orario: ' + updatedTaskTime;
                li.insertBefore(taskTimeElem, editBtn);
            }
        } else if (taskTimeElem) {
            li.removeChild(taskTimeElem);
            taskTimeElem = null;
        }

        if (updatedTaskNotes !== '') {
            if (taskNotesElem) {
                taskNotesElem.textContent = 'Note: ' + updatedTaskNotes;
            } else {
                taskNotesElem = document.createElement('div');
                taskNotesElem.className = 'task-notes';
                taskNotesElem.textContent = 'Note: ' + updatedTaskNotes;
                li.insertBefore(taskNotesElem, editBtn);
            }
        } else if (taskNotesElem) {
            li.removeChild(taskNotesElem);
            taskNotesElem = null;
        }

        
        document.getElementById('task-list').appendChild(li);

       
        addTaskBtn.textContent = 'Aggiungi';
        addTaskBtn.removeEventListener('click', updateTask);
        addTaskBtn.addEventListener('click', addTask);

       
        taskInput.value = '';
        timeInput.value = '';
        notesInput.value = '';
    }
}
