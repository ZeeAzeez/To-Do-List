document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.tasks-container-header');
    const input = document.getElementById('task');
    const tasksBody = document.querySelector('.tasks-body');
    const clearButton = document.createElement('button');
    
    clearButton.textContent = 'Clear All';
    clearButton.className = 'task-form-btn clear-btn';
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    tasksBody.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('task-unit-delete')) {
            removeTask(target.parentElement);
            alert('Deleting..')
        }
    });

    clearButton.addEventListener('click', function () {
        const tasks = document.querySelectorAll('.task-unit');
        tasks.forEach(task => removeTask(task));
        alert('Clearing all..')
    });

    function addTask(taskText) {
        const taskUnit = document.createElement('article');
        taskUnit.className = 'task-unit';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-unit-checkbox';

        const taskItem = document.createElement('p');
        taskItem.className = 'task-unit-item';
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'task-unit-delete';
        deleteButton.textContent = 'x';

        taskUnit.appendChild(checkbox);
        taskUnit.appendChild(taskItem);
        taskUnit.appendChild(deleteButton);
        tasksBody.appendChild(taskUnit);

        tasksBody.appendChild(clearButton);
    }

    function removeTask(taskElement) {
        tasksBody.removeChild(taskElement);
        if (tasksBody.childElementCount === 0) {
            tasksBody.removeChild(clearButton);
        }
    }
});
