function sc(s){
  let result = ''
  for(let chr of s){
    if(s.includes(chr.toUpperCase())&& s.includes(chr.toLowerCase())){
      result += chr
    }
  }
    return result;
}