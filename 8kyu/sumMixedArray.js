// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Using parseInt() method, Number() method also works
function sumMix(x) {
  let sum = 0;
  for (let y of x) {
    sum += parseInt(y);
  }
  return sum;
}

// Using reduce() method and Unary plus (+) operator
function sumMix(x) {
  return x.reduce((a, b) => a + +b, 0);
}
