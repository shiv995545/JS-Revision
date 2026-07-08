const main = document.querySelector("main");
const btn = document.querySelector("button");
let timer = document.querySelector("#timer");
let scoree = document.querySelector("#score");
const overlay = document.querySelector("#overlay");

const box = document.createElement("div");
box.classList.add("box");

let interval;
let score = 0;
flag = false;
let time = 0;

let canClick = false;

box.addEventListener("click", () => {
  if (!canClick) return;

  canClick = false;
  score++;
  scoree.textContent = score;
});

const randomBox = () => {
  canClick = true;
  box.style.backgroundColor = randomColor();
  main.append(box);
  time += 1;
  timer.textContent = time;

  // let top = Math.floor(Math.random() * 100);
  // let left = Math.floor(Math.random() * 100);

  // box.style.top = `${top}%`;
  // box.style.left = `${left}%`;

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  let top = Math.floor(Math.random() * mainH);
  let left = Math.floor(Math.random() * mainW);

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
};

const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

function start() {
  time = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    randomBox();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    overlay.style.display = "flex";

    setTimeout(() => {
      overlay.style.display = "none";
      // Reset everything
      time = 0;
      score = 0;

      timer.textContent = 0;
      scoree.textContent = 0;

      canClick = false;

      // Remove the box from the screen
      box.remove();
    }, 3000);
  }, 6000);
}

btn.addEventListener("click", () => {
  start();
});