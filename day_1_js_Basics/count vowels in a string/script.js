let str = prompt("Enter a string").toLowerCase();
let vowels = 'aeiou'
let count = 0;

for(let char of str){
    // console.log(char)

    if (vowels.includes(char)){
        count++;
        console.log(char)
    }
}
console.log(count);