"use strict";
const btn = document.querySelector('.btn');
const input = document.querySelector('.toDoInput');
const list = document.querySelector('.toDoList');
const form = document.querySelector('form');
const handleSubmit = (e) => {
    e.preventDefault();
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listItem.append(input.value);
    listItem.append(checkbox);
    list.append(listItem);
    input.value = '';
};
form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', () => {
//     alert(input.value);
// });
