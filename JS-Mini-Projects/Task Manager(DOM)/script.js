const addTask = document.querySelector(".addTask")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const input = document.querySelector(".input")
const overlay = document.querySelector("#overlay")
const btnclose = document.querySelector("#close")
const createTaskInner = document.querySelector("#create-task-inner")
const emptyExt = document.querySelector(".empty-ext")
const form = document.querySelector("form")
const emptyPending = document.querySelector(".empty-pending");



addTask.onclick = () => {
    addTask.classList.replace("addTask","btnClick")

    setTimeout(() => {
        addTask.classList.replace("btnClick","addTask")
    }, 100);
}

btn1.onclick = () => {
    btn1.classList.replace("btn1","btnChange")

    setTimeout(() => {
        btn1.classList.replace("btnChange","btn1")
    }, 20);
}

btn2.onclick = () => {
    btn2.classList.replace("btn2","btnChange")

    setTimeout(() => {
        btn2.classList.replace("btnChange","btn2")
    }, 20);
}

input.addEventListener("mouseenter", () => {
    input.classList.add("inputExtend");
});

input.addEventListener("mouseleave", () => {
    input.classList.remove("inputExtend");
});

//====================================================


function createTask(e) {
    e.preventDefault()
    emptyExt.style.display = "none"
    overlay.style.display = "none"
    emptyPending.remove()
    createCard()
}

function createCard() {
    pass
    //Dom element bnao div
    //class add kro
    //empty-ext mai appendChild krdo
}




addTask.addEventListener("click", () => {
    overlay.style.display = "flex"
})

btnclose.addEventListener("click", () => {
    overlay.style.display = "none"
})



form.addEventListener("submit", (e) => {
    createTask(e)
})




