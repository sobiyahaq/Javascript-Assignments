const sentence = "please please submit your assingment on time, your assignments are important"
function wordCounter(string){
    var array = string.split(" ")
   
    var map = new Map()
    for(var i =0;i<array.length;i++){
        if(!map.has(array[i]))
        {
            map.set(array[i],1)
        }
        else
        {
            var occurrence = map.get(array[i])
            map.set(array[i],occurrence+1)
        }

    }
    return map
}

const result = wordCounter(sentence)
console.log(result)