function demonstrateVariableHoisting(num1, num2) {
  // Output: undefined
console.log("Value of num1:", sum); 
var sum = num1 + num2;
  // Output: Sum of num1 and num2
console.log("Value of sum after assignment is :", sum); 

return sum;
}

var value = demonstrateVariableHoisting(10, 10);
console.log("Final value is:", value);