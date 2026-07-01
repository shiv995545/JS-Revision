//=============================OBJECTS===============================

// Definition = A standalone, dynamic data structure used to store collections of related data and complex entities as key-value pairs
// --------it stores named data



// 1. Creating Objects
let user = {
    "fname lname" : "Shivam Gupta",
    age : 24,
    5 : 47
};


// 2. Accessing Properties

// a. Dot Notation
// console.log(user.name);

// b. Bracket Notation
// console.log(user["age"])


// ======== When to use
// let key = "age"
// console.log(user.key)                                        //Use dot notation when the property name is a valid JavaScript identifier and you know it at the time you're writing the code.
// console.log(user[key])                                       //When the Property Name is Stored in a Variable or key having special char, spaces, or having numbers



// 3. CRUD - delete, update

// ADD
user.city = "Delhi"
user["country"] = "India"


//Update
user.city = "Banaras"
user["city"] = "Bhopal"


//Delete
delete user.country



//4. methods - Functions inside an object

let calculator = {
    name : "Shivam",

    add : function(a,b){
        return a + b;
    },
    subtract : (a,b) => {
        return a - b;
    },
    multiply(a,b) { return a * b },
    divide(a,b) { return a / b },
};

// console.log(calculator.add(3,2));
// console.log(calculator.subtract(3,2));
// console.log(calculator.multiply(3,2));
// console.log(calculator.divide(3,2));



// 5. Nested Objects

let user1 = {
    name : "Avdesh",
    age : 32,
    address : {
        city : "New Delhi",
        state : "Delhi",
        country : "India"
    },
    height : "3feet"
};
// console.log(user1.name, user1.address.state)
// console.log(user1["address"].state)




// 6. Object Destructuring ===== 


// Extract properties into variables, cleanly---------

// let {name, age,height} = user1;
// console.log(name, age, height)


// Nested Destructuring-----------------
// let {
//     name,
//     age,
//     address: { city, state, country },
//     height
// } = user1

// console.log(name, age, height, state)



// Default Values --------------------
// let {
//     name = "Guest", age
// } = user1
// console.log(name, age)





// 7. Spread with Objects ====================================

let person = {
    name : "Pooja",
    age : 50,
    color : "black"
}
//copy
let copy = {...person};                     //shallow copy

//combine
let extend = {city: "Bihar", country : "Africa"}
let combine = {...person, ...extend}

//override
let updated = {...person, age : 80}





// 8. Methods in Object --------------------------------

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// Object.entries(person).forEach(([key, value]) => {
//     console.log(key + value)                                      //accessing key value pairs using forEach(iteration)
// })







//++++++++++++++++++++shallow and deep copy in objects+++++++++++++++++++


//we can use spread and assign to make shallow copy
let formed = Object.assign({}, user1)             //shallow copy

// formed.name = "Shivam"                       
// formed.address.city = "Mumbai"

// console.log(user1)                           //original
// console.log(formed)                          //copied



let formed1 = structuredClone(user1)                //deep copy

formed1.name = "Shivam"
formed1.address.city = "Mumbai"

// console.log(formed1)                     //copied
// console.log(user1)                      //original







//==========Object.freeze & Object.seal=====================

// Freeze ------- Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
let animal = {
    name : "Dog",
    age : 20,
    breed : "Pet"
}
Object.freeze(animal)

animal.name = "Lion"
animal.mood = "Happy"
// console.log(animal)



// Seal ------ Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
let animal2 = {
    name : "Dog",
    age : 20,
    breed : "Pet"
}
Object.seal(animal2)

animal2.name = "Lion"
animal2.mood = "Happy"
// console.log(animal2)






// 9. ========================LOOPS THROUGH OBJECTS==================


let color = {
    name : "Pink",
    kind : "Pastel",
    count : 10
}

for(let key in color){
    console.log(key, ":", color[key]);
}

Object.keys(color).forEach(key => {
    console.log(key, ":",  color[key]);
})


Object.entries(person).forEach(([key, value]) => {
    console.log(key + value)                                      //accessing key value pairs using forEach(iteration)
})


for(let [key, value] of Object.entries(color)) {
    console.log(key, ":", value)
}

