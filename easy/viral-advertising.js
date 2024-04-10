function viralAdvertising(n) {
  let cumulative = 0
  let shared = 5
  let liked = 0
  for (let index = 1; index <= n; index++) {
    liked = Math.floor(shared/2)
    cumulative += liked
    shared = liked * 3
  }
  return(cumulative)
}

console.log(viralAdvertising(5))