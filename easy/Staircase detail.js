function staircase(n) {
  space = " "
  char = "#"
  for (let index = 1; index <= n; index++) {
    console.log( space.repeat(n - index) +  char.repeat(index) )  
    
  }

}


staircase(6)