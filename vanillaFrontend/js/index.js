/* VARIABLES */
const d = document,
  $main = d.querySelector('main'),
  $btn = d.createElement('button'),
  $p = d.createElement('p'),
  $ol = d.createElement('ol');

let todos = null;

/* EVENTS */
d.addEventListener('DOMContentLoaded', () => {
  $btn.textContent = 'Create';
  $main.appendChild($btn);
  getTodos();
  eventListeners();
});

const eventListeners = () => {
  $btn.addEventListener('click', createTodo);
};

/* FUNCTIONS */
const createTodo = () => {
  fetch('http://localhost:4000/api/v1/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'read',
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        getTodos();
      }
    });
};

const getTodos = () => {
  $ol.innerHTML = '';
  fetch('http://localhost:4000/api/v1/todos')
    .then((res) => res.json())
    .then((data) => {
      todos = data.success;
      if (todos.length === 0) {
        $p.textContent = 'Without to-dos';
        $main.appendChild($p);
      } else {
        todos.forEach((item) => {
          const $li = d.createElement('li');
          $li.appendChild(d.createTextNode(item.name));
          $ol.appendChild($li);
        });
        $main.appendChild($ol);
      }
    });
};
