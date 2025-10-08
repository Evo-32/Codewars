function arrayInfo(arr){
  if(arr.length === 0) return 'Nothing in the array!'
  let arrLength = arr.length
  let integersLength = arr.filter(item => typeof item === 'number' && Number.isInteger(item)).length
  let floatLength = arr.filter(item => typeof item === 'number' && !Number.isInteger(item)).length
  let stringLength = arr.filter(word => typeof word === 'string' && word !== ' ').length
  let whitespaces = arr.filter(space => space === ' ').length
  
  integersLength = integersLength|| null
  floatLength = floatLength || null
  stringLength = stringLength || null
  whitespaces = whitespaces|| null
  
  
  return [[arrLength],[integersLength],[floatLength],[stringLength],[whitespaces]]
}



