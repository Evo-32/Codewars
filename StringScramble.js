function scramble(str, arr) {
    let result = [];
  for(let i = 0; i < arr.length; i++){
     result[arr[i]] = str[i] ;
  }
  return result.join(''); 
}


function reOrder(str,arr){
    let result = [];
    let words = str.split(' ');
    for(let i=0; i< words.length; i++){
        result[arr[i]] = words[i]
    }
    return result.reverse().join(' ');
}