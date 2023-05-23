let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += " A ";
  }
  string += "\n";
}
console.log(string);
/*
 O/P:-

 A  A  A  A  A 
 A  A  A  A 
 A  A  A 
 A  A 
 A 

*/
