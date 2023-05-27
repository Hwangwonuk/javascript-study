const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

// addEventListener를 사용하면 removeEventListener로 삭제할 수 있다.
h1.addEventListener("click", handleTitleClick);

