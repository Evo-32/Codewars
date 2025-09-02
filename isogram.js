function isIsogram(str){
    let word = str.toLowerCase()
    for(let i=0; i<word.length; i++){
        if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])){
            return false
        }
    }
    return true
  }
