const btn = document.querySelector('.btn')! as HTMLButtonElement;
const input = document.querySelector('.toDoInput')! as HTMLInputElement;
const list = document.querySelector('.toDoList')!;
const form = document.querySelector('form')!;

interface Todo {
    text: string;
    completed: boolean;
}

const readTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos != null) return JSON.parse(todos);
    return [];
};

const todos: Todo[] = readTodos();

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
    saveTodos();
};

const createTodo = (todo: Todo) => {
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
