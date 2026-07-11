const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");
let productDiv = document.querySelector(".products");

let productArr = JSON.parse(localStorage.getItem("products")) || [];

let updateIndex = null;

let ui = () => {
  productDiv.innerHTML = "";
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
            </div>`;
  });
};

ui();

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let value = event.target[2].value;
  let image = event.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    value.trim() === "" ||
    image.trim() === ""
  ) {
    alert("Please fill all the details");
    return;
  }

  let obj = {
    productName,
    description,
    value,
    image,
  };

  if (updateIndex !== null) {
    productArr[updateIndex] = obj;
    updateIndex = null;
    localStorage.setItem("products", JSON.stringify(productArr));
  } else {
    productArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productArr));
  }

  ui();

  form.reset();
  formDiv.style.display = "none";
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productArr.find((elem) => elem.productName === name);
  updateIndex = productArr.findIndex((elem) => elem.productName === name);

  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.value;
  form[3].value = product.image;
};

const deleteProduct = (name) => {
  let updateIndex2 = productArr.findIndex((elem) => elem.productName === name);
  productArr.splice(updateIndex2, 1);
  localStorage.setItem("products", JSON.stringify(productArr));
  ui();
};

//Local storage is the permanent storage of browser

//Local storage runs on a set of rules:
//  1. Every data it takes only in string
//  2. Accepting values as a key : value pairs

// localStorage.setItem('name', 'Shivam Gupta')
// let str = localStorage.getItem('name')
// console.log(str);

// let friends = [
//     {
//         name : "Shivam Gupta",
//         age : 23,
//         gender : "male"
//     },
//     {
//         name : "Itika Vats",
//         age : 22,
//         gender : "female"
//     },
//     {
//         name : "Benzo",
//         age : 36,
//         gender : "male"
//     }
// ]

// localStorage.setItem("fam-people", JSON.stringify(friends))
// let people = localStorage.getItem("fam-people")
// console.log(JSON.parse(people));

// // localStorage.removeItem('fam-people')
