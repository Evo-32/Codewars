function hammingWeight(x) {
  let count = 0;
  while (x > 0) {
    if (x % 2 === 1) {  
      count++;
    }
    x = Math.floor(x / 2);
  }
  return count;
}

/*--- string method ---*/
function hammingWeight(x){
  let binary = x.toString(2);
  let binArr = String(binary).split('');
  return  binArr.filter((num)=> num === '1').length
}