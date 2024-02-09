function countingValleys(steps, path) {
  var valleys = 0  
  var stepCount = 0
  var stepCountOld = 0
  var pathAr = path.split("")
  pathAr.forEach(letter => {
    stepCountOld = stepCount
    if (letter == 'U') stepCount++
    else stepCount--
    if (stepCountOld == -1 && stepCount == 0) {
      valleys++
    }
  });
  return valleys
}

console.log(countingValleys(8, 'UDDDUDUUDU')) //1
