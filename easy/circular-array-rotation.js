function circularArrayRotation(a, k, queries) {
  let aLength = a.length
  let result = []
  let rotation = (k % aLength)
  queries.forEach(position => {
    let newPosition = (position - rotation)
    if (newPosition < 0) {
      result.push(a[aLength + newPosition])
    } else {
      result.push(a[newPosition])
    }
  });  
  return result
}

console.log(circularArrayRotation([1,2,3,4,5,6,7,8,9], 0, [0, 1, 5, 8]))

/*
0   1 2 3 4 5 6 7 8 9
1   9 1 2 3 4 5 6 7 8
2   8 9 1 2 3 4 5 6 7
3   7 8 9 1 2 3 4 5 6
4   6 7 8 9 1 2 3 4 5
5   5 6 7 8 9 1 2 3 4
6   4 5 6 7 8 9 1 2 3
7   3 4 5 6 7 8 9 1 2 
8   2 3 4 5 6 7 8 9 1

*/


