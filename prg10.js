
const readline = require("readline-sync");
  
console.log(" Enter the number to check even or odd:");
let j = Number(readline.question());

	if(j%2==0){
		console.log("num is even:",j);
	}
	else{
		console.log("number is odd:",j);
	}
//let i=prompt("enter the value:");
