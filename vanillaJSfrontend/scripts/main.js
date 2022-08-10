'use strict';
import { $ui, $home, $private, $signUp, $login, $404 } from './components.js';

const w = window,
  d = document,
  $main = d.getElementById('main');

let url = null,
  credentials = null,
  name = null,
  $uiContent = null,
  $feedback = null,
  $signUpForm = null,
  $loginForm = null;

d.addEventListener('DOMContentLoaded', () => {
  url = window.location.hash.slice(1) || '/';
  $main.innerHTML = $ui;
  $uiContent = d.getElementById('uiContent');
  $feedback = d.getElementById('feedback');
  myRouter();
  eventListeners();
});

function myRouter() {
  switch (url) {
    case '/':
      $uiContent.innerHTML = $home;
      feedback(
        'info',
        'Welcome, this content is public, if you want access to private content please login.'
      );
      eventListeners();
      break;
    case '/private':
      $uiContent.innerHTML = $private;
      feedback('success', `¡Hello, ${name}!.`);
      eventListeners();
      break;
    case '/sign-up':
      credentials = {};
      $uiContent.innerHTML = $signUp;
      feedback('info', 'All fields are required.');
      $signUpForm = d.getElementById('signUpForm');
      eventListeners();
      break;
    case '/login':
      credentials = {};
      $uiContent.innerHTML = $login;
      feedback(
        'info',
        "All fields are required, if you don't have access credentials, please sign up."
      );
      $loginForm = d.getElementById('loginForm');
      eventListeners();
      break;
    default:
      $uiContent.innerHTML = $404;
      eventListeners();
      break;
  }
}

function eventListeners() {
  w.addEventListener('hashchange', () => {
    url = window.location.hash.slice(1);
    myRouter();
  });
  if ($signUpForm) {
    $signUpForm.name.addEventListener('input', handleInput);
    $signUpForm.email.addEventListener('input', handleInput);
    $signUpForm.password.addEventListener('input', handleInput);
    $signUpForm.confirmPassword.addEventListener('input', handleInput);
    $signUpForm.addEventListener('submit', handleSubmit);
  }
  if ($loginForm) {
    $loginForm.email.addEventListener('input', handleInput);
    $loginForm.password.addEventListener('input', handleInput);
    $loginForm.addEventListener('submit', handleSubmit);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (areFieldsValid(e.target.id)) {
    feedback('info', 'Wait please, we are processing your request ...');
  }
}

function handleInput(e) {
  const { name, value } = e.target;
  credentials = { ...credentials, [name]: value.trim() };
}

function areFieldsValid(id) {
  if (id === 'signUpForm') {
    if (!credentials.name || !credentials.name.trim()) {
      feedback('danger', 'Name is required.');
      return false;
    }
  }
  if (!credentials.email || !credentials.email.trim()) {
    feedback('danger', 'email is required.');
    return false;
  }
  if (!credentials.password || !credentials.password.trim()) {
    feedback('danger', 'Password is required.');
    return false;
  }
  if (id === 'signUpForm') {
    if (!credentials.confirmPassword || !credentials.confirmPassword.trim()) {
      feedback('danger', 'Confirm password is required.');
      return false;
    }
    if (credentials.password.trim() !== credentials.confirmPassword.trim()) {
      feedback('danger', 'Password and confirm password are not equals.');
      return false;
    }
  }
  return true;
}

function feedback(type, msg) {
  $feedback.className = `text-${type} text-center fs-4`;
  $feedback.textContent = msg;
}
