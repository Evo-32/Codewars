function divisibleBy(numbers, divisor){
  let divisibleNbers = [];
  for(let i=0; i<numbers.length; i++){
    let r = numbers[i] % divisor;
    if(r === 0){
      divisibleNbers.push(numbers[i])
    }
  }
  return  divisibleNbers
}C