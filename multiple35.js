function solution(number){
    let sum = 0
    let arr = []
    if(number< 0) return 0
    for(let i=1;i<number;i++){
        if(3*i < number){
            arr.push(3*i)
        }
        if(5*i < number){
            arr.push(5*i)
        }
    }
    return [...new Set(arr)].reduce((total,curr) => total += curr,0)
}