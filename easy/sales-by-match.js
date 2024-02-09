function sockMerchant(n, ar) {
  var a = Array.from(new Set(ar))
  console.log(a)
  // var pairMap = new Map()
  // var pairs = 0
  // ar.forEach(item => {
  //   pairMap.set(item, pairMap.get(item) ? pairMap.get(item) + 1 : 1)
  // });
  // pairMap.forEach((value, key) => {
  //   pairs += Math.floor(value / 2)
  // })
  // return pairs  
}

console.log(sockMerchant(7, [10,20,20,10,10,30,50,10,20]))