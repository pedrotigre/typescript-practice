const btn = document.querySelector('.btn')! as HTMLButtonElement;
const input = document.querySelector('.toDoInput')! as HTMLInputElement;

btn.addEventListener('click', () => {
    alert(input.value);
});
