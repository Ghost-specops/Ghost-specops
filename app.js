document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    // Создание нового элемента списка
    const li = document.createElement('li');
    li.textContent = taskText;

    // Создание кнопки для удаления
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Добавление кнопки к задаче
    li.appendChild(deleteBtn);

    // Добавление задачи в список
    taskList.appendChild(li);
}