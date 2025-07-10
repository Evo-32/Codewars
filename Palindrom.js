function isPalindrome(x) {
  if (x === null || typeof x === "undefined") {
    return false;
  }
  
  const str = x.toString().toLowerCase();
  return str === str.split('').reverse().join('');
}