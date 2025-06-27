function arrayPlusArray(arr1, arr2) {
  return ([...arr1,...arr2]).reduce((sum,n)=> sum + n, 0);
}