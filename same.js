function comp(array1, array2){
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length ) return false
  let arr = array2.map(num => Math.sqrt(num)).sort((a,b) => a- b)
  return array1.sort((a,b) => a-b).every((value,index) => value === arr[index] )
}