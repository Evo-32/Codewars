function findUnique(numbers) {
    let count = {}
    
    for(let num of numbers){
        count[num] = (count[num] || 0) +1
    }
    
    for(let num of numbers){
        if(count[num] === 1){
            return num
        }
    }
}