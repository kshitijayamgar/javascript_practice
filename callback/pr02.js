function isOdd(number) {

    if(number % 2== 0){
        console.log("its even num");
    }
    else{
        console.log("its odd num");
    }
    
}
  //debugger;

  function filter(number, fn) {
      
  }
  var number =6;
  console.log(filter(number, isOdd(number)));
