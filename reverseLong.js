function shorterReverseLonger(a,b){
    let longest = ''
    let shortest = ''
  let aLen = a.length
  let bLen = b.length
  if(aLen === bLen){
    shortest = b
    longest = a 
  }
  else if(aLen > bLen){
     shortest = b
     longest = a
  }else {
     shortest = a
     longest = b
  }
  return `${shortest}${longest.split('').reverse().join('')}${shortest}`
}