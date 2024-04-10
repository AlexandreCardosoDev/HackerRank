function beautifulDays(i, j, k) {
  let count = 0
  let numReverse = ""
  while(i <= j){
    numReverse = [...i.toString()]
                  .reverse()
                  .join('') 
                  * 1;
    if (Number.isInteger(Math.abs(i - numReverse) / k)){
      count++
    }
    i++
  }
  return count
}

console.log(beautifulDays(20,30,5))