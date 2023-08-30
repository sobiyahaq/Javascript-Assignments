function demonstrateHoisting() {
    console.log(num1);  // Output: undefined
    console.log(num2);  // Throws ReferenceError
    console.log(num3);  // Throws ReferenceError
  
    var num1 = 10;
    let num2 = 20;
    const num3 = 30;
  
    console.log(num1);  
    console.log(num2);  
    console.log(num3);  
  }
  
  demonstrateHoisting();
  




