/*
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/

//Input: array of integers positive and negative
//Output: largest number and lowest number
//Plan:
//iterate over array
//compare each integer
//return the min and the max

//Using the sort() method
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

//Using Math methods
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//Using classic for loop
var min = function (list) {
  let min = list[0];
  for (let i = 0; i < list.length; i++) {
    let num = list[i];
    if (num < min) min = num;
  }
  return min;
};

var max = function (list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    let num = list[i];
    if (num > max) max = num;
  }
  return max;
};
