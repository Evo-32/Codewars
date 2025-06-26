function isOpposite(s1, s2){
  //coding here...
  if(s1 === "" && s2 === "") return false;
  return s1.length === s2.length && [...s1].every((char,i) => char !== s2[i] && char.toLowerCase() === s2[i].toLowerCase());
}