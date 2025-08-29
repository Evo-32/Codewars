function toCamelCase(str){
    let camel = ''
  let words = str.replace(/[_-]/g,' ');
  for(let i=0; i<words.length; i++){
      if(words[i-1] === ' '){
           camel += words[i].toUpperCase()
      }
      else{
           camel += words[i];
      }
  }
  return camel.replace(/[' ']/g,'')
}