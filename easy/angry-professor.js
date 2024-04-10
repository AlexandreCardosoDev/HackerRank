function angryProfessor(k, a) {
  let count = 0
  a.map((value) => {
    if (value <= 0 ) count++
  })
  return count >= k ? "NO" : "YES"
}

console.log(angryProfessor(3, [-1,-3,4,2]))
console.log(angryProfessor(2, [0,-1,2,1]))