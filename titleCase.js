function titleCase(title, minorWords) {
  if (!title) return '';

  let minor = minorWords ? minorWords.toLowerCase().split(' ') : [];
  let words = title.toLowerCase().split(' ');

  return words
    .map((word, index) => {
      if (index === 0 || !minor.includes(word)) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(' ');
}
