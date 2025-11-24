function twoSum(numbers, target) {
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            sum = numbers[i] + numbers[j]
            if(sum === target && i !== j){
                return [i,j]
            }
        }
    }
}