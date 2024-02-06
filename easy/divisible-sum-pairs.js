function divisibleSumPairs(n, k, ar) {
  var count = 0
  for (let index = 0; index < ar.length -1; index++) {
    for (let sub_index = index + 1; sub_index < ar.length; sub_index++) {
      if((ar[index] + ar[sub_index]) % k === 0 )
        count++
    }    
  }
  return count
}


console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2])) //expect 5 valid 
