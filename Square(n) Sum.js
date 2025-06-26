function squareSum(numbers){
  return numbers.map(n => n * n).reduce((a,b)=> a+b,0);
}
console.log(squareSum([1,2,3,4,5]));