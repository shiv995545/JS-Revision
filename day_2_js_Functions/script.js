// ---------FUNCTIONS----------//

/*
1. Reusable
2. Acessible
3. Flexible
4. Performance
*/


function calculateArea(length, breadth) {
    return length * breadth;                        //function declaration
}

// console.log(calculateArea(3, 6))            //function calling
// console.log(calculateArea(3, 8))
// console.log(calculateArea(3, 3))


//Normal Function---------------

function a(){
    console.log("Hii guys A")
}


//Function Expression------------

const b = function(name){
    console.log("Hii guys B",name)
};


//Anonymous Function-------------

// setTimeout(function(){
//     console.log("Hii");
// }, 5000);


// Arrow Function-----------------

// const e = () => {
//     console.log("Hii guys B",name)
// };

// let f = () => console.log("Hello");

// let g = x => console.log("Hello",x);

// let h = (a, b) => console.log(a,b) 

// let i = (a, b) => {
//     let sum = a + b;
//     return sum;
// }


//IIFE------Immediately Invoked Function Operation--------

// (function () {
//     console.log("I run immediately!");
// })();


//Scope Anylasis------------
// const j = 10;

// function z(){
//     if(true){
//         var k = 20
//         let l = 30
//     }
//     console.log(l)
//     console.log(j)
//     console.log(k)
// }

// console.log(k)
// console.log(l)



//.   Default Function-------------

function greet(name = "Guest"){
    console.log("Hello, ", name);
}

let m = (name = "Guest") => {
    console.log("Hello, ", name);
};



// Rest Parameters-----------------

function sum(...num){
    let total = 0;
    //  num = [1,2,3,4] 
    console.log(num)
    for(let n of num){
        total = total + n;
    }
    return total;
}

// console.log(sum(1,2,3,4))
// console.log(sum(10,20,30,40,50,60))
// console.log(sum(10, "a", false))

function add(a, b, c){
    return a+b + c;
}

// console.log(add(5))
// console.log(add(1,2,3,4,5,6))



// Fucntions as First Class Citizens------------------------

// 1. Store functions in variables
// 2. Pass functions as arguments to other funstion
// 3. Return Function from other function


function Avdesh(bhadwa){
        console.log("Hello My name is ",bhadwa)
        return Shivam("Shivam")
}

function Shivam(name){
    console.log("My name is", name)
}

// console.log(Avdesh("avdesh"))



// CallBack Functions-----------------------

function who(name, cb){
    console.log("Website logged in: ", name);
    cb(name)                                 //api
    console.log("Watch movie")
}

function welcome(name){
    console.log("Welcome, ", name);
    setTimeout(()=>{
        console.log("Image...")             //api response
    },20000);
}

// console.log(who("Aman", welcome));



//Higher Order Functions----------

/* A higher-order function (HOF) is a function that either 
takes one or more functions as arguments or returns a function as its result.*/




//Pure & Impure Funcitons-------------

/* Pure - 
 1. Deterministic: It always returns the exact same result if you pass the exact same arguments.
 2. No Side Effects: It does not read, write, or modify anything outside its local block. It must not alter its own arguments if they are references (like arrays or objects). */


function jodo(a, b){
    return a+b;
};
// console.log(jodo(2,3));     // 5
// console.log(jodo(5,6));     // 11



/* Impure - 
1. External State Dependency: It relies on variables, files, or systems outside its scope.
2. Side Effects: It modifies global state, changes the values of its inputs, alters the DOM, logs to the console, or communicates over a network.
3. Non-deterministic Features: It utilizes functions that output random or time-dependent data.*/

let total = 0;              //global variable
function joddo(...n){
    // n = [1,2,3,4,5,6]
    for(let num of n){
        total += num;
    }    
    return total;
}
// console.log(joddo(1,2,3))           // 6
// console.log(joddo(4,5,6))           // 15