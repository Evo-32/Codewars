const orderedCount = function (text) {
  let chrs = text.split("");
  let result = [];
  chrs.forEach((chr) => {
    if (!result.some(([c]) => c === chr)) {
      let count = chrs.filter((c) => c === chr).length;
      result.push([chr, count]);
    }
  });
  return result;
};
