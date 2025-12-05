function sumUpNumbers(arr) {
  const total = arr
    .map(nber => {
      let num = String(nber);

      if (num.includes('.') && num.includes(',')) {
        if (num.lastIndexOf(',') > num.lastIndexOf('.')) {
          num = num.replace(/\./g, '').replace(',', '.');
        } else {
          num = num.replace(/,/g, '');
        }
      } else if (num.includes(',')) {
        if (num.indexOf(',') === num.lastIndexOf(',') && num.split(',')[1].length <= 2) {
          num = num.replace(',', '.');
        } else {
          num = num.replace(/,/g, '');
        }
      }

      return parseFloat(num) || 0;
    })
    .reduce((a, b) => Number((a + b).toFixed(2)), 0);

  return Number(total.toFixed(2)).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}