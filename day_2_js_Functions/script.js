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


//Normal Function

function a(){
    console.log("Hii guys A")
}


//Function Expression

const b = function(name){
    console.log("Hii guys B",name)
};


//Anonymous Function

// setTimeout(function(){
//     console.log("Hii");
// }, 5000);


// Arrow Function

const e = () => {
    console.log("Hii guys B",name)
};

let f = () => console.log("Hello");

let g = x => console.log("Hello",x);

let h = (a, b) => console.log(a,b) 

let i = (a, b) => {
    let sum = a + b;
    return sum;
}


//IIFE------Immediately Invoked Function Operation

// (function () {
//     console.log("I run immediately!");
// })();


const j = 10;

function z(){
    if(true){
        var k = 20
        let l = 30
    }
    console.log(l)
    console.log(j)
    console.log(k)
}

console.log(k)
console.log(l)




