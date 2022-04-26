/* VARIABLES */
const d = document,
  apiUrl = 'http://localhost:4000/api/v1/todos',
  $main = d.querySelector('main'),
  $input = d.createElement('input'),
  $btn = d.createElement('button'),
  $p = d.createElement('p'),
  $ol = d.createElement('ol');

let $infoBtns = null,
  $delBtns = null;

let todos = null;

/* EVENTS */
d.addEventListener('DOMContentLoaded', () => {
  $input.setAttribute('type', 'text');
  $main.appendChild($input);
  $btn.textContent = 'Create';
  $main.appendChild($btn);
  readTodos();
  eventListeners();
});

const eventListeners = () => {
  $btn.addEventListener('click', createTodo);
};

const watchChecks = (checks) => {
  checks.forEach((check) => {
    const id = check.parentNode.id;
    const task = check.parentNode.dataset.task;
    const done = check.checked;
    check.addEventListener('click', () => updateTodo(id, task, done));
  });
};

const watchInfoBtns = (btns) => {
  btns.forEach((btn) => {
    const id = btn.parentNode.id;
    btn.addEventListener('click', () => readTodo(id));
  });
};

const watchDelBtns = (btns) => {
  btns.forEach((btn) => {
    const id = btn.parentNode.id;
    btn.addEventListener('click', () => deleteTodo(id));
  });
};

/* FUNCTIONS */
const createTodo = () => {
  const data = {
    name: $input.value,
    completed: false,
  };

  if (!data.name) return alert('to-do required!');

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        readTodos();
        $input.value = null;
      }
    });
};

const readTodos = () => {
  $p.textContent = '';
  $ol.innerHTML = '';
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      todos = data.success;
      if (todos.length === 0) {
        $p.textContent = 'Without to-dos';
        $main.appendChild($p);
      } else {
        todos.forEach((item) => {
          const $delBtn = d.createElement('button'),
            $infoBtn = d.createElement('button'),
            $checkbox = d.createElement('input'),
            $li = d.createElement('li');
          $infoBtn.classList.add('btn-info');
          $infoBtn.textContent = 'More info';
          $delBtn.classList.add('btn-del');
          $delBtn.textContent = 'Delete';
          $checkbox.setAttribute('type', 'checkbox');
          $checkbox.checked = item.completed;
          $li.setAttribute('id', item._id);
          $li.dataset.task = item.name;
          $li.dataset.done = item.completed;
          $li.appendChild(d.createTextNode(item.name));
          $li.appendChild($checkbox);
          $li.appendChild($infoBtn);
          $li.appendChild($delBtn);
          $ol.appendChild($li);
        });
        $main.appendChild($ol);
        $infoBtns = d.querySelectorAll('.btn-info');
        watchInfoBtns($infoBtns);
        $delBtns = d.querySelectorAll('.btn-del');
        watchDelBtns($delBtns);
        $checks = d.querySelectorAll('input[type=checkbox]');
        watchChecks($checks);
      }
    });
};

const readTodo = (id) => {
  if (!id) return alert('id required!');
  fetch(`${apiUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const status = data.success.completed ? ', is ' : ', is not ';
      $p.textContent = 'The task: ' + data.success.name + status + 'completed';
      $main.appendChild($p);
    })
    .catch((err) => console.error('err:', err));
};

const updateTodo = (id, task, done) => {
  if (!id) return alert('id required!');
  const data = {
    name: task,
    completed: !done,
  };
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => readTodos())
    .catch((err) => console.error('err:', err));
};

const deleteTodo = (id) => {
  if (!id) return alert('id required!');
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => readTodos())
    .catch((err) => console.error('err:', err));
};
