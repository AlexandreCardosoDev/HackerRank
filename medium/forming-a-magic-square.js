function formingMagicSquare(s) {
  const allMagicSquare = [
    [[8,1,6],[3,5,7],[4,9,2]],
    [[6,7,2],[1,5,9],[8,3,4]],
    [[2,9,4],[7,5,3],[6,1,8]],
    [[4,3,8],[9,5,1],[2,7,6]],
    [[6,1,8],[7,5,3],[2,9,4]],
    [[2,7,6],[9,5,1],[4,3,8]],
    [[4,9,2],[3,5,7],[8,1,6]],
    [[8,3,4],[1,5,9],[6,7,2]]
  ]
  let result = -1
  for (let magicSquare = 0; magicSquare < allMagicSquare.length; magicSquare++) {
    let tempResult = 0 
    for (let l = 0; l < 3; l++) {
      for (let c = 0; c < 3; c++) {
        let numberSquare = allMagicSquare[magicSquare][l][c]
        let numberSquareParam = s[l][c]
        tempResult += Math.abs(numberSquare - numberSquareParam)
      }  
    }  
    if (tempResult < result || result === -1) {
      result = tempResult
    }
  }
  return result
}

console.log(formingMagicSquare( [[5, 3, 4], [1, 5, 8], [6, 4, 2]]))