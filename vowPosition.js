function checkVowel(string, position) {
  if(position < 0 || position > string.length){
    return false
  }

 let chr  = string[position]
  return 'iuoaeIUOAE'.includes(chr) ;
};

