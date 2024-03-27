function catAndMouse(x, y, z) {
  var catA = x - z
  var catB = y - z
  if (catA < 0) {
    catA = catA * -1
  }
  if (catB < 0) {
    catB = catB * -1
  }
  if (catA < catB) return 'Cat A'
  else if (catA > catB) return 'Cat B'
  return 'Mouse C'
}

console.log(catAndMouse(1,4,3))