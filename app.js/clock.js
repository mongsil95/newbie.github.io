const clock = document.querySelector("h2#clock");
const days = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const date = new Date();
  const monthes = String(date.getMonth() + 1).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");
  const day = date.getDay();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconsds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${date.getFullYear()}년 ${monthes}월 ${dates}일 ${
    days[day]
  }요일 
  ${hours}:${minutes}:${seconsds}`;
}

getClock();
setInterval(getClock, 1000);
