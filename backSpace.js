function cleanString(s) {
  let result = [];
  if (s === "") return "";
  result = s
    .split("")
    .forEach((chr) => (chr === "#" ? result.pop() : result.push(chr)));
  return result.join("");
}
