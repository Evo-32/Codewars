function mergeArrays(arr1, arr2) {
  var mergedArr = [...arr1,...arr2];
  let sortedArr  =[...new Set(mergedArr.sort((a,b)=> a-b))];
  return sortedArr;
}