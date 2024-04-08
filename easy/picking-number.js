function pickingNumbers(a) {
  a.sort()
  let maxLenght = 0
  let tempLenght = 0
  let number = a[0]
  for (let index = 0; index < a.length; index++) {
    if (index + 1 < a.length) {
      if (Math.abs(number - a[index +1]) <= 1){
        tempLenght += 1  
      } else {
        tempLenght = 0
        number = a[index+1]
      }
      if (maxLenght < tempLenght) {
        maxLenght = tempLenght
      }
    }
  }
  if (maxLenght > 0) return maxLenght + 1
  else return maxLenght
}


console.log(pickingNumbers([4,6,5,3,3,1]))
