function greetWithPromise(name) {
    const promise = new Promise((resolve, reject) => {
        if (typeof name === 'string' && name.trim() !== '') {
          resolve(`Hello, ${name}!`);
        } else {
          reject(new Error('Invalid name'));
        }
      });
    return promise;
  }
  
  greetWithPromise("Mithun")
    .then(greeting => {
      console.log(greeting); // Output: Hello, Mithun!
    })
    .catch(error => {
      console.error(error.message);
    });
  