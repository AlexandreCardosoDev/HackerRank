function simpleArraySum(ar) {
  // Write your code here
  return ar.reduce((acumulador, elemento) => acumulador += elemento, 0)
}

simpleArraySum([1,1,2,2,3,3,4,4,5,5])