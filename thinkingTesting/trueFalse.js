function testit(n){
  return n.toString(2).split('1').length-1
}

function testit(n){
  return n.toString(2).split('').filter(n => Number(n)=== 1).length;
}