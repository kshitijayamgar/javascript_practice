var reverse = 0;
   var remainder = 0;
const readline = require("readline-sync");



 console.log("Enter the number:");
debugger;

var n = Number(readline.question());
 while (n != 0) {
    remainder = n % 10;
         debugger;
    reverse = reverse * 10 + remainder;
    debugger;
   n=Math.floor(n/10);
  }

  console.log("The reversed number is as follow:");
  console.log(reverse);


