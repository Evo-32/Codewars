function menFromBoys(arr){
  let men = arr.filter(p => p%2 === 0).sort((a,b) => a-b)
  let boys = arr.filter(p => p%2 !== 0).sort((a,b) => b-a)
  let result =  [...men,...boys]
  return [...new Set(result)]
}