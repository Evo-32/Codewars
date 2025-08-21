function swapTwo(array, a, b){
  const firstIndex = array.indexOf(a);
  const secondIndex = array.lastIndexOf(b);
  if(firstIndex !== -1 && secondIndex !== -1){
    const newArr =  [...array];
    [newArr[firstIndex],newArr[secondIndex]] = [newArr[secondIndex], newArr[firstIndex]]
    return newArr;
  }
  return array;
}