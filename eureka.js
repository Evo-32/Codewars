function sumDigPow(a, b) {
    let arr = []
    for(let i=a; i<b; i++){
        arr.push(i)
    }
    
    let squaredArr = arr
    .map((v) => v.toString().split('')
    .map((v,i) => Math.pow(Number(v),i+1)))
    return  squaredArr.map(v => v.reduce((sum,curr) => sum+curr,0)).filter((v,index) => v === arr[index])
}