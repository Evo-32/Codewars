function findShort(s){
  let words =  s.split(' ');
  let shortest = words[0].length;
 words.forEach((str,index)=>{
    if(str.length < shortest){
      shortest = str.length;
    }
  })
  return shortest
}