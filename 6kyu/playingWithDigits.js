/*
Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd...
(a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that
    the sum of the digits of n taken to the successive powers of p
    is equal to k * n.

In other words:

    Is there an integer k such as :
    (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.
*/

//Input: positive integer abcd... and positive integer p
//Output: positive integer k otherwise -1
//Plan:
//convert n to string, iterate over each integer
//take each integer to the power of p
//sum each n**p and set strictly equal to k*n
//return k if it exists else return -1

function digPow(n, p) {
  let string = String(n);
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    result += Math.pow(parseInt(string[i]), p);
    p++;
  }

  return result % n === 0 ? result / n : -1;
}
