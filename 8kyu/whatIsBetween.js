/*
Complete the function that takes two integers (a, b, where a < b) and return
an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]
*/

//input: integer
//output: array with integers
//plan:
//declare empty array
//conditional to check whether a < b
//add given integers and integers between them to new array

function between(a, b) {
  let array = [];
  while (a <= b) {
    array.push(a);
    a += 1;
  }
  return array;
}
