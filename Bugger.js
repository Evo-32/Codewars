function persistence(num) {
    let count = 0
    
    while(num >= 10){
        
          num = num.toString().split('').reduce((product,curr) => product * Number(curr), 1)
          count++
    }
  
    return count
}
