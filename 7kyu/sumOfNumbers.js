/*
Given two integers a and b, which can be positive or negative, find
the sum of all the integers between and including them and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

//Input: 2 integers(+ or -)
//Ouput: integer, but if a === b return a or b
//Plan:
//conditional if true, sum numbers else return a or b
//iterator to loop through values a through b

function getSum(a, b) {
  if (a > b) {
    let sum = a;
    while (b < a) {
      sum += b;
      b++;
    }
    return sum;
  } else if (b > a) {
    let sum = b;
    while (a < b) {
      sum += a;
      a++;
    }
    return sum;
  } else {
    return a;
  }
}
