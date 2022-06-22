/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle
(starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

//Input: odd numbers
//Output: sum of odd numbers in the nth row
//Plan:
//for first odd number of each n -> (n * (n - 1) + 1)
//iterate over n to get number of odd numbers in each row
//add this to first odd number -> (i * 2)
//return sum

function rowSumOddNumbers(n) {
  let sum = 0;
  let firstOddNum = n * (n - 1) + 1;
  for (let i = 0; i < n; i++) {
    sum += firstOddNum + i * 2;
  }
  return sum;
}
