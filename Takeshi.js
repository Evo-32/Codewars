function knockKnock(str){
  let word = str.split(' ');
  let result = "!";
  for(let i=1; i< word.length; i++){
        let found = false;
      for(let chr of word[i]){
          if(word[i- 1].includes(chr)){
              result += chr;
              found = true;
              break;
          }
      }
      if(!found){
       result += '^';
  }
  }
  return result;
}