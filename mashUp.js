function solve(a,b){
    let result = []
    for(let i=0; i<b.length; i++){
        if(!a.includes(b[i]) || a.includes(b[i])){
            let count = a.filter(v => v === b[i]).length
            result.push(count)
        }
    }
    return result
}


function solve(a,b){
  return b.map(w => a.filter(v => v === w).length)
}