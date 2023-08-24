const productDetails = {
name: "Apple 2020 MacBook Air Laptop", price: 82000,
color: "Grey",
hardDisk: "256 GB",
};

let printDetails = function (obj) {
    let string = '';
 
    for (let property in obj) {
        if (typeof obj[property] == 'string') {
            string += property + ': ' + obj[property] + '\n';
        }
        else {
            string += property + ': ' + obj[property].toString() + '\n' ;
        }
    }
 
    return string;
}

console.log("Below are the product details.")
console.log(printDetails(productDetails));
