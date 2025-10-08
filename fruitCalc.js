function calculate(string) {
  return eval(string.replace('loses','-').replace('gains','+').replace(/[a-zA-Z]/g,''))
}



function calculate(string) {
    let words = string.split(' ')
    
    let hasIndex = words.indexOf('has')
    let number = Number(words[hasIndex + 1])
    
        if(words.includes('loses')){
            let losesIndex = words.indexOf('loses')
            number  -=  Number(words[losesIndex + 1])
        }else if(words.includes('gains')){
            let gainsIndex = words.indexOf('gains')
            number  +=  Number(words[gainsIndex + 1])
        }
  return number
  
}