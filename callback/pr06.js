/* Explain what a callback function is and provide a simple example
Junior 
Top 179 JavaScript Interview Questions  JavaScript  179  
Answer

A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.
*/
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});

//o/p:- array has been modified [ 1, 2, 3, 4, 5, 100 ]
