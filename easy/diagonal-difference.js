function diagonalDifference(arr) {
  let dig = 0
  let digInvertido = 0
  let arrayInvertido = JSON.parse(JSON.stringify(arr))

  
  for (let i = 0; i < arr.length; i++) {
      
      arrayInvertido[i].reverse()

      for (let x = 0; x < arr[i].length; x++) {
      if (i===x){
          dig += arr[i][x]
          digInvertido += arrayInvertido[i][i]
      }
      }
  }
  console.log(dig)
  console.log(digInvertido)
  return Math.abs(dig - digInvertido)

}

diagonalDifference([[1,2,3],[1,2,3],[1,2,3]])