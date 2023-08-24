const prices = [125,20,30];
function calculateTotalCartValue(array)
{
    var total=0;
    array.forEach(element => {
        total += element;
    });
return total
};

const totalValue = calculateTotalCartValue(prices)
console.log("The total cart value is",totalValue);