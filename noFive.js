function dontGiveMeFive(start, end){
    let count = 0
    for(let i=start; i<=end; i++){
        let num = i.toString()
        if(!num.includes('5')){
            count++
        }
    }
    return count
}