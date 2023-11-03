function plusMinus(arr) {
  let plus = 0
  let minus = 0
  let zeros = 0

  plus = arr.filter((value) => value > 0).length / arr.length
  minus = arr.filter((value) => value < 0).length / arr.length
  zeros = arr.filter((value) => value === 0).length / arr.length

  console.log(plus.toFixed(6)) 
  console.log(minus.toFixed(6))
  console.log(zeros.toFixed(6))
}



plusMinus([1,1,0,-1,-1])