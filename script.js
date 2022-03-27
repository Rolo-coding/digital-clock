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

  document.querySelector(".hour-num").innerText = hour;
  document.querySelector(".min-num").innerText = min;
  document.querySelector(".sec-num").innerText = sec;
}, 1000);
