function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = todoInput.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            todoList.removeChild(li);
        };

        li.appendChild(removeButton);
        todoList.appendChild(li);

        todoInput.value = "";
    }
}
