function even(num) {
    if(num%2==0){
      console.log("num is even");
    }
    else{
        console.log("num is odd");
    }
  }
  
  function simple(xyz) {
   var num=  parseInt(prompt("enter the number"));
    xyz(num);
  }
  
  simple(even);
  
  
