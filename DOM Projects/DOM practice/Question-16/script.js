const btn = document.querySelector("button");
const body = document.querySelector("body");

let arr = ["blue", "yellow", "red", "green", "white"];

let index = 0;

btn.onclick = () => {
  fn(index);
  if (index == arr.length - 1) {
    index = 0;
  } else {
    index++;
  }
};

function fn(index) {
  body.style.backgroundColor = arr[index];
}

