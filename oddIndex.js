function oddBall(arr){
    let oddIndex = arr.indexOf("odd")
    let numArr = arr.filter(num => typeof num === 'number')
    for(let num of numArr){
        if(num === oddIndex){
            return true
        }
    }
    return false
}
