function findAverage(array) {
  if (array.length === 0){
    return 0;
  }else{
  var sum = 0;
  for( var i = 0; i<array.length;i++){
    sum += array[i];
  }
  var average = sum/array.length;
  return average;
}

console.log(findAverage([1,2,3]));
  }