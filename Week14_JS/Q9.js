function uniqueCharactersCheck(name){
    const strToArr = name.split("");
    var set = new Set(strToArr);
    if(set.size== name.length)
    {
        console.log("The input string contains unique characters");
    }
    else{
        console.log("The input string contains duplicates");
    }
}
uniqueCharactersCheck("mithun")
uniqueCharactersCheck("anurag")