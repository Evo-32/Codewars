function deleteNth(arr,n){
    let result = []
    let count = {}
  for(let num of arr){
      count[num] = (count[num] ||0)+1
      if(count[num] <= n){
      result.push(num)
      }
  }
  return result.map(Number)
  }