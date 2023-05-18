function sumArray(array) {
  const arr = [1, 4, 0, 9, 3];
  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {
    sum = sum+arr[i];
  }
  
  return sum;
}

console.log(sumArray([1, 4, 0, 9, 3]));
