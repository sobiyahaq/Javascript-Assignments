function doubleUsingCallback(arr, callback) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    const doubledArray = arr.map(callback);
    return doubledArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  

  const resultArray = doubleUsingCallback(inputArray, function doubleElement (element) {
    return element * 2;
  });
  
console.log(resultArray); // Output: [2, 4, 6, 8, 10]