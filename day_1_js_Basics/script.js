// console.log(2+2)

// console.warn("This is a warning!")

// console.error("This is an error!")

// console.info("This is some information.")

// console.debug("This is a debug message.")

// console.table({name: "Alice", age: 30, city: "New York"})


// variable...

// var.   let.   const.



// const permanent = 3
// let temp = 4


// // permanent = 4
// console.log(permanent)
// temp = 5
// console.log(temp)



// let a = 3
// console.log(typeof(a))

// a = 'a'
// console.log(typeof(a))

// // let a = 5

// var b = 5
// var b = 'a'
// console.log(b)

//Naming Rules

//Data Types

// 1. Primitive DataType              

// String
// Number
// Boolean
// null // a = null
// undefined // a
//symbol
//bigint
//NaN


// let a = 4
// console.log("This is a:",  a)
// let b = null
// console.log("This is b", b)


//  2.Non-Primitive DT

//Object - Object, arrays, functions, dates, class


// Datatype Conversions

// let str = "42"         
// console.log(typeof(str))
// let num = Boolean(str)
// console.log(num)
// console.log(typeof(num))

// let nu = 43.56
// console.log(typeof(nu))



// Implicit Conversion

// console.log(2 + 2)
// console.log("5" + 2)        //"52".  -- string concatenation
// console.log(2 + "2")        //"22"
// console.log("2" * "2")      //4
// console.log("2" * "2")      //4
// a = "a"
// b = "b"
// console.log(a * b)      //NaN

// c = Number(a)
// d = Number(b)
// console.log(typeof(c))

// console.log(c * d)


// console.log(false + 1)
// console.log(true + 1)

// console.log(null + 1)
// console.log(undefined + 1)




// Falsy Values

// false, 0, null, "", undefined, NaN






// Operators

// Arithmatic Operator

// let a = 10, b = 5;

// console.log(a + b)      //  15  
// console.log(a - b)      //  5
// console.log(a * b)      //  50
// console.log(a / b)      //  2
// console.log(a % b)      // 0
// console.log(a ** b)     //100000

//Increment & Decrement

// let x = 5;

// let y = ++x;
// console.log(x)  //6
// console.log(y)
// let z = x++;
// console.log(z)
// console.log(x)

// x++;                //post increment
// console.log(x)
// ++x;                //pre increment
// console.log(x)




// Assignment Operator

let x = 10;
x += 5;         // x = x + 5 = 15
x -= 5;
x *= 5;
x /= 5;
x %= 5;

//Comparison Operator

// console.log(5 == 5)
// console.log(5 == "5")
// console.log(5 === 5)    //value and type
// console.log(5 != 5)
// console.log(5 !== 5)
// console.log(5 > 5)
// console.log(5 < 5)
// console.log(5 >= 5)
// console.log(5 <= 5)



// Logical Operator

// let a = true, b = false;

// console.log(a && b);        //AND   false
// console.log(a || b);        //OR    true
// console.log(!a);            // NOT  false

// console.log("hello" && "world")
// console.log(0 && "hello");
// console.log(2 && true);
// console.log("hello" || "world")
// console.log(!0);




//Ternary Operator

// let age = 24;
// console.log(age >= 18 ? "Mature" : "Immature")

// if (age >= 18) {
//     console.log("Mature");
// }
// else{
//     console.log("Infabdvfbsk")
// }





// STRINGS

let s1 = 'Shivam';
let s2 = "Avdesh";
let s3 = `Backticks`;


//concatenation


// Template Literals       //backticks

// let name = "Avdesh"
// let age = 34;

// console.log(`Hello, my name is ${name} and I am ${age} years old`);

// let text = `fnew hfiuesbf ehsfiubsekbf ueshfiuneskf uesbfiubnsekudbf 
// nfebsfun ueifunsil eshfiunalisudhf 
// nesiunf 
// efjiounsefse
// nesfuhske`
// console.log(text)




// // Methods
//  let n = "Avdesh Chauhan";

// console.log(n.length)          //14
// console.log(n.toUpperCase())   //AVDESH CHAUHAN
// console.log(n.toLowerCase());
// console.log(n.indexOf(" "));
// console.log(n.includes("Avdesh"));
// console.log(n.slice(-7))
// console.log(n.replace("Avdesh", "Avi"));
// console.log(n.substring(7,12));
// console.log(n.split(" "));
// console.log("abc".repeat(5));
// console.log(n[4]);


// A math Object

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(5.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(Math.random()*5) + 1);
// console.log(Math.abs(-8));
// console.log(Math.max(1, 3, 6));
// console.log(Math.min(7,3,9));
// console.log(Math.pow(2, 4));
// console.log(Math.sqrt(16));



// /
// // if- else (nested)


// let age = 34;
// let gender = "male"

// if (age <= 18){
//     if(gender == "male"){
//         console.log("18 & Male")
//     }   else {
//         console.log("18 but not male")
//     }
// }   else {
//     console.log("Gaand maro meri")
// }



// // -------SWITCH---------- // //

// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Today is monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tue");
//         break;
//     case "Wednesday":
//         console.log("Today is Wed");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;    
//     default:
//         console.log("Faaaaaa");
// }




// -------------LOOPS-----------------//

// for (let i = 0; i < 5; i++) {
//     console.log("Iteration", i); 
// }

// count = 0
// while (count < 5) {
//     console.log("Iterate:", count);
//     count++;
// }

// x = 10
// do {
//     console.log("HII", x)
//     x--;
// } while (x>5);




// let name = prompt("What is your name");
// console.log(name);
// console.log(typeof(name));


//  let age = Number(prompt("What is your age"));
//  if (age >= 18){ console.log("Mature")
//  }
// else{
//     alert("Immature")}






let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
let guess;
let attempts = 0;
let flag = false;

do {
    guess = Number(prompt("Type your guess between 1 to 10"));
    attempts++;
    if (attempts > 5){
        flag = true;
        console.log("You Lose");
        break;
    }
    if(guess > num) console.log("Big number typing");
    else if(guess < num)    console.log("Too small")
    console.log("Numberof attempts: ", attempts);

} while (guess !== num);
if (flag == false){
    console.log("You Win");
}


