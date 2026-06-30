//=============================OBJECTS===============================

// Definition = A standalone, dynamic data structure used to store collections of related data and complex entities as key-value pairs
// -------it stores named data



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




// 6. Object Destructured ===== 


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





//Methods in Object --------------------------------

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

