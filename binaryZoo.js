function countTheAnimals(animals) {
  let counts = []
  counts.push(Object.values(animals))
    return counts.flat().map((num) => parseInt(num,2)).reduce((total,curr) => total += curr,0) ;
}