const eventDate = '2023-08-31'
function calculateRemainingDays(date){
    date = new Date(date);
    const todayDate = new Date();
    var diffInTime = date.getTime() - todayDate.getTime();  
    var diffInDays = diffInTime / (1000 * 3600 * 24);
    diffInDays = Math.round(diffInDays);
    return diffInDays 
}
console.log(calculateRemainingDays(eventDate));