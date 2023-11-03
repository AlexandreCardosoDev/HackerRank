/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let result = Math.max.apply(null, candles)
  return candles.filter((value) => value === result).length


}


    const candles = [4,4,1,3,41]

    const result = birthdayCakeCandles(candles);

   console.log(result)
