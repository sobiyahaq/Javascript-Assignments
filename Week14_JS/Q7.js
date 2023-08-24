function generateOTP()
{
    return Math.floor(1000 + Math.random() * 9000);
}
var otp = generateOTP();
console.log("Here is your OTP:",otp);