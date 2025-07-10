function guessBlue(blueStart, redStart, bluePulled, redPulled) {
   var currentBlue = blueStart -bluePulled;
  var currentRed = redStart - redPulled;
  var totalRemaining = currentBlue + currentRed;
  var drawingBlue = currentBlue / totalRemaining;
    return drawingBlue;
}