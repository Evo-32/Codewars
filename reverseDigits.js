function digitize(n) {
  let num = n.toString().split('').reverse();
  return num.map(Number);
}