/*let b ="";
for(let i=1;i<=5;i++){
		
	for(let j=0;j<i;j++){
//	 console.log("*");
	b = b+"*";
	}

	"\n";

console.log(b);
}

*/

let n = 5;
let b = "";
for (let i = 1; i <= n; i++) {
  for (let j=1; j <= i; j++) {
    b = b + "*";
  }
//  string += "\n";
      b= b+"\n";
}
console.log(b);

