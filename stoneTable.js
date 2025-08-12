function solve(stones) {
  let stoness = stones.split('')
  let count = 0;
  for(let i=0; i<stoness.length; i++){
    if(stoness[i] === stoness[i-1]){
        count++;
    }
  }
  return count;
}