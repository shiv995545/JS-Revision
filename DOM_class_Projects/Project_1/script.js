// const btn = document.querySelector("button")

// btn.addEventListener('mouseleave', (events) => {
//     console.log(events)
// })


const form = document.querySelector("form")
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")
const url = document.querySelector("#url")
const user = document.querySelector(".users")


let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    dob: "1996-09-28",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    dob: "2000-01-12",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    dob: "1997-07-03",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    dob: "1995-12-19",
  },
];

function displayContent(){
    user.innerHTML = ""
    usersData.forEach((elem, index) => {
    if(elem.name.trim() === "" && elem.email.trim() === "")return
    user.innerHTML += `<div class="user_card">
            <div class="img_box">
                <img 
                    src="${elem.image}" 
                    alt="iamge here"
                />
            </div>
            <div class="text">
                <h3>Name : ${elem.name}</h3>
                <p>Email : ${elem.email}</p>
            </div>
            <div class="actions">
                <button id="edit">Edit</button>
                <button onclick = "deleteCard(${index})"id="delete">Delete</button>
            </div>
        </div>`
})}

displayContent()

form.addEventListener("submit", (events) => {
    events.preventDefault()                                         //form ko submit krne pr reload hone se rokta hai

    // console.log(events.target[0].value);                         //ye ek trika hai form ke inputs to collect krne ka
    // console.log(events.target[1].value);
    
    let name = inp1.value
    let email = inp2.value
    let image = url.value

    if(name.trim() === "" && email.trim() === "" && image.trim() === "")return
    
    usersData.push({
        name,
        email,
        image,
    })

    displayContent()

    form.reset()                                                    //form ko reset krdeta hai
})

function deleteCard(index){
    usersData.splice(index, 1)
    displayContent()
}