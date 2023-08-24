let deliveryType = "Standard";
//let deliveryType = "Express";
switch(deliveryType)
{
    case "Standard":
        console.log("Your shipment of ",deliveryType ,"would be delivered in 3-5 days");
        break;

        case "Express":
            console.log("Your shipment of ",deliveryType ,"would be delivered in 1-2 days");
            break;

        case "Overnight":
            console.log("Your shipment of ",deliveryType ,"would be delivered the next day");
            break;

        default:
            console.log("Your shipment will be delivered in 3-5 days");

}