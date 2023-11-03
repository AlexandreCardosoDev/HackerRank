function miniMaxSum(arr) {
  let min = JSON.parse(JSON.stringify(arr))
  min.sort((a,b) => (a-b))
  let max = JSON.parse(JSON.stringify(min))
  min.pop()
  max.shift()
  console.log(min.reduce((acumulador, elemento) => acumulador += elemento, 0) 
      + " " 
      + max.reduce((acumulador, elemento) => acumulador += elemento, 0)
  )
}




miniMaxSum([1,3,5,7,9])
