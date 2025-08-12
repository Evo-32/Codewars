function sumTwoSmallestNumbers(numbers) {  
let nberOrder = numbers.sort((a,b)=>  b-a);
  let sum =nberOrder.at(-1) + nberOrder.at(-2);
  return sum;
}