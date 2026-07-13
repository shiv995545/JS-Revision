const btn = document.querySelector("button")
const pr = document.querySelector(".content-container-2")

btn.addEventListener("click", () => {
    pr.classList.toggle("toggle")
    btn.textContent = "Read Less"
})