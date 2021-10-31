const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");
const greeting = document.querySelector("#greeting");
const greetingText = document.querySelector("#greeting h1");
const logoutBtn = document.querySelector("#greeting button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}
function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greetingText.innerText = `Hello ${username}`;
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUserName);
}

function handleLogoutBtn() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
}

greeting.addEventListener("click", handleLogoutBtn);
