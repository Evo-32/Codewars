function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((sum,point) => sum += point)/classPoints.length
  return yourPoints > average? true : false
}