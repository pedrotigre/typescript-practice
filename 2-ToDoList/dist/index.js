"use strict";
const btn = document.querySelector('.btn');
const input = document.querySelector('.toDoInput');
const list = document.querySelector('.toDoList');
const form = document.querySelector('form');
const readTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos != null)
        return JSON.parse(todos);
    return [];
};
const todos = readTodos();
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
    saveTodos();
};
const createTodo = (todo) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    listItem.append(todo.text);
    listItem.append(checkbox);
    list.append(listItem);
};
todos.forEach(createTodo);
form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', () => {
//     alert(input.value);
// });
