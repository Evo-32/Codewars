function add(num1, num2) {
  let result = [];

  let arrOne = String(num1).split('').map(Number);
  let arrTwo = String(num2).split('').map(Number);

  let maxLength = Math.max(arrOne.length, arrTwo.length);
  
  while (arrOne.length < maxLength) arrOne.unshift(0);
  while (arrTwo.length < maxLength) arrTwo.unshift(0);


  for (let i = 0; i < maxLength; i++) {
    let sum = arrOne[i] + arrTwo[i];
    result.push(sum);
  }

  return Number(result.join(''));
}