function testit(s) {
  let result = "";
  
  for (let i = 0; i < s.length; i += 2) {
    const a = s.charCodeAt(i);
    const b = s.charCodeAt(i + 1) || a;
    
    const middle = Math.floor((a + b) / 2);
    result += String.fromCharCode(middle);
  }
  
  return result;
}