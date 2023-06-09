const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // padStart(2, "0") : string이 가져야 하는 길이를 2로 설정하고 그렇지 않다면 string의 앞쪽에 0을 추가하도록 한다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock(); // 즉시호출
setInterval(getClock, 1000); // load된 후 1초마다 호출

//test
