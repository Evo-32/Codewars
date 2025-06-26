function points(games) {
  return games.reduce((total,match) =>{
    const [x,y] = match.split(":").map(Number);
    
    if (x > y) return total + 3;
    if (x === y) return total + 1;
    return total;
  },0);
}
console.log(points(["1:2","3:5","3:4"]));