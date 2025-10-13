function digitalRoot(n) {
   while(n >= 10){
    n = String(n).split('').map(Number).reduce((total,num) => total + num ,0);
  }
  return n
}