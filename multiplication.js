function multiTable(n) {
  let result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${i} * ${n} = ${i * n}`);
  }

  return result.join('\n');
}