// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let nums = 0;
  for (let i = 0; i < numbers.length; i++) {
    nums += numbers[i] * numbers[i];
  }
  return nums;
}

//Using the .forEach() method

function squareSum(numbers) {
  let nums = 0;
  numbers.forEach((number) => {
    nums += number * number;
  });
  return nums;
}
