
const inventory = {
  "TV": 1000,
  "Mobile Phone": 800,
  "Refrigerator": 1200,
};

const exchangeRate = 80;

const convertToINR = usd => usd * exchangeRate;

const convertedInventory = Object.fromEntries(
  Object.entries(inventory).map(([item, price]) => [item, convertToINR(price)])
);

console.log("Original Inventory:", inventory);
console.log("Converted Inventory (INR):", convertedInventory);
