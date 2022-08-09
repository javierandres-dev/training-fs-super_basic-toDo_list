export const $ui = `
<nav id="uiNav" class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/private">Private</a>
        </li>
      </ul>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<section id="uiContent" class="container text-center"></section>
<footer class="text-center">
  <p><small>Copyright &copy; 2022</small></p>
</footer>
`;

export const $home = `
<h1>Home</h1>
`;
export const $private = `
<h1>Private</h1>
`;
export const $signUp = `
<h1>Sign Up</h1>
`;
export const $login = `
<h1>Login</h1>
<p>Enter your access credentials.</p>
<form id="loginForm" class="col-sm-6 mx-auto my-4">
  <input type="email" name="email" class="form-control mb-3" placeholder="Email address">
  <input type="password" name="password" class="form-control mb-3" placeholder="Password">
  <button type="submit" class="btn btn-primary btn-lg">Enter</button>
</form>
<p>If you don't have access credentials, please sign up.</p>
<a href="#/sign-up" class="btn btn-secondary mb-5">Sign Up</a>
`;
export const $404 = `
<h1>404</h1>
<h2>Page not found.</h2>
`;
//<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Private</a>
