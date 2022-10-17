"use strict";
const btn = document.querySelector('.btn');
const input = document.querySelector('.toDoInput');
btn.addEventListener('click', () => {
    alert(input.value);
});
