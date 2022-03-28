let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

icons.onclick = () => {
  section.classList.toggle("dark");
};

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let d = hour > 12 ? "PM" : "AM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;

  // adding 0 to all value that less than 10
  sec = String(sec).padStart(2, "0");
  min = String(min).padStart(2, "0");
  hour = String(hour).padStart(2, "0");

  document.querySelector(".hour-num").innerText = hour;
  document.querySelector(".min-num").innerText = min;
  document.querySelector(".sec-num").innerText = sec;
  document.querySelector(".am-pm").innerText = d;
}, 1000);
