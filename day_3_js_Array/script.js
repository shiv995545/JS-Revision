//--------Array---------
// An array is an oredred list of values. In which we can store collections(integer, string, boolean etc...).

//----------Creating--------

let fruits = ["Apple", "Banana", "Mango", 1,2,3, null, true]
let num = [3,5,2,6,7,4,9,8,1]
let num1 = [33,55,22,600,79,47,9,8,1]
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
let b = fruits.push("Avdesh")                       //push returns the updated array's length
let a = fruits.pop()                                //removes the last value and return gthe same value

let z = fruits.unshift("first")                             //unshift add value in very beginning
let c = fruits.shift()                                      //removes the very beginning elemnt and return the value


fruits.splice(3, 0, 99, [1, "a"])                   //splice(index, dlt elments, add multiple elmts)

num.sort()                                         //wrong hai use hi nhi krna hai
num1.sort((a,b) => a - b)                  //ascending
num1.sort((a,b) => b - a)                  //descending



//-------------  Non- mutating methods on array  ------------

// num = [1,2,3,4,5,6,7,8,9]

// let x = num.slice(undefined, 5)
// let x = num.concat([10,20,30])
// let x = num.includes(5)
// let x = num.indexOf(99)                         //-1. (not found)
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

// nums.forEach(function(n){
//     console.log(n*2, n*3)
// })
// num2.forEach(n => console.log(n*2))

// nums.forEach((value, index, array) => {
//     console.log(index, value)                             //forEach never returns anything
// });





//=========map===========

let num3 = [1,2,3,4];

let doubled = num3.map(n => n*2)
// console.log(doubled)
// console.log(num2)                               //it returns new array








//=========filter===========

let num4 = [1,2,3,4]

let evens = num4.filter(n => n % 2 === 0)
// console.log(evens)








//#========reduce===========

// let num5 = [1,2,3,4];
// let sum = num5.reduce((acc, n, c, arr) => {
//     console.log(c)
//     console.log(arr)
//     return acc + n
// }, 0);
// console.log(sum)



//---------example 2------

/* const numbers = [10, 20, 30];

const result = numbers.reduce((acc, value, index, arr) => {
  console.log("Accumulator:", acc);
  console.log("Current Value:", value);
  console.log("Current Index:", index);
  console.log("Original Array:", arr);
  console.log("----------------");

  return acc + value;
}, 0);

console.log("Final Result:", result); */




// users = [{name : "Shivam", age : 20},2, {name : "Avdesh", age : 50}, {name : "itika", age : 40}];

// let user = users.find(x => x.age > 30)
// console.log(user)



// users = [{name : "Shivam", age : 20},2, {name : "Avdesh", age : 50}, {name : "itika", age : 40}];

// let user = users.findIndex(x => x.age > 30)
// console.log(user)


// users = [{name : "Shivam", age : 20},2, {name : "Avdesh", age : 10}, {name : "itika", age : 20}];

// let user = users.some(x => x.age > 30)
// console.log(user)


// users = [{name : "Shivam", age : 20},2, {name : "Avdesh", age : 50}, {name : "itika", age : 40}];

// let user = users.every(x => x.age > 30)
// console.log(user)





