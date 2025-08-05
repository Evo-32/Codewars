function firstNonConsecutive (arr) {
  for (var i = 1; i < arr.length; i++) {
    var cur = arr[i];
    var prev = arr[i-1];
    
    if (cur - prev > 1) {
      return cur;
    }
  }
  return null;
}