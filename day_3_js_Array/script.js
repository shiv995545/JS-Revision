//--------Array---------
// An array is an oredred list of values. In which we can store collections(integer, string, boolean etc...).

//----------Creating--------

let fruits = ["Apple", "Banana", "Mango", 1,2,3, null, true]
let num = [3,5,2,6,7,4,9,8,1]
let num1 = [33,55,22,600,79,47,9,8,100000]
// console.log(fruits)

let construct = Array("a" , "b")            //using array constructor
// console.log(construct)

let empty =[]



//---------Array Accessing Elements-----------

// console.log(fruits[1])
// console.log(fruits[7])
// console.log(fruits[8])
// console.log(fruits[-1])                                  //not defined and not applicable in js
// console.log(fruits[fruits.length-1])                    //last element access
// console.log(fruits.at(-4))                                  //we can access using negetive indexing

// console.log(fruits)
// fruits.length = 5
// console.log(fruits)


// ---------Mutating methods on array---------
fruits.push("Shivam")
let b = fruits.push("Avdesh")                      //push returns the updated array's length
let m = fruits.pop()                              //removes the last value and return the same value

let z = fruits.unshift("first")                              //unshift add value in very beginning
let c = fruits.shift()                                      //removes the very beginning elemnt and return the value


fruits.splice(3, 2, 99, [1, "a"])                 //splice(index, dlt elments, add multiple elmts)



// let num = [3,5,2,6,7,4,9,8,1]
// let num1 = [33,55,22,600,79,47,9,8,100000]

num.sort()                                      //wrong hai use hi nhi krna hai
num1.sort((a,b) => a - b)           //ascending
num1.sort((a,b) => b - a)                  //descending



//-------------  Non- mutating methods on array  ------------

// num = [1,2,3,4,5,6,7,8,9]

// let x = num.slice(undefined, 6)
// let x = num.concat([10,20,30])
// let x = num.includes(5)
// let x = num.indexOf(99)                      //-1. (not found)
// let x = num.join("-")                               //returns string










//-------------------Iteration Methods--------------(powerful ones)

/* 

1. forEach() –  Executes a function once for each array element without returning a new array.
2. map()    –   Creates and returns a new array by transforming each element of the original array.
3. filter() –   Creates and returns a new array containing only the elements that satisfy a condition.
4. reduce() –   Reduces an array to a single value by applying a function to an accumulator and each element.

*/


//=========forEach=======

let num2 = [1,2,3,4];

// num2.forEach(function(n) {
//     console.log(n*2, n*3)
// })


// num2.forEach(n => console.log(n*2))

// num2.forEach((value, index, array) => {
//     console.log(index, value, array)                             //forEach never returns anything
// });





//=========map===========

let num3 = [1,2,3,4];

let doubled = num3.map(n => n*2)
// console.log(doubled)
// console.log(num3)                               //it returns new array








//=========filter===========

let num4 = [1,2,3,4]

let evens = num4.filter(n => n % 2 === 0)
// console.log(evens)








//#========reduce===========

let num5 = [1,2,3,4];

// let sum = num5.reduce((acc, n,c,arr) => {
//     console.log(c)
//     console.log(arr)
//     return acc + n
// }, 0);
// console.log(sum)



//---------example 2------

// const numbers = [10, 20, 30];

// const result = numbers.reduce((acc, value, index, arr) => {
//   console.log("Accumulator:", acc);
//   console.log("Current Value:", value);
//   console.log("Current Index:", index);
//   console.log("Original Array:", arr);
//   console.log("----------------");

//   return acc + value;
// }, 0);

// console.log("Final Result:", result); 




// users = [{name : "Shivam", age : 20}, {name : "Avdesh", age : 50}, {name : "itika", age : 40}];

// let user = users.find(x => x.age > 30)
// console.log(user)



// users = [{name : "Shivam", age : 20},2,3, {name : "Avdesh", age : 50}, {name : "itika", age : 40}];

// let user = users.findIndex(x => x.age > 30)
// console.log(user)


// users = [{name : "Shivam", age : 20},2, {name : "Avdesh", age : 10}, {name : "itika", age : 20}];

// let user = users.some(x => x.age > 30)
// console.log(user)


// users = [{name : "Shivam", age : 20},2, {name : "Avdesh", age : 50}, {name : "itika", age : 40}];

// let user = users.every(x => x.age > 30)
// console.log(user)





//=============Array Destructuring===============
// Destructuring ka matlab - unpack values from arrays or properties from objects directly into distinct variables
let arr = [1,2,3,4];

// // old way
// let x = arr[0]
// let y = arr[1]
// // .....

//new way
// let [p,q,r,s] = arr;
// let [j,,k,l] = arr;
// console.log(j,k,l)

// Defualt values
// let [p = 10, q = 20] = arr;
// console.log(p,q)



// //swapping (variables)

// let x = 1, y = 2;
// console.log(x,y);

//1. using temp


//2.  without temp
// x = x + y   //x = 3
// y = x - y   //y = 1
// x = x - y   //x = 2

//3. using XOR operator

// x = x ^ y;
// y = x ^ y;
// x = x ^ y;



//4. using destructuring      ------    (only in js)

// [x,y] = [y,x];


// console.log(x,y);




//#=============Rest & Spread==============================


//REST operator
// function sum(...num){
//   // num = [1,2,3,4,5]
//   return num.reduce((acc,b) => acc + b, 0);
// }
// console.log(sum(1,2,3,4,5))


//SPREAD operator

let j = [1,2,3]
let k = [...j]      // shallow copying
// console.log(k)


let nums = [1,2,3,4,5];
let more = [0, ...nums, 6,7,8];       //shallow opying
// console.log(nums, more)



//=========Copying==============
// 1. SHALLOW COPY  ------ an operation that creates a new object or array, but only copies the top-level values or memory references of the original
// 2. DEEP COPY     ------ creates an entirely independent clone of an object.


//shalllw copy
originl = [1,2,3,[4,5,9]];
copied = [...originl];         //shallow copy

// console.log('Original-', originl);
// console.log('Copied-',copied);
// copied[2] = 99
// copied[3][1] = 100
// copied[3][2][1] = true;

// console.log('Original-', originl);
// console.log('copied-',copied);



//deep copy
const original = [1, 2, [3, 4]];

const deepCopy = structuredClone(original);

deepCopy[2][0] = 100;

// console.log(original); // [1, 2, [3, 4]]
// console.log(deepCopy); // [1, 2, [100, 4]]





//Multi-Dimenional Array

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

// console.log(matrix[1][2]);

// for(let row of matrix){
//   for(let val of row){
//     console.log(val);
//   }
// }


