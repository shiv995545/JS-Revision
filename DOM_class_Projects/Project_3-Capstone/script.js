const createBtn = document.querySelector("#create")
const formDiv = document.querySelector(".form")
const closeBtn = document.querySelector("#close")
const form = document.querySelector("form")
let productDiv = document.querySelector(".products")

let productArr = []


let updateIndex  = null;


let ui = () => {
    productDiv.innerHTML = ""
    productArr.forEach((elem) => {
        productDiv.innerHTML += `<div class="product-card">
                <div class="img">
                    <img 
                    src="${elem.image}" 
                    alt="">
                </div>

                <div class="text">
                    <h3>Name: ${elem.productName}</h3>
                    <p>Description: ${elem.description}</p>
                    <p>Price: ${elem.value}</p>
                </div>

                <div class="btns">
                    <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
                    <button onclick="deleteProduct('${elem.productName}')" id="delete">Delete</button>
                </div>
            </div>`
    }
)}


createBtn.addEventListener("click", () => { 
    formDiv.style.display = "flex"
})


closeBtn.addEventListener("click", () => {
    formDiv.style.display = "none"
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let productName = event.target[0].value
    let description = event.target[1].value
    let value = event.target[2].value
    let image = event.target[3].value

    if(productName.trim() === "" || description.trim() === "" || value.trim() === "" || image.trim() === ""){
        alert("Please fill all the details")
        return
    }

    let obj = {
        productName,
        description,
        value,
        image
    }

    if(updateIndex !== null){
        productArr[updateIndex] = obj
        updateIndex = null
    }else{
        productArr.push(obj)
    }



    ui()

    form.reset()
    formDiv.style.display = "none"
})

const updateProduct = (name) => {
    formDiv.style.display = "flex"
    let product = productArr.find((elem) => elem.productName === name)
    updateIndex = productArr.findIndex((elem) => elem.productName === name)

    form[0].value = product.productName
    form[1].value = product.description
    form[2].value = product.value
    form[3].value = product.image

}

const deleteProduct = (name) => {
    let updateIndex2 = productArr.findIndex((elem) => elem.productName === name)
    productArr.splice(updateIndex2, 1)
    ui()

}