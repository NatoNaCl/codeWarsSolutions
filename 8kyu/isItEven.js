/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for
this kata.
*/

//input: positive/negative, integer, float
//output: boolean
//plan: conditional testing even or odd
//to check even need # % 2 === 0 or # % 2 === 1
//examples:
// 5 % 2 => false
// 23 % 2 => false
// 6 % 2 => true
// 2.3 % 2 => false

function testEven(n) {
  return n % 2 === 0 ? true : false;
}
