function capitalsFirst(str){
  let capital = []
  let lower = []
  let words = str.split(' ')
  words.forEach((word)=>{
      if (!/^[A-Za-z]/.test(word)) return;
    else if(word[0] === word[0].toUpperCase()){
      capital.push(word)
      capital.join('')
    }else{
      lower.push(word)
      lower.join('')
    }
  })
  let result =  [...capital,...lower]
  return result.join(' ')
}