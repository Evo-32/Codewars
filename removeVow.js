function disemvowel(str) {
  let vowels = /[iuoaeIUOAE]/g;
  return str.replace(vowels, '');
}