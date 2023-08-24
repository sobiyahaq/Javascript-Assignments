const users=["Sobiya","Nitin","SRK","Salman","Akshay","Mithun","Govinda"]
function isUserPresent(user){

    if(users.includes(user))
    {
        console.log("Yes,",user, "is a valid user")
        return true
    }
    console.log("No,",user, "is not a valid user")
    return false
}
isUserPresent("Mithun")
isUserPresent("Someone")
