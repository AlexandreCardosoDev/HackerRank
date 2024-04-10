function saveThePrisoner(n, m, s) {
  let rest = (s + m - 1) % n
  if (rest === 0) {
    return n
  } else {
    return rest
  }
}

console.log(saveThePrisoner(4,6,2))