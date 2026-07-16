const addTask = document.querySelector(".addTask")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const input = document.querySelector(".input")
const overlay = document.querySelector("#overlay")
const btnclose = document.querySelector("#close")
const createTaskInner = document.querySelector("#create-task-inner")
const emptyExt = document.querySelector(".empty-ext")
const emptyExt1 = document.querySelector(".empty-ext-1")
const pend_span = document.querySelector("#pend")
const comp_span = document.querySelector("#comp")
const tasks = document.querySelector(".tasks")

const overlayForm = document.querySelector("#overlay-form")
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


let task_arr = JSON.parse(localStorage.getItem("tasks")) || []
let complete_arr = JSON.parse(localStorage.getItem("completetasks")) || []


let updateIndex = null;

let count1 = JSON.parse(localStorage.getItem("count1")) || 0;
let count2 = JSON.parse(localStorage.getItem("count2")) || 0;




function createTask() {
    if (createTaskInner.textContent == "Update") {
        createTaskInner.textContent = "Create"
    }

    overlay.style.display = "none"

    createCard()

    count1++;
    pend_span.textContent = `${count1}`
    localStorage.setItem("count1", JSON.stringify(count1))

    if (task_arr.length === 0) {
        emptyPending.style.display = "flex";
        emptyExt.appendChild(emptyPending);
        return;
    }
}



function createCard() {
    emptyExt.innerHTML = ""
    task_arr.forEach((obj) => {
        emptyExt.innerHTML += `<div class="task-card">
                            <div class="content">
                                <h3>${obj.title}</h3>
                                <p>${obj.description}</p>
                        
                                <span class="category">${obj.category}</span>
                            </div>
                        
                            <div class="actions">
                                <button onclick="updateTask('${obj.id}')" class="edit">
                                    <img src="https://www.svgrepo.com/show/503019/edit.svg" alt="">
                                </button>
                        
                                <button onclick="deleteTask('${obj.id}')" class="delete">
                                    <img src="https://www.svgrepo.com/show/511788/delete-1487.svg" alt="">
                                </button>

                                <button onclick="completeTask('${obj.id}')" class="complete">
                                    <img src="https://www.svgrepo.com/show/501519/complete.svg" alt="">
                                </button>
                            </div>
                        </div>`;
    })
}


function completeCard() {
    emptyExt1.innerHTML = ""
    complete_arr.forEach((obj) => {
        emptyExt1.innerHTML += `<div class="task-card">
                            <div class="content">
                                <h3>${obj.title}</h3>
                                <p>${obj.description}</p>
                        
                                <span class="category">${obj.category}</span>
                            </div>
                        </div>`;
    })
}




if(task_arr.length > 0){
    createCard()
}

if(complete_arr.length > 0){
    completeCard()
}

pend_span.textContent = `${count1}`
comp_span.textContent = `${count2}`


addTask.addEventListener("click", () => {
    overlay.style.display = "flex"
})

btnclose.addEventListener("click", () => {
    overlay.style.display = "none"
})



overlayForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let id = crypto.randomUUID()
    let title = e.target[0].value
    let description = e.target[1].value
    
    let category = e.target[2].value


    if(title.trim() === "" || description.trim() === "" || category.trim() === ""){
        alert("Please enter the fields")
        return
    }



    let obj = {
        id,
        title,
        description,
        category
    }

    if (updateIndex !== null) {
      task_arr[updateIndex] = obj;
      updateIndex = null;
      localStorage.setItem("tasks", JSON.stringify(task_arr));
    } else {
      task_arr.push(obj);
      localStorage.setItem("tasks", JSON.stringify(task_arr));
    }
    createTask()
    overlayForm.reset();
})


const updateTask = (id) => {
  overlay.style.display = "flex";
  let task = task_arr.find((elem) => elem.id === id);
  updateIndex = task_arr.findIndex((elem) => elem.id === id);

  createTaskInner.textContent = "Update"

  form[0].value = task.title;
  form[1].value = task.description;
  form[2].value = task.category;


};


const deleteTask = (id) => {
    task_arr = task_arr.filter((elem) => elem.id !== id)
    createCard()
    localStorage.setItem("tasks", JSON.stringify(task_arr));

    count1--;
    pend_span.textContent = `${count1}`
    localStorage.setItem("count1", JSON.stringify(count1))

    if (task_arr.length === 0) {
        emptyPending.style.display = "flex";
        emptyExt.appendChild(emptyPending);
        return;
    }
}


const completeTask = (id) => {
    complete_task = task_arr.find((elem) => elem.id === id)
    task_arr = task_arr.filter((elem) => elem.id !== id)

    localStorage.setItem("tasks", JSON.stringify(task_arr));
    createCard()

    complete_arr.unshift(complete_task);
    localStorage.setItem("completetasks", JSON.stringify(complete_arr))
    completeCard()

    count2++;
    count1--;
    pend_span.textContent = `${count1}`
    comp_span.textContent = `${count2}`
    localStorage.setItem("count1", JSON.stringify(count1))
    localStorage.setItem("count2", JSON.stringify(count2))

    if (task_arr.length === 0) {
        emptyPending.style.display = "flex";
        emptyExt.appendChild(emptyPending);
        return;
    }
}


// ==========================================================


input.addEventListener("submit", (e) => {
    e.preventDefault()
    searchData = e.target[0].value
    
    searchTask()
})



function searchTask() {
    tasks.innerHTML = `<div id="searched">
                    <div class="heading">
                        <h3> Searched Tasks</h3>
                    </div>
            
                    <div class="empty-ext-searched">


                        <div class="empty-searched">
                            <h1>🐹</h1>
                            <h3>No tasks</h3>
                            <p>Tasks will appear here.</p>
                        </div>
                    </div>
                </div>`;
}