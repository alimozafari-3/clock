const deg = 6;
const hr = document.querySelector(".hour");
const mn = document.querySelector(".min");
const sc = document.querySelector(".sec");

setInterval(() => {
  let time = new Date();
  let hh = time.getHours() * 30;
  let mm = time.getMinutes() * deg;
  let ss = time.getSeconds() * deg;
  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;
}, 1000);