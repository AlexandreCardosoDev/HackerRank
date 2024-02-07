function bonAppetit(bill, k, b) {
  var sum = 0
  for (let item = 0; item < bill.length; item++) {
    sum += bill[item]    
  }
  if ((sum - bill[k])/ 2 === b)
    return 'Bon Appetit'
  else 
    return (b - ((sum - bill[k])/ 2))
}

console.log(bonAppetit([3,10,2,9],1,7))