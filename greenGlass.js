function stepThroughWith(word) {
  return /([a-zA-Z])\1/.test(word);
}