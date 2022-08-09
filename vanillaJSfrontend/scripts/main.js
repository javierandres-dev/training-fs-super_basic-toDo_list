'use strict';
import { $ui, $home, $private, $signUp, $login, $404 } from './components.js';

const w = window,
  d = document,
  $main = d.getElementById('main');

let url = null,
  formData = null,
  $uiContent = null,
  $loginForm = null;

d.addEventListener('DOMContentLoaded', () => {
  url = window.location.hash.slice(1) || '/';
  $main.innerHTML = $ui;
  $uiContent = d.getElementById('uiContent');
  myRouter();
  eventListeners();
});

function myRouter() {
  switch (url) {
    case '/':
      $uiContent.innerHTML = $home;
      break;
    case '/private':
      $uiContent.innerHTML = $private;
      break;
    case '/sign-up':
      $uiContent.innerHTML = $signUp;
      break;
    case '/login':
      $uiContent.innerHTML = $login;
      $loginForm = d.getElementById('loginForm');
      formData = new FormData($loginForm);
      break;
    default:
      $uiContent.innerHTML = $404;
      break;
  }
}

function eventListeners() {
  w.addEventListener('hashchange', () => {
    url = window.location.hash.slice(1);
    myRouter();
  });
  $loginForm.addEventListener('submit', handleLogin);
}

function handleLogin(e) {
  e.preventDefault();
  console.log('formData :>> ', formData);
  for (const [key, value] of formData) {
    console.log(`${key}: ${value}\n`);
  }
  console.log('handle login ...');
}
