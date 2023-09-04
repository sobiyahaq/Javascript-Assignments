function manipulateString(inputString) {

    function printString() {
      console.log(`The manipulated string is: ${inputString.toUpperCase()}`);
    }
    return printString;
  }
  
  const callbackFunction = manipulateString("hello, world!");
  callbackFunction(); // Output: The output string is: HELLO, WORLD!
  