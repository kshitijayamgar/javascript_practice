function sub(name) {
    console.log("In  function sub()");
    console.log( {name});
  }
  
  function M1(xyz) {
    console.log("You are in main function now");
    const name = prompt("Please enter your text.");
    console.log("now calling xyz();")
    xyz(name);
  }
  
  M1(sub);
  
