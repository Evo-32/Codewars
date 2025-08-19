function isVow(a) {
  return a.map(code => {
    const char = String.fromCharCode(code);
    return "aeiou".includes(char) ? char : code;
  });
}