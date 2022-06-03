/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all
multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

*/

//Input: positive integer
//Output: positive integer
//Plan:
//iterate over array of integers up to n
//use modulus(%) to determine if multiple of 3 or 5 up to n
//sum multiples of 3 and 5

function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
