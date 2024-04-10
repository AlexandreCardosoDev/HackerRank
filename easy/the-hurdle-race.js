function hurdleRace(k, height) {
  let maxHeight = Math.max(...height)
  if (k >= maxHeight) {
    return 0
  } else {
    return maxHeight - k
  }
}


console.log(hurdleRace(2, [1,2,3,4,5,99999999999,1324,41,3,4,4]))