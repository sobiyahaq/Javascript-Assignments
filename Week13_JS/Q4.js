let numberOfChilds = 2; 
let numberOfAdults = 1; 
let numberOfSeniors = 1;
let ticketPriceForChild = 100;
let ticketPriceForAdult = 150;
let ticketPriceForSenior = 120;
let totalPrice = (numberOfChilds*ticketPriceForChild) + (numberOfAdults*ticketPriceForAdult)
+ (numberOfSeniors*ticketPriceForSenior);
console.log("The total ticket price is",totalPrice);