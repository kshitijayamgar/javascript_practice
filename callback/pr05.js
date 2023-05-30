function is_positive(num) {
    if(num==0){
      console.log("you are entered zero");
    }
    if(num>0){
        console.log("num is positive");
    }
    else{
        console.log("num is negative");
    }
  }
  
  function simple(xyz) {
   var num=  parseInt(prompt("enter the number"));
    xyz(num);
  }
  
  simple(is_positive);
  
