// Calling the function before declaration. It will give error
console.log(multiplyNumbers(10,10)); 

// Function 
var multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};

// This is correct way
console.log(multiplyNumbers(10,10)); 
