function utopianTree(n) {
  let height = 0
  for (let index = 0; index <= n; index++) {
    if (index%2 === 0 ){
      height += 1
    } else {
      height *= 2
    }
  }
  return height
}


console.log(utopianTree(0))
console.log(utopianTree(1))
console.log(utopianTree(4))
console.log(utopianTree(5))