const readline = require("readline-sync"); //This line

console.log(" Enter the number for find the factors of that number:");
let num = Number(readline.question()); //This line we take for input from user instead of prompt()
console.log(`The factors of ${num} is:`);
// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

