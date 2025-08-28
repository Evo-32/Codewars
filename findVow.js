function vowelIndices(word){
  let result = []
  let vowels = 'iuoaeyIUOAEY';
  word.split('').forEach((chr,index)=>{
      if(vowels.includes(chr)){
          result.push(index+1)
      }
  })
  return result
}