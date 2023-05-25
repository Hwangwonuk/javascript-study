const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  console.log("h1 was clicked!");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!")
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All GOOD");
}

// addEventListener를 사용하면 removeEventListener로 삭제할 수 있다.

// h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
