//Question 1
const h1 = (document.getElementById("title").textContent =
  "Welcome to Javascript DOM");









// Question 2
const body = document.body;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (body.style.backgroundColor === "pink") {
    body.style.backgroundColor = "grey";
  } else {
    body.style.backgroundColor = "pink";
  }
});








// Question 3
const inp = document.querySelector("#username");
const btn1 = document.querySelector("#btn1");
const list = document.querySelector("#myList");

btn1.addEventListener("click", () => {
  if (inp.value.trim() === "") return;
  else {
    const li = document.createElement("li");
    li.textContent = inp.value;
    list.appendChild(li);
    inp.value = "";
  }
});






//Question 4
const p = document.querySelector("#message");
const btn2 = document.querySelector("#btn2");
let hidden = false
btn2.addEventListener("click", () => {
  if (hidden) {
    p.style.display = ""
    hidden = false
  } else {
    p.style.display = "none"
    hidden = true
  }
})




//Question 5
const btn3 = document.querySelector("#btn3")

btn3.addEventListener("click", () => {
  btn3.parentElement.remove()
})