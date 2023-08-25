const delay = 3;
generateRandomNumberWithDelay(delay);

function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay;
    const progressInterval = setInterval(() => {
      if (remainingTime >0) {
        console.log("Generating random number in ",remainingTime," seconds...");
        remainingTime--;
      }   else {
        clearInterval(progressInterval);
        const randomNumber = Math.floor(Math.random() * 1000);
        console.log("Random number generated:", randomNumber);
      } 
    }, 1000);
  
    setTimeout(() => {}, delay * 1000);
  }
  

  