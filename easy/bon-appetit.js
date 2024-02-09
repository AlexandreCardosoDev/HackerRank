function bonAppetit(bill, k, b) {
  var sum = 0
  for (let item = 0; item < bill.length; item++) {
    sum += bill[item]    
  }
  if ((sum - bill[k])/ 2 === b)
    console.log('Bon Appetit')
  else 
    console.log((b - ((sum - bill[k])/ 2)))
}

bonAppetit([3,140,2,9],2,7)