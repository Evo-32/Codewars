function seven(m) {
  let step = 0;
  while(m >= 100){
    let y = m % 10;
    let x = Math.floor(m / 10);
    m = x - 2 * y;
    step++ 
  }
  return [ m, step];
}