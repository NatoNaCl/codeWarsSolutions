/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisorsCnt(n) {
  //declare variable to hold the number of divisors
  let divisors = 0;
  //for loop to run as long as the integer is <= given integer
  for (let i = 1; i <= n; i++) {
    //if statement checks for no remainders before adding 1 to number divisors
    if (n % i === 0) {
      divisors++;
    }
  }
  //return total number of divisors for integer n
  return divisors;
}
