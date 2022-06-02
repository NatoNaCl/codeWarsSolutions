/*
Write a function which calculates the average of the numbers in a
given list.

Note: Empty arrays should return 0.
*/

//Input: array of numbers
//Output: average of all numbers in array
//Plan:
//sum individual values in array using iterator
//find # values in array using .length() method
//find average -> (sum of values in array) / (# of values in array)
//else return 0

function find_average(array) {
  return array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
}
