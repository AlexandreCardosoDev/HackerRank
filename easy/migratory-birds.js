function migratoryBirds(arr) {
  var frequency = new Map()
  var mostFrequently = 0
  var FrequentlyArr = []
  arr.forEach(element => {
    frequency.set(element, frequency.get(element) ? frequency.get(element) + 1 : 1)
  });

  frequency.forEach((value, key) => {
    if (value > mostFrequently) {
      FrequentlyArr = []
      FrequentlyArr.push(key)
      mostFrequently = value
    } else if (value === mostFrequently) {
      FrequentlyArr.push(key)
    }
  })

  return FrequentlyArr.sort()[0]
}

console.log(migratoryBirds([4,3,3,3,3,3,4,4,4,4]))