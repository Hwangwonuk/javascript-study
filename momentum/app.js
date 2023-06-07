const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막는다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
