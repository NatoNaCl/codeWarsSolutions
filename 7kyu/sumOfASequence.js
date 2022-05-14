/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/

//P: 3 positive integers
//R: sum from begin to end by factor of step
//E:
//3,2,1 = 0
//1,3,1 = (1+2+3) = 6
//P:
//loop - initialize at begin, end at condition, final expression at step
//in loop we sum the integers
//return sum

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
