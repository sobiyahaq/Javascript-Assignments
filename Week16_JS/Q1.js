
function reverseStringAfterDelay(str, delay) {
  setTimeout(() =>{
    const output = str.split('').reverse().join('');
    console.log("Reversed string:", output);
}, delay);
}

const input = "Hello, world!";
const delayMilliseconds = 2000; 

reverseStringAfterDelay(input, delayMilliseconds);
