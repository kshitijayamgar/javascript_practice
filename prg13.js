// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const readline = require("readline-sync");

console.log(" Enter the marks:");
let marks= Number(readline.question());

switch (true) {
	
	
	case marks >= 90:
		console.log("A");
		break;
	
	case marks >= 80:
		console.log("B");
		break;
	
	case marks >= 70:
		console.log("C");
		break;
	
	case marks >= 60:
		console.log("D");
		break;
	
	default:
		console.log("F");

}
