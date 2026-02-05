function validate(n) {
  let result = [];
  let num = String(n).split("").map(Number);

  if (num.length % 2 !== 0) {
    for (let i = 0; i < num.length; i++) {
      if (i % 2 !== 0) {
        let doubled = num[i] * 2;

        if (doubled > 9) {
          doubled = String(doubled)
            .split("")
            .map(Number)
            .reduce((total, curr) => total + curr, 0);
        }

        result.push(doubled);
      } else {
        result.push(num[i]);
      }
    }
  } else {
    for (let i = 0; i < num.length; i++) {
      if (i % 2 === 0) {
        let doubled = num[i] * 2;

        if (doubled > 9) {
          doubled = String(doubled)
            .split("")
            .map(Number)
            .reduce((total, curr) => total + curr, 0);
        }

        result.push(doubled);
      } else {
        result.push(num[i]);
      }
    }
  }

  let sum = result.reduce((a, b) => a + b, 0);
  return sum % 10 === 0;
}
