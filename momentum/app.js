const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
}

// addEventListener를 사용하면 removeEventListener로 삭제할 수 있다.
h1.addEventListener("click", handleTitleClick);

