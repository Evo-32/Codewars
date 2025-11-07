
function wantedWords(n, m, forbid_let) {
  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let word of wordList) { 
    let isForbidden = forbid_let.some(letter => word.includes(letter));
    if (isForbidden) continue;

    let vowelCount = 0;
    let consonantCount = 0;

    for (let chr of word) {
      if (vowels.includes(chr)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
    if (vowelCount === n && consonantCount === m) {
      result.push(word);
    }
  }

  return result;
}