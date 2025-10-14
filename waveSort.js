function waveSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (
      (i % 2 === 0 && arr[i - 1] > arr[i]) ||
      (i % 2 !== 0 && arr[i - 1] < arr[i])
    ) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }
}