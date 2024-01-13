function fetchAndDisplayTodos() {
    axios.get("https://api.vschool.io/jonathoncali/todo")
        .then(response => {
            const todos = response.data;
            const listElement = document.getElementById('todo-list');
            listElement.innerHTML = ''; // Clear existing todos
            todos.forEach(todo => {
                const todoItem = document.createElement('div');

                // Checkbox for completed status
                todoItem.innerHTML = `
                    <input type="checkbox" id="todo-${todo._id}" ${todo.completed ? 'checked' : ''} />
                    <label for="todo-${todo._id}" style="${todo.completed ? 'text-decoration: line-through;' : ''}">${todo.title}</label>
                    ${todo.imgUrl ? `<img src="${todo.imgUrl}" alt="${todo.title}" style="max-width: 200px;" />` : ''}
                    <p>${todo.description || ''}</p>
                    <button onclick="deleteTodo('${todo._id}')">Delete</button>
                `;

                // Add event listener for checkbox
                const checkbox = todoItem.querySelector(`#todo-${todo._id}`);
                checkbox.addEventListener('change', function() {
                    axios.put(`https://api.vschool.io/jonathoncali/todo/${todo._id}`, { completed: this.checked })
                        .then(response => {
                            console.log(response.data);
                            fetchAndDisplayTodos(); // Refresh the list
                        })
                        .catch(error => console.error(error));
                });

                listElement.appendChild(todoItem);
            });
        })
        .catch(error => console.error(error));
}

// Function to handle form submission
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodo = {
        title: this.title.value,
        description: this.description.value,
        price: parseFloat(this.price.value),
        imgUrl: this.imgUrl.value
    };

    axios.post("https://api.vschool.io/jonathoncali/todo", newTodo)
        .then(response => {
            console.log(response.data);
            fetchAndDisplayTodos(); // Refresh the list
        })
        .catch(error => console.error(error));
});

// Function to delete a todo
function deleteTodo(todoId) {
    axios.delete(`https://api.vschool.io/jonathoncali/todo/${todoId}`)
        .then(response => {
            console.log(response.data);
            fetchAndDisplayTodos(); // Refresh the list
        })
        .catch(error => console.error(error));
}

// Call this function when the page loads
fetchAndDisplayTodos();