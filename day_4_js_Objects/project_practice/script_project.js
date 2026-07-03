/*
Step 1. Understand the problem
Step 2. Identify the Data and select the DataStructure
Step 3. Think about operations 
Step 4. Make Functions of each operations
Step 5. Test after each Step
*/



// Project 1. ======== Student Grade Tracker =============

//Show the grades(a,b,c)
//average nikal do

//Grade system
// 90+ = O
// 80+ = A
// 70+ = B
// 60+ = C
// 60- = F

/*
let students = [
    {
        name : "Avdesh",
        marks : [60,70,90]
    },
    {
        name : "Shivam",
        marks : [30,50,80]
    }
]


//getGrade
function getGrade(avg){
    if (avg >= 90) return 'O';
    if (avg >= 80) return 'A';
    if (avg >= 70) return 'B';
    if (avg >= 60) return 'C';
    if (avg < 60) return 'F';
}

//getAverage
function getAverage(marks){
    // let result = 0
    // for(let i of marks){
    //     result +=  i
    // }
    // return result / marks.length
    
    return marks.reduce((acc, value) => {
        return acc + value
    },0)/marks.length;
}

students.forEach(s => { 
    avg = getAverage(s.marks);
    console.log(`${s.name} : Average = ${avg.toFixed(2)}, Grade : ${getGrade(avg)}`)
})
*/







// Project 2. ======== Shopping Cart Logic =====================

//addItem
//removeItem
//resuce_quantity
//getTotal
//showCart

// Item = name, price, category, qty

// || - dono mai se koi ek
// && - dono hone chahaiye
// != - nhi hona (ulta)



let cart = []

// {
//     name : "Apple",
//     price : 40,
//     qty : 3
// }
const button = document.querySelector("button")


function addItem(name, price, qty, category){
    let existing = cart.find(item => item.name === name && item.category === category)
    if(existing){
        existing.qty += qty
    }else{
        cart.push({name, price, qty, category});
    }
}

function removeItem(name){
    cart = cart.filter(item => item.name !== name);
}

function getTotal(){
    return total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function showCart(){
    cart.forEach(item =>{
        console.log(`${item.name} × ${item.qty} = ₹${item.qty * item.price}`)
    });
    console.log(`Total payable amount is : ${getTotal()}`);
}

function reduce_quantity(name, x){
    let existing = cart.find(item => item.name === name)
    if(existing){
        cart.forEach(item =>{
            if(x > item.qty){
                removeItem(name);
            }
            if(item.name === name){
                item.qty -= x;
            }
        });
    }
}




addItem("Apple", 50, 3, "fruit")
addItem("Apple", 50, 3, "fruit")
addItem("Nike", 300, 2, "Garments")
reduce_quantity("Apple", 2)

button.addEventListener("click", () => {
    showCart()
});