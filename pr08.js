/*
How would you check if a number is an integer?
Junior 
Top 179 JavaScript Interview Questions  JavaScript  179  
Answer

A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.
*/
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
