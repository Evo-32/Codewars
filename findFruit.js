function subtractSum(n){  
  while(n > 100){
    let sum = String(n).split('').map(Number).reduce((total,num) => total +=num);
    n -= sum
  }
  return fruits[n]
}
