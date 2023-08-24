const products=[
{ name: "Laptop", price: 120000 },
{ name: "Mobile", price: 70000 },
{ name: "Laptop Bag", price: 20000 },
{ name: "Watch", price: 20000 },
{ name: "Mobile Charger", price: 1500 },
];
function calculateMaxandMin(array){

    var max = array[0].price;
    var min = array[0].price;
    var maxItemName = array[0].name;
    var minItemName = array[0].name;

    for (let i=0; i < array.length; i++) {
        if (array[i].price > max) {
            max = array[i].price;
            maxItemName =  array[i].name;
        }
        if (array[i].price < min) {
            min = array[i].price;
            minItemName =  array[i].name;
        }
    }
    console.log("The product with maximum ammount is",maxItemName,"which is priced at Rs.", max)
    console.log("The product with minimum ammount is",minItemName,"which is priced at Rs.",min);
}

calculateMaxandMin(products)
