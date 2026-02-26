function candles(candlesNumber, makeNew) {
  let leftOvers = 0
  let burnedCandles = 0
  
  while(candlesNumber >0){
    burnedCandles += candlesNumber
    leftOvers += candlesNumber
    candlesNumber = Math.floor(leftOvers/makeNew);
    leftOvers = leftOvers % makeNew
  }
  return burnedCandles
  
}